import React from 'react';
import styled, { keyframes } from 'styled-components';

const loaderAni = keyframes`
@keyframes spin {
  0 % {
    transform: rotate(0deg);
  }
  100 % {
    transform: rotate(360deg);
  }
}
`;

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  border: 8px solid ${props => props.theme.lightgrey};
  border-top: 8px solid ${props => props.theme.highlight};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${loaderAni} 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
`;

export default () => <StyledLoader />;
