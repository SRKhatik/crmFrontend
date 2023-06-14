import React, { useState } from "react";
import { BsPlusCircleFill, BsTrash, BsPencil } from "react-icons/bs";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState("");

  const handleAddTodo = () => {
    //trim:-to removeing  the extra space between srting 
    if (newTodo.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      const currentDate = new Date().toLocaleDateString();
      const todo = {
        text: newTodo,
        time: currentTime,
        date: currentDate,
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const handleUpdateTodo = () => {
    if (editValue.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex].text = editValue;
      setTodos(updatedTodos);
      setEditIndex(-1);
      setEditValue("");
    }
  };

  return (
    <div className="container bg-white">
      <h4 className="text-center text-dark my-4">Todo-List</h4>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          <BsPlusCircleFill />
        </button>
      </div>
      {todos.length > 0 ? (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li className="list-group-item d-flex align-items-center" key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    className="form-control me-2"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={handleUpdateTodo}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <p className="m-0">{todo.text}</p>
                    <small>{todo.time} - {todo.date}</small>
                  </div>
                  <div className="ms-auto">
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEditTodo(index)}
                    >
                      <BsPencil />
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteTodo(index)}
                    >
                      <BsTrash />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No todos yet.</p>
      )}
    </div>
  );
};

export default TodoList;
