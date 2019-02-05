import styled, { keyframes } from 'styled-components';

const animateIn = keyframes`
  0% {
    transform: translateX(-1rem);
    opacity: 0;
  }
`;

export default styled.h2`
  font-family: IBMPlexSans-Light;
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 100;
  color: #5C5C5C;
  letter-spacing: 0;
  white-space: pre;
  animation: ${animateIn} 1s .7s;
  animation-fill-mode: both;
`
