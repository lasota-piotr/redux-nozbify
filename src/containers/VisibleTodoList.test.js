import { getVisibleTodos } from './VisibleTodoList';

describe('getVisibleTodos', () => {
  it('should return completed todos', () => {
    const filter = 'completed';
    const todosBefore = [
      {
        id: 0,
        text: 'some task 0',
        completed: false,
      },
      {
        id: 1,
        text: 'some task 1',
        completed: true,
      },
      {
        id: 2,
        text: 'some task 2',
        completed: false,
      },
    ];
    const todosAfter = [
      {
        id: 1,
        text: 'some task 1',
        completed: true,
      },
    ];
    expect(
      getVisibleTodos(todosBefore, filter),
    ).toEqual(todosAfter);
  });
});

describe('getVisibleTodos', () => {
  it('should return active todos', () => {
    const filter = 'active';
    const todosBefore = [
      {
        id: 0,
        text: 'some task 0',
        completed: false,
      },
      {
        id: 1,
        text: 'some task 1',
        completed: true,
      },
      {
        id: 2,
        text: 'some task 2',
        completed: false,
      },
    ];
    const todosAfter = [
      {
        id: 0,
        text: 'some task 0',
        completed: false,
      },
      {
        id: 2,
        text: 'some task 2',
        completed: false,
      },
    ];
    expect(
      getVisibleTodos(todosBefore, filter),
    ).toEqual(todosAfter);
  });
});
