import React from 'react';
import PropTypes from 'prop-types';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/lib/md/index';
import styled from 'styled-components';
import styleVariables from '../constants/styleVariables';

const StyledCheck = styled.span`
  color: ${styleVariables.colorPrimary};
  cursor: pointer;
`;
const Check = ({ onClickHandle, isActive }) => {
  const iconSize = 40;
  return (
    <StyledCheck
      onClick={onClickHandle}
    >
      {isActive ? <MdCheckBox size={iconSize} /> : <MdCheckBoxOutlineBlank size={iconSize} />}
    </StyledCheck>
  );
};

Check.propTypes = {
  onClickHandle: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

Check.defaultProps = {
  isActive: false,
};

export default Check;
