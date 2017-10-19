import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  max-width: 40em;
  margin-left: auto;
  margin-right: auto;
`;

const Layout = props => (
  <StyledComponent {...props} />
);

export default Layout;
