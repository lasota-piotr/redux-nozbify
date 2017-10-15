import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import Button from '../components/Btn';

const mapStateTopProps = (state, ownProps) => ({
  primary: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter({ filter: ownProps.filter }));
  },
});

const FilterButton = connect(mapStateTopProps, mapDispatchToProps)(Button);

export default FilterButton;
