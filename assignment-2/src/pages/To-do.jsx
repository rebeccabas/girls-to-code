import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow border p-2 mr-2"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between bg-gray-100 p-2 mb-2 ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            <div className="flex items-center flex-grow">
              <input
                type="checkbox"
                className="mr-2"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span>{task.text}</span>
            </div>
            <button className="text-red-500 ml-2" onClick={() => removeTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
