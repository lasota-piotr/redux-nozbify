import { getVisibleTodos } from './VisibleTodoList';

test('getVisibleTodos', () => {
  it('should return completed todos', () => {
    const filter = 'SHOW_COMPLETED';
    const todosBefore = {
      0: {
        text: 'some task 0',
        completed: false,
      },
      1: {
        text: 'some task 1',
        completed: true,
      },
      2: {
        text: 'some task 2',
        completed: false,
      },
    };
    const todosAfter = {
      1: {
        text: 'some task 1',
        completed: true,
      },
    };
    expect(
      getVisibleTodos(todosBefore, filter),
    ).toEqual(todosAfter);
  });
});

test('getVisibleTodos', () => {
  it('should return active todos', () => {
    const filter = 'SHOW_ACTIVE';
    const todosBefore = {
      0: {
        text: 'some task 0',
        completed: false,
      },
      1: {
        text: 'some task 1',
        completed: true,
      },
      2: {
        text: 'some task 2',
        completed: false,
      },
    };
    const todosAfter = {
      0: {
        text: 'some task 0',
        completed: false,
      },
      2: {
        text: 'some task 2',
        completed: false,
      },
    };
    expect(
      getVisibleTodos(todosBefore, filter),
    ).toEqual(todosAfter);
  });
});
