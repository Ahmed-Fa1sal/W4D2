// src/app/state/task.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Task } from '../models/task.model';
import * as TaskActions from './task.actions';

// Define the initial state
export interface TaskState {
  tasks: Task[];
  error: string | null;
}

export const initialState: TaskState = {
  tasks: [],
  error: null,
};

// Create the reducer function
export const taskReducer = createReducer(
  initialState,
  // Load tasks success
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    error: null,
  })),
  // Load tasks failure
  on(TaskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  // Add task success
  on(TaskActions.addTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
  // Add task failure
  on(TaskActions.addTaskFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  // Update task success
  on(TaskActions.updateTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => (t.id === task.id ? task : t)),
  })),
  // Update task failure
  on(TaskActions.updateTaskFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  // Delete task success
  on(TaskActions.deleteTaskSuccess, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== taskId),
  })),
  // Delete task failure
  on(TaskActions.deleteTaskFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
