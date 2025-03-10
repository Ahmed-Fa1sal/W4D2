// src/app/state/task.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

// Select the feature state
export const selectTaskState = createFeatureSelector<TaskState>('tasks');

// Select all tasks
export const selectAllTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

// Select task by ID
export const selectTaskById = (taskId: string) =>
  createSelector(selectTaskState, (state: TaskState) =>
    state.tasks.find(task => task.id === taskId)
  );

// Select error message
export const selectTaskError = createSelector(
  selectTaskState,
  (state: TaskState) => state.error
);
