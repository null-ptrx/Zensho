import mongoose from 'mongoose'
const noteSchema = new mongoose.Schema({
        id: Number,
        name: String,
        email: String,
        age: Number,
        city: String,
        isActive: Boolean,
})

export const Note = mongoose.model('Note', noteSchema)