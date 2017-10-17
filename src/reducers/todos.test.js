import todos, { getVisibleTodos } from './todos';

describe('todos', () => {
  it('should add todo', () => {
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'some task',
    };
    const stateBefore = [];
    const stateAfter = [
      {
        id: 0,
        text: 'some task',
        completed: false,
      },
    ];

    expect(
      todos(stateBefore, action),
    ).toEqual(stateAfter);
  });
});

describe('todos', () => {
  it('should toggle todo', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 1,
    };
    const stateBefore = [
      {
        id: 0,
        text: 'some task',
        completed: false,
      },
      {
        id: 1,
        text: 'some task',
        completed: false,
      },
      {
        id: 2,
        text: 'some task',
        completed: false,
      },
    ];
    const stateAfter = [
      {
        id: 0,
        text: 'some task',
        completed: false,
      },
      {
        id: 1,
        text: 'some task',
        completed: true,
      },
      {
        id: 2,
        text: 'some task',
        completed: false,
      },
    ];

    expect(
      todos(stateBefore, action),
    ).toEqual(stateAfter);
  });
});

describe('todos', () => {
  it('should delete todo', () => {
    const action = {
      type: 'DELETE_TODO',
      id: 1,
    };
    const stateBefore = [
      {
        id: 0,
        text: 'some task',
        completed: false,
      },
      {
        id: 1,
        text: 'some task',
        completed: false,
      },
      {
        id: 2,
        text: 'some task',
        completed: false,
      },
    ];
    const stateAfter = [
      {
        id: 0,
        text: 'some task',
        completed: false,
      },
      {
        id: 2,
        text: 'some task',
        completed: false,
      },
    ];

    expect(
      todos(stateBefore, action),
    ).toEqual(stateAfter);
  });
});


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
