import { schema } from 'normalizr';

export const todo = new schema.Entity('todos');
export const arrayOfTodos = new schema.Array(todo);

export const project = new schema.Entity('projects');
export const arrayOfProjects = new schema.Array(project);
