import React, { useState } from 'react';
import { addTask } from '../../service/TodoService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser  } from "@fortawesome/free-solid-svg-icons";

export const TodoForm = ({ addTodo, handleGetUserTodos }) => {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value) {
      await addTask({
        title:value
      });
      setValue('');
    }
    handleGetUserTodos()
  };

  return (
    





    
    <form onSubmit={handleSubmit} className="flex mb-6">
      <div className="flex-1">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="What is the task today?"
        />
      </div>
      <div className="ml-4">
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
          Add Task
        </button>
      </div>
    </form>
  
  );
};
