import React from 'react';
import { MdStarOutline, MdStar } from 'react-icons/lib/md/index';
import styled from 'styled-components';
import styleVariables from '../constants/styleVariables';

const StyledStar = styled.span`
  color: ${styleVariables.colorPrimary};
  cursor: pointer;
`;
const Star = ({ onClickHandle, isActive }) => {
  const starSize = 40;
  return (
    <StyledStar
      onClick={onClickHandle}
    >
      {isActive ? <MdStar size={starSize} /> : <MdStarOutline size={starSize} />}
    </StyledStar>
  );
};

export default Star;
