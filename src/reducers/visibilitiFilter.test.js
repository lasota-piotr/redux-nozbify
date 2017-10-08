import visibilityFilter from './visibilityFilter';

describe('visibilityFilter', () => {
  it('should set filter', () => {
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED',
    };
    const stateBefore = 'SHOW_ALL';
    const stateAfter = 'SHOW_COMPLETED';

    expect(
      visibilityFilter(stateBefore, action),
    ).toEqual(stateAfter);
  });
});

