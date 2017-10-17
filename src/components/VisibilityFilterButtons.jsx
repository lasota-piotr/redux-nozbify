import React from 'react';
import FilterButton from '../containers/FilterButton';

const VisibilityFilterButtons = () => (
  <div>
    <FilterButton filter={'all'}>All</FilterButton>{' '}
    <FilterButton filter={'active'}>Active</FilterButton>{' '}
    <FilterButton filter={'completed'}>Completed</FilterButton>
  </div>
);

export default VisibilityFilterButtons;
