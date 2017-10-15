import todos from './todos';

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