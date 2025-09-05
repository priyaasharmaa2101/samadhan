const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


const noteSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Note = mongoose.model("Note", noteSchema);


app.get("/api/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});


app.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.json(newNote);
});


app.put("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updated = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
  res.json(updated);
});


app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.json({ message: "Note deleted" });
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
