// src/components/todoform.js
"use client";
import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdd = () => {
    if (!name || !desc) return;
    
    // Creating the todo object with a simple ID
    const newTodo = {
      id: Math.floor(Math.random() * 1000), // Simple random ID
      name: name,
      description: desc
    };

    onAdd(newTodo); // Sending data back to main page
    setName("");    // Resetting fields
    setDesc("");
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "250px" }}>
      <h3>Add Todo</h3>
      
      <input 
        type="text" 
        placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", marginBottom: "5px" }}
      />
      
      <input 
        type="text" 
        placeholder="Description" 
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />

      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}