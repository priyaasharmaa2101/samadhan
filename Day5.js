// Day 5 - Express.js Basics
// Install Express: npm install express

const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Sample student data
let students = [
  { id: 1, name: "Aarav", age: 20 },
  { id: 2, name: "Isha", age: 21 },
  { id: 3, name: "Rohan", age: 22 }
];

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Day 5 - Express.js Basics 🚀");
});

// GET route → return all students
app.get("/students", (req, res) => {
  res.json(students);
});

// POST route → add a new student
app.post("/students", (req, res) => {
  const { name, age } = req.body;

  // validation check
  if (!name || !age) {
    return res.status(400).json({ error: "Name and age are required" });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    age
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
