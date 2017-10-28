import React from 'react';
import FilterButton from '../containers/FilterButton';
import Button from './Button';

const VisibilityFilterButtons = () => (
  <div>
    <FilterButton filter={'all'}>All</FilterButton>{' '}
    <FilterButton filter={'active'}>Active</FilterButton>{' '}
    <FilterButton filter={'completed'}>Completed</FilterButton>{' '}
    <FilterButton filter={'priority'}>Priority</FilterButton>
    <div>
      <Button ghost muted small className="u-margin-top">Show completed</Button>
    </div>
  </div>
);

export default VisibilityFilterButtons;
