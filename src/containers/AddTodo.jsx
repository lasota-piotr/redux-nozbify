import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
  }

  onChangeHandle(event) {
    this.setState({
      currentValue: event.target.value,
    });
  }

  onSubmitHandle(event) {
    event.preventDefault();
    if (this.state.currentValue === '') {
      return;
    }
    this.props.dispatch(
      addTodo(this.state.currentValue),
    );
    this.setState({
      currentValue: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandle}>
          <input
            type="text"
            onChange={this.onChangeHandle}
            value={this.state.currentValue}
          />
          <input
            type="submit"
            value="Add todo"
          />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
