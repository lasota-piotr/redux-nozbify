import React from 'react';
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

export default Check;
