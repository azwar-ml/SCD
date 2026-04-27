"use client";
import { useState, useEffect } from "react";
import { getTodos, saveTodo, updateTodo, deleteTodo } from "../actions/server-actions";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [editId, setEditId] = useState(null);

  // Initial Fetch
  useEffect(() => {
    getTodos().then(setTodos).catch(console.error);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      const res = await updateTodo(editId, formData);
      console.log("Saved Message: Updated successfully!", res);
      // Update local state so UI reflects changes
      setTodos(todos.map(t => t.id === editId ? { ...res, id: editId } : t));
    } else {
      const res = await saveTodo(formData);
      console.log("Saved Message: Todo submitted successfully!", res);
      // Add to top of list with a fake ID for UI
      setTodos([{ ...res, id: Date.now() }, ...todos]);
    }
    closeModal();
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({ title: "", body: "" });
    setEditId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      await deleteTodo(id);
      setTodos(todos.filter(t => t.id !== id));
      console.log("Deleted successfully. ID:", id);
    }
  };

  return (
    <main className="p-10 font-sans">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">SCD Week 14: Todo Manager</h1>
        <Button onClick={() => setIsOpen(true)}>Add Todo</Button>
      </div>

      <div className="border rounded-lg overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.length > 0 ? (
              todos.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell className="text-gray-500">{todo.id}</TableCell>
                  <TableCell className="font-medium">{todo.title}</TableCell>
                  <TableCell className="text-gray-600 truncate max-w-xs">{todo.body}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="sm" onClick={() => {
                      setEditId(todo.id);
                      setFormData({ title: todo.title, body: todo.body });
                      setIsOpen(true);
                    }}>Edit</Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(todo.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-10 text-gray-400">Loading data...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Centered Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md animate-in fade-in zoom-in duration-200">
            <h2 className="text-xl font-bold mb-4">{editId ? "Update Task" : "Create New Task"}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold">Title</label>
                <input 
                  className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold">Description</label>
                <textarea 
                  className="w-full border p-2 rounded-md h-28 focus:ring-2 focus:ring-blue-500 outline-none" 
                  value={formData.body}
                  onChange={(e) => setFormData({...formData, body: e.target.value})}
                  required
                />
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <Button type="button" variant="ghost" onClick={closeModal}>Cancel</Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}