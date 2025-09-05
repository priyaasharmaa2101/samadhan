import { useEffect, useState } from "react";

type Note = {
  _id: string;
  title: string;
  content: string;
};

export default function NotesApp() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fetch notes
  useEffect(() => {
    fetch("http://localhost:5000/api/notes")
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  // Add note
  const addNote = async () => {
    const res = await fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    const data = await res.json();
    setNotes([...notes, data]);
    setTitle("");
    setContent("");
  };

  // Delete note
  const deleteNote = async (id: string) => {
    await fetch(`http://localhost:5000/api/notes/${id}`, { method: "DELETE" });
    setNotes(notes.filter(note => note._id !== id));
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-[500px]">
      <h1 className="text-2xl font-bold mb-4">Notes App</h1>

      <input
        className="w-full border p-2 rounded mb-2"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border p-2 rounded mb-2"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button
        onClick={addNote}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-600"
      >
        Add Note
      </button>

      <ul>
        {notes.map(note => (
          <li key={note._id} className="mb-3 p-3 border rounded-lg flex justify-between">
            <div>
              <h2 className="font-bold">{note.title}</h2>
              <p>{note.content}</p>
            </div>
            <button
              onClick={() => deleteNote(note._id)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
