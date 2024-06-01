import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { TodoForm } from "./TodoForm";  // Adjust the import path based on your file structure

function Todo() {
  const [toDo, setToDo] = useState([]);
  const [updateData, setUpdateData] = useState(null);

  const addTask = (taskTitle) => {
    const newEntry = { id: Date.now(), title: taskTitle, status: false };
    setToDo([...toDo, newEntry]);
  };

  const deleteTask = (id) => {
    setToDo(toDo.filter(task => task.id !== id));
  };

  const markDone = (id) => {
    setToDo(toDo.map(task => task.id === id ? { ...task, status: !task.status } : task));
  };

  const changeTask = (e) => {
    setUpdateData({ ...updateData, title: e.target.value });
  };

  const updateTask = () => {
    setToDo(toDo.map(task => task.id === updateData.id ? updateData : task));
    setUpdateData(null);
  };

  const cancelUpdate = () => {
    setUpdateData(null);
  };

  return (
    <div className="container mx-auto my-10 p-4 bg-white rounded shadow-lg max-w-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">To-Do List App</h2>

      {updateData ? (
        <div className="mb-6">
          <div className="flex mb-4">
            <input
              value={updateData.title}
              onChange={changeTask}
              className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button onClick={updateTask} className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
              Update
            </button>
            <button onClick={cancelUpdate} className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <TodoForm addTodo={addTask} />
      )}

      {toDo.length === 0 ? (
        <p className="text-center text-gray-500">No Tasks...</p>
      ) : (
        toDo.sort((a, b) => a.id - b.id).map((task, index) => (
          <div className="p-4 mb-2 bg-gray-100 rounded flex justify-between items-center" key={task.id}>
            <div className={task.status ? "line-through" : ""}>
              <span className="font-bold mr-2">{index + 1}.</span>
              <span>{task.title}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span title="Completed / Not completed" onClick={() => markDone(task.id)} className="cursor-pointer text-green-500">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              {!task.status && (
                <span
                  title="Edit"
                  onClick={() => setUpdateData({ id: task.id, title: task.title, status: task.status })}
                  className="cursor-pointer text-blue-500"
                >
                  <FontAwesomeIcon icon={faPen} />
                </span>
              )}
              <span title="Delete" onClick={() => deleteTask(task.id)} className="cursor-pointer text-red-500">
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Todo;
