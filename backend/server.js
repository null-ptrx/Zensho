import 'dotenv/config'
import express from 'express';
import { logger } from './middleware/logger.js'
const app = express();
app.use(express.json())
app.use(logger);

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 24,
    city: "New York",
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 29,
    city: "Los Angeles",
    isActive: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 22,
    city: "Chicago",
    isActive: true,
  },

];
app.get('/', (req, res) => {
  res.send(`dhami`);
});

app.get('/api/notes', (req, res) => {
  res.json(users);
});

app.post('/api/notes', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    city: req.body.city,
    isActive: req.body.isActive
};
users.push(newUser);
res.status(201).json(newUser)
});

app.put('/api/notes/:id', (req, res) => {
  let updatedData = req.body;
  let index = users.findIndex((index) => index.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({error: "user not found"})
  }
  users[index] = {...users[index], ...updatedData};
  res.json(users[index])
});

app.delete('/api/notes/:id', (req, res) => {
  let index = users.findIndex((user) => user.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({error: "user not found"})
  } 
  users.splice(index, 1);
  res.status(201).json({message : "user deleted"});
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port http://${process.env.URL}:${process.env.PORT}`);
});