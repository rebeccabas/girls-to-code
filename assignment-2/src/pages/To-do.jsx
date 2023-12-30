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
    <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 rounded-md">
      <h1 className="text-3xl font-bold text-black mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow border p-2 mr-2 rounded-xl"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-purple-400 text-white font-bold p-5 rounded-xl text-xl" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between bg-gray-100 p-4 mb-2 rounded-xl ${
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

