import React from 'react';
import FilterButton from '../containers/FilterButton';

const VisibilityFilterButtons = () => (
  <div>
    <FilterButton filter={'SHOW_ALL'} primary>
      All
    </FilterButton>
    <FilterButton filter={'SHOW_ACTIVE'}>
      Active
    </FilterButton>
    <FilterButton filter={'SHOW_COMPLETED'}>
      Completed
    </FilterButton>
  </div>

);

export default VisibilityFilterButtons;
