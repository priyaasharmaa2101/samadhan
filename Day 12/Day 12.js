const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, text: "Learn React", done: false },
  { id: 2, text: "Practice DSA", done: false },
];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});


app.post("/api/todos", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text required" });

  const newTodo = { id: todos.length + 1, text, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: "Deleted successfully" });
});

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
