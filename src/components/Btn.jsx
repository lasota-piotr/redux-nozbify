import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import styleVariables from '../constants/styleVariables';

const StyledButton= styled.button`
  /**
   * 1. Allow us to style box model properties.
   * 2. Line different sized buttons up a little nicer.
   * 3. Make buttons inherit font styles (often necessary when styling \`input\`s as
   *    buttons).
   * 4. Reset/normalize some styles.
   * 5. Force all button-styled elements to appear clickable.
   */
  display: inline-block; /* [1] */
  vertical-align: middle; /* [2] */
  font: inherit; /* [3] */
  text-align: center; /* [4] */
  margin: 0; /* [4] */
  cursor: pointer; /* [5] */
  padding: ${styleVariables.unitSmall} ${styleVariables.unit};
  transition: ${styleVariables.globalTransition};
  border-radius: ${styleVariables.globalTransition};
  
  ${props => props.primary && css`
  background: palevioletred;
  color: white;
  `}
`;

const Btn = props => (
  <StyledButton {...props} />
);

Btn.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

Btn.defaultProps = {
  active: false,
  children: '',
};


export default Btn;
