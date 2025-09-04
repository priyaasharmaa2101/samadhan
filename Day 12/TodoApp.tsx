import { useEffect, useState } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");


  useEffect(() => {
    fetch("http://localhost:5000/api/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);


  const addTodo = async () => {
    if (!newTodo.trim()) return;
    const res = await fetch("http://localhost:5000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newTodo }),
    });
    const data = await res.json();
    setTodos([...todos, data]);
    setNewTodo("");
  };

  const deleteTodo = async (id: number) => {
    await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-96">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task"
          className="flex-1 border p-2 rounded-lg"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
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
    