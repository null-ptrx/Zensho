import 'dotenv/config'
import express from 'express';
import { logger } from './middleware/logger.js'
import { connectDb } from './config/db.js';
import { Note } from './models/Note.js';

const app = express();
app.set('view engine', 'ejs');
app.use(express.json())
app.use(logger);

app.get('/admin', async (req, res) => {
  let notes = await Note.find();
  res.render(`admin.ejs`, {notes});
});

app.get('/api/notes', async (req, res) => {
  let notes = await Note.find();
  res.json(notes);
});

app.post('/api/notes', async (req, res) => {
  const newNote = await Note.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    city: req.body.city,
    isActive: req.body.isActive
  });
  res.status(201).json(newNote)
});

app.put('/api/notes/:id', async (req, res) => {
  let updatedData = req.body;
  let id = req.params.id;
  let updatedDoc = await Note.findByIdAndUpdate(id, updatedData, { new: true });
  if (!updatedDoc) {
    return res.status(404).json({ error: "Note not found" });
  }
  res.json(updatedDoc);
});

app.delete('/api/notes/:id', async (req, res) => {
  let id = req.params.id;
  let deletedDoc = await Note.findByIdAndDelete(id);
  if (!deletedDoc) {
    return res.status(404).json({ error: "Note not found" });
  }
  res.json(deletedDoc);
});

const startServer = async () => {
  try {
    await connectDb();
    console.log('db connected');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Example app listening on port http://${process.env.URL}:${process.env.PORT}`);
    });
  } catch (err) {
    console.log("failed to connect database");
    throw err; // ← re-throw so the caller knows it failed

  }
}
startServer();