"use server";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// GET: Fetch the list of todos
export async function getTodos() {
  const res = await fetch(`${API_URL}?_limit=10`); 
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}

// POST: Save a new todo
export async function saveTodo(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}

// PUT: Update an existing todo
export async function updateTodo(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}

// DELETE: Remove a todo
export async function deleteTodo(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return { success: res.ok, id };
}