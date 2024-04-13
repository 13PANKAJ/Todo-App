import React from 'react';
import './TaskItem.css'; ; // Import CSS file

const TaskItem = ({ task, updateTaskStatus, deleteTask }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      {/* Add buttons to update status and delete task */}
      <button onClick={() => updateTaskStatus(task.id, 'In Progress')}>Start</button>
      <button onClick={() => updateTaskStatus(task.id, 'Done')}>Complete</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;

