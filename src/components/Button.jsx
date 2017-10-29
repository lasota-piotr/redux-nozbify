import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import styleVariables from '../constants/styleVariables';

const StyledButton = styled.button`
  background-color: ${styleVariables.colorGrayVeryLight};
  display: inline-block;
  vertical-align: middle;
  font: inherit;
  text-align: center;
  margin: 0;
  cursor: pointer;
  padding: ${styleVariables.unitSmall} ${styleVariables.unit};
  transition: ease;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  ${props => props.primary && css`
  background-color: ${styleVariables.colorPrimary};
  
    &,
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      color: #fff;
    }
  
    &:hover,
    &:focus {
      background-color: ${styleVariables.colorPrimaryDark};
    }
 `}
  
  ${props => props.secondary && css`

  background-color: ${styleVariables.colorSecondary};

    &,
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      color: #fff;
    }
  
    &:hover,
    &:focus {
      background-color: ${styleVariables.colorSecondaryDark};
    }
 `}
  
  ${props => props.tertiary && css`
    background-color: #fff;
    color: ${styleVariables.colorTertiary};
  
    &,
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      color: ${styleVariables.colorTertiaryDark};
    }
  
    &:hover,
    &:focus {
      background-color: ${styleVariables.colorTertiaryDark};
    }
 `}
  
  ${props => props.small && css`
    padding: ${styleVariables.unitTiny} ${styleVariables.unitSmall};
  `}
  
  ${props => props.large && css`
    padding: ${styleVariables.unit} ${styleVariables.unitLarge};
  `}
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => props.ghost && css`
    border: 2px solid currentColor;
    padding: calc(${styleVariables.unitSmall} - 2px) calc(${styleVariables.unit} - 2px);
    &,
    &:hover,
    &:active,
    &:focus {
      background: none;
    }
  `}
  
  ${props => props.ghost && props.small && css`
    padding: calc(${styleVariables.unitTiny} - 2px) calc(${styleVariables.unitSmall} - 2px);
  `}
  
  ${props => props.ghost && props.large && css`
    padding: calc(${styleVariables.unit} - 2px) calc(1.5rem - 2px);
  `}
  
  ${props => props.ghost && props.primary && css`
    color: ${styleVariables.colorPrimary};

    &:hover,
    &:focus {
      color: ${styleVariables.colorPrimaryDark};
    }
  `}
  
  ${props => props.ghost && props.secondary && css`
    color: ${styleVariables.colorSecondary};

    &:hover,
    &:focus {
      color: ${styleVariables.colorSecondaryDark};
    }
  `}
  
  ${props => props.ghost && props.tertiary && css`
    color: #fff;

    &:hover,
    &:focus {
      color: ${styleVariables.colorGrayVeryLight};
    }
  `}
  
  ${props => props.ghost && props.muted && css`
    color: ${styleVariables.colorGrayDark};
    border-color: ${styleVariables.colorGray};
    &:hover,
    &:focus {
      color: ${styleVariables.colorGrayVeryDarkDark};
    }
  `}
`;

const Button = props => (
  <StyledButton {...props} />
);

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  active: false,
  children: '',
};


export default Button;
