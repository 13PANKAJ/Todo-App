import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    setFilteredTasks(initialTasks);
  }, []);

  
  // Function to add a new task
  const addTask = (newTask) => {
    console.log("add task ",newTask)
    setTasks(prevTasks => [...prevTasks, newTask]);
    console.log("after set",tasks)
    filterTasks(selectedStatus);
  };
 
  useEffect(() => {
    console.log("State after update:", tasks);
     
    }, [tasks]);
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
      console.log("inside filterd task",tasks)
    } else {
      const filtered = tasks.filter((task) => task.status === status);
      setFilteredTasks(filtered);
      console.log("inside filterd task",filtered)
    }
  };
  const handleSelectStatus = (selectedStatus) => {
    console.log('Selected status:', selectedStatus);
    filterTasks(selectedStatus);
    // Add logic to handle status selection
  };
 
 

  return (
    <div className="d-flex flex-column min-vh-100">
     <header className="bg-info text-white py-3">
        <div className="container">
          <h1 className="col-md-10 mt-2 pt-1">Task Manager</h1>
        </div>
      </header>
      <div className="container-fluid flex-grow-1">
        < div className="row">
          {/* Sidebar */}
          <aside className="col-md-3 bg-info text-white py-3" style={{ width: '2px' }}>
            {/* Sidebar content goes here */}
          </aside>
          <main className="col-md-9 py-3">
      <TaskForm addTask={addTask} />
      
      <FilterDropdown statuses={['All', 'To Do', 'In Progress', 'Done']} onSelectStatus={handleSelectStatus} />
  
      <TaskList
        tasks={filteredTasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
      </main>
        </div>
      </div>
      <footer className="bg-info text-white py-3 mt-auto">
        <div className="container">
          <p className="m-0 text-center">© 2024 Task Manager</p>
        </div>
      </footer>
    </div>
  );
 
}

export default App;
