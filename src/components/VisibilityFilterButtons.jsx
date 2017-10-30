import React from 'react';
import { connect } from 'react-redux';
import FilterButton from '../containers/FilterButton';
import Button from './Button';

const VisibilityFilterButtons = ({ filters }) => (
  <div>
    <div className="o-flex o-flex--column">
      {filters.map(filter => (
        <FilterButton key={filter} filter={filter}>{filter}</FilterButton>
      ))}
    </div>
    <div>
      <Button ghost muted small className="u-margin-top">Show completed</Button>
    </div>
  </div>
);

const mapStateToProps = ({ todos }) => ({
  filters: Object.keys(todos.listByFilter),
});

export default connect(mapStateToProps)(VisibilityFilterButtons);
