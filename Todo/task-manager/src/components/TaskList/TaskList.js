import React from 'react';
import TaskItem from '../Task-Item/TaskItem'; // Assuming you have a TaskItem component to render individual tasks

const TaskList = ({ tasks, updateTaskStatus, deleteTask }) => {
  const handleStatusChange = (taskId, newStatus) => {
    updateTaskStatus(taskId, newStatus);
  };
  return (
    <div className="task-list-container">
      {tasks.map((task) => (
       <div key={task.id} className="task-item">
       <div>
         <strong>Title:</strong> {task.title}
       </div>
       <div>
         <strong>Description:</strong> {task.description}
       </div>
       <div>
         <strong>Status:</strong> {task.status}
       </div>
       <div>
         <button onClick={() => handleStatusChange(task.id, 'To Do')}>To Do</button>
         <button onClick={() => handleStatusChange(task.id, 'In Progress')}>In Progress</button>
         <button onClick={() => handleStatusChange(task.id, 'Done')}>Done</button>
         <button onClick={() => deleteTask(task.id)}>Delete</button>
       </div>
     </div>
      ))}
    </div>
  );
};

export default TaskList;
