import React from 'react';
import PropTypes from 'prop-types';
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

VisibilityFilterButtons.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

const mapStateToProps = ({ todos }) => ({
  filters: Object.keys(todos.listByFilter),
});

export default connect(mapStateToProps)(VisibilityFilterButtons);
