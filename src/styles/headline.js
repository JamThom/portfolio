import styled, { keyframes } from 'styled-components';

const animateIn = keyframes`
  0% {
    transform: translateX(-1rem);
    opacity: 0;
  }
`;

export default styled.h1`
  font-family: IBMPlexSans-Bold;
  font-size: 2rem;
  color: #5C5C5C;
  letter-spacing: 0;
  margin: 0;
  animation: ${animateIn} 1s .5s;
  animation-fill-mode: both;
`
