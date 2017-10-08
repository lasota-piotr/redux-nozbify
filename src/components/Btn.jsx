import React from 'react';

const Btn = ({active, children, onClick}) => (
  <button
    onClick={onClick}
  >
    {children}
  </button>
);

export default Btn;
