const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// DB
let teams = [
  {
    id: 1,
    name: "Code N Pray",
    members: ["Ajay", "Arsh", "Om"],
    project: "AI Tutor",
    score: 95
  },
  {
    id: 2,
    name: "Bug Smashers",
    members: ["Johar", "Karan"],
    project: "Smart ERP",
    score: 88
  }
];

// GET all teams
app.get("/api/teams", (req, res) => {
  res.json(teams);
});

// GET single team by id
app.get("/api/teams/:id", (req, res) => {
  const team = teams.find(t => t.id === parseInt(req.params.id));
  team ? res.json(team) : res.status(404).json({ error: "Team not found" });
});

// POST (add new team)
app.post("/api/teams", (req, res) => {
  const { name, members, project } = req.body;
  const newTeam = {
    id: teams.length + 1,
    name,
    members,
    project,
    score: null
  };
  teams.push(newTeam);
  res.status(201).json(newTeam);
});

// PUT (update team)
app.put("/api/teams/:id", (req, res) => {
  const team = teams.find(t => t.id === parseInt(req.params.id));
  if (!team) return res.status(404).json({ error: "Team not found" });

  const { name, members, project, score } = req.body;
  if (name) team.name = name;
  if (members) team.members = members;
  if (project) team.project = project;
  if (score !== undefined) team.score = score;

  res.json(team);
});

// DELETE team
app.delete("/api/teams/:id", (req, res) => {
  const index = teams.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Team not found" });

  const deleted = teams.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(PORT, () => console.log(` Hackathon Team API running on port ${PORT}`));
