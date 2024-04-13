package com.taskmanager.service;

import com.taskmanager.entity.Task;
import java.util.List;

public interface TaskService {
    List<Task> getAllTasks();
    Task createTask(Task task);
    Task getTaskById(Long id);
    Task updateTask(Long id, Task updatedTask);
    void deleteTask(Long id);
}
