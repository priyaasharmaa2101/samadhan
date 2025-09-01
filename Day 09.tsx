// Backend
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


let students = [
  { id: 1, name: "Alice", age: 20, course: "CSE" },
  { id: 2, name: "Bob", age: 21, course: "ECE" },
  { id: 3, name: "Charlie", age: 22, course: "ME" }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// --------------------------------------------------------------------------------------
// Frontend

import { useEffect, useState } from "react";

interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

const StudentDirectory = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data: Student[]) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading students...</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-96">
      <h1 className="text-xl font-bold text-center mb-4">🎓 Student Directory</h1>
      <ul className="space-y-2">
        {students.map((student) => (
          <li
            key={student.id}
            className="p-3 border rounded-lg hover:bg-gray-50"
          >
            <p className="font-semibold">{student.name}</p>
            <p className="text-sm text-gray-600">
              Age: {student.age} • Course: {student.course}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDirectory;

//-------------------------------------------------------------------------------------------------
// App.tsx


import StudentDirectory from "./StudentDirectory";


function App() {
  

  return (
    <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <StudentDirectory />
    </div>
    </>
  )
}

export default App
