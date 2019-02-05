import styled, { keyframes } from 'styled-components';

const animateIn = keyframes`
  0% {
    transform: scale(0);
  }
`;

const spin = keyframes`
  0% {
    stroke-dashoffset: 18px;
  }
`;

export default styled.circle`
  stroke: none;
  stroke-width: 1;
  stroke: #000000;
  fill: none;
  fill-rule: evenodd;
  stroke-dasharray: 5,4;
  stroke-linecap: round;
  stroke-opacity: 0.3;
  transform-origin: center center;
  animation: ${animateIn} .5s ${(props) => (props.index / 20)}s cubic-bezier(0.25, 0.1, 0.11, 1.26), ${spin} 1s linear infinite;
  animation-fill-mode: both;
`
