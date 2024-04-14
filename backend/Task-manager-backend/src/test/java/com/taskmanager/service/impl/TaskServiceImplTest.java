package com.taskmanager.service.impl;

import com.taskmanager.entity.Task;
import com.taskmanager.exception.ResourceNotFoundException;
import com.taskmanager.repository.TaskRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

class TaskServiceImplTest {
    @Mock
    TaskRepository taskRepository;
    @InjectMocks
    TaskServiceImpl taskServiceImpl;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllTasks() {

        List<Task> tasks = Arrays.asList(new Task(), new Task(), new Task());
        when(taskRepository.findAll()).thenReturn(tasks);

        // Call the getAllTasks method
        List<Task> result = taskServiceImpl.getAllTasks();

        // Compare the actual list with the expected list
        Assertions.assertEquals(tasks, result);

    }

    @Test
    void testCreateTask() {
        Task newTask = new Task();
        Task result = taskServiceImpl.createTask(newTask);

        // Assert that the returned task is not null
        Assertions.assertNotNull(result);

        // Assert that the returned task has an ID assigned by the service
        Assertions.assertNotNull(result.getId());


    }

    @Test
    void testGetTaskById() {
        // Create a mock task object and its ID
        Long taskId = 1L;
        Task mockTask = new Task();
        mockTask.setId(taskId);

        // Mock the taskRepository to return the mock task when findById is called with the specified ID
        when(taskRepository.findById(taskId)).thenReturn(Optional.of(mockTask));

        // Call the getTaskById method with the task ID
        Task result = taskServiceImpl.getTaskById(taskId);

        // Verify that the result matches the mock task
        Assertions.assertEquals(mockTask, result);
    }

    @Test
    void testGetTaskByIdNotFound() {
        // Create a task ID that doesn't exist
        Long taskId = 100L;

        // Mock the taskRepository to return an empty Optional when findById is called with the specified ID
        when(taskRepository.findById(taskId)).thenReturn(Optional.empty());

        // Verify that calling getTaskById with the non-existing task ID throws ResourceNotFoundException
        Assertions.assertThrows(ResourceNotFoundException.class, () -> taskServiceImpl.getTaskById(taskId));
    }

    @Test
    void testUpdateTask() {
        // Mock repository behavior to return null when findById is called with ID 5
        when(taskRepository.findById(5L)).thenReturn(Optional.empty());

        // Verify that calling updateTask with ID 5 throws ResourceNotFoundException
        Assertions.assertThrows(ResourceNotFoundException.class, () -> taskServiceImpl.updateTask(5L, new Task()));
    }
    @Test
    void testUpdateTaskNotFound() {
        // Create a task ID that doesn't exist and an updated task object
        Long taskId = 100L;
        Task updatedTask = new Task();

        // Mock the taskRepository to return an empty Optional when findById is called with the specified ID
        when(taskRepository.findById(taskId)).thenReturn(Optional.empty());

        // Verify that calling updateTask with the non-existing task ID throws ResourceNotFoundException
        Assertions.assertThrows(ResourceNotFoundException.class, () -> taskServiceImpl.updateTask(taskId, updatedTask));
    }

    @Test
    void testDeleteTask() {
        taskServiceImpl.deleteTask(Long.valueOf(2));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme