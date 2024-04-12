import React, { useState, useEffect } from 'react';

import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import FilterDropdown from './components/FilterDropdown/FilterDropdown';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  // Dummy data for initial tasks
  useEffect(() => {
    // Define initial tasks inside the useEffect callback
    const initialTasks = [
      { id: 1, title: 'Task 1', description: 'Description 1', status: 'To Do' },
      { id: 2, title: 'Task 2', description: 'Description 2', status: 'In Progress' },
      { id: 3, title: 'Task 3', description: 'Description 3', status: 'Done' },
    ];
    setTasks(initialTasks);
    setFilteredTasks(initialTasks)
  }, []);
  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    filterTasks(selectedStatus);
  };

  // Function to update task status
  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    filterTasks(selectedStatus);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    filterTasks(selectedStatus);
  };
  const filterTasks = (status) => {
    if (status === 'All') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => task.status === status);
      setFilteredTasks(filtered);
    }
  };
  const handleSelectStatus = (selectedStatus) => {
    console.log('Selected status:', selectedStatus);
    filterTasks(selectedStatus);
    // Add logic to handle status selection
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <FilterDropdown statuses={['All', 'To Do', 'In Progress', 'Done']} onSelectStatus={handleSelectStatus} />
      <TaskList
        tasks={filteredTasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
    </div>
  );
  
}

export default App;
