import React, { useState } from 'react';
import './TaskForm.css'; // Import CSS file

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const newTask = { title, description, status };
    console.log("checking button clicked enw task",newTask)
    addTask(newTask);
    setTitle('');
    setDescription('');
    setStatus('To Do');
  };

  return (
    <div className="task-form-container">
      <h2>Create New Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="task-form-label">Title:</div>
        <input
          className="task-form-textarea"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div className="task-form-label">Description:</div>
        <textarea
          className="task-form-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="task-form-label">Status:</div>
        <select
          className="task-form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button className="task-form-button" type="submit">Create Task</button> {/* Set type to "submit" */}
      </form>
    </div>
  );
};

export default TaskForm;

