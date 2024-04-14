/*
package com.taskmanager.controller;

import com.taskmanager.entity.Task;
import com.taskmanager.repository.TaskRepository;
import com.taskmanager.service.TaskService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.mockito.Mockito.*;

class TaskControllerTest {
    @Mock
    TaskRepository taskRepository;
    @InjectMocks
    TaskController taskController;

   @Mock
    TaskService service;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }



    @Test
    void testCreateTask() {
        Task result = taskController.createTask(new Task());
        Assertions.assertEquals(new Task(), result);
    }

    @Test
    void testGetTaskById() {
        // Create a mock task with ID 1
        Task mockTask = new Task();
        mockTask.setId(5L);
        mockTask.setTitle("2");
        mockTask.setDescription("Mock Task");
        mockTask.setStatus("todo");

        // Mock the taskService to return the mock task when getTaskById is called with ID 1
        when(service.getTaskById(5L)).thenReturn(mockTask);

        // Call the getTaskById method with ID 1
        Task result = taskController.getTaskById(5L);

        // Verify that the result matches the mock task
        Assertions.assertEquals(mockTask, result);
    }
    @Test
    void testUpdateTask() {
        Task result = taskController.updateTask(Long.valueOf(1), new Task());
        Assertions.assertEquals(new Task(), result);
    }

    @Test
    void testDeleteTask() {
        taskController.deleteTask(Long.valueOf(1));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme*/
