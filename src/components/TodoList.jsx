import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function TodoList() {
    let [todos, setTodos] = useState([]);
    let [todo, setTodo] = useState("");
    let [isEditing, setisEditing] = useState(false);
    let [editIndex, setEditIndex] = useState(null);

    function handleAdd() {
        if (!todo.trim()) {
            return;
        }
        setTodos([...todos, todo])
        setTodo("");
    }

    function handleDelete(index) {
        let updatedTodos = todos.filter((todo, i) => i != index)
        setTodos(updatedTodos);
    }

    function handleEdit(index) {
        setisEditing(true);
        setTodo(todos[index]);
        setEditIndex(index);
    }
    function handleUpdate() {
        let updatedTodos = [...todos];
        updatedTodos[editIndex] = todo;
        setTodos(updatedTodos);
        setisEditing(false);
        setTodo("");
        setEditIndex(null);
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-6 border min-h-150 bg-blue-200 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Todo List</h2>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={todo}
                    required
                    onChange={(e) => setTodo(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter a todo..."
                />
                <button
                    onClick={isEditing ? handleUpdate : handleAdd}
                    className={`px-4 py-2 rounded text-white font-semibold transition-colors duration-200 ${isEditing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {isEditing ? "Update" : "Add"}
                </button>
            </div>
            <ol className="list-decimal  space-y-2">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="flex items-center  justify-between bg-pink-400 px-3 py-2 rounded hover:bg-pink-600"
                    >
                        <span className="flex-1">{todo}</span>
                        <div className="flex gap-2 ml-2">
                            <button
                                onClick={() => handleEdit(index)}
                                className="text-yellow-500 hover:text-red-700 text-lg"
                                title="Edit"
                            >
                                <FaRegEdit size={26}/>
                            </button>
                            <button
                                onClick={() => handleDelete(index)}
                                className="text-yellow-500 hover:text-red-700 text-lg"
                                title="Delete"
                            >
                                <MdDelete size={26}/>
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
