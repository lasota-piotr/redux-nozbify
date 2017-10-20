import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterButton = ({ filter, children }) => (
  <NavLink
    to={`/${filter === 'all' ? '' : filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}
    exact
  >
    {children}
  </NavLink>
);
export default FilterButton;
