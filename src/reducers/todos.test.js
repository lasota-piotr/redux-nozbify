import todos from './todos';

describe('todos', () => {
  it('should add todo', () => {
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'some task',
    };
    const stateBefore = {};
    const stateAfter = {
      0: {
        text: 'some task',
        completed: false,
      },
    };

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
    const stateBefore = {
      0: {
        text: 'some task0',
        completed: false,
      },
      1: {
        text: 'some task1',
        completed: false,
      },
      2: {
        text: 'some task2',
        completed: false,
      } };
    const stateAfter = {
      0: {
        text: 'some task0',
        completed: false,
      },
      1: {
        text: 'some task1',
        completed: true,
      },
      2: {
        text: 'some task2',
        completed: false,
      },
    };

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
    const stateBefore = {
      0: {
        text: 'some task0',
        completed: false,
      },
      1: {
        text: 'some task1',
        completed: false,
      },
      2: {
        text: 'some task2',
        completed: false,
      } };
    const stateAfter = {
      0: {
        text: 'some task0',
        completed: false,
      },
      2: {
        text: 'some task2',
        completed: false,
      },
    };

    expect(
      todos(stateBefore, action),
    ).toEqual(stateAfter);
  });
});