import React from 'react';
import FilterButton from '../containers/FilterButton';

const VisibilityFilterButtons = () => (
  <div>
    <FilterButton filter={'all'}>All</FilterButton>{' '}
    <FilterButton filter={'active'}>Active</FilterButton>{' '}
    <FilterButton filter={'completed'}>Completed</FilterButton>{' '}
    <FilterButton filter={'priority'}>Priority</FilterButton>
  </div>
);

export default VisibilityFilterButtons;
