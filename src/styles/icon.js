import styled, { keyframes } from 'styled-components';
import { MOBILE_WIDTH } from 'Constants';

const animateIn = keyframes`
  0% {
    transform: scale(0);
  }
`;

export default styled.i`
  background-image: radial-gradient(50% 0%, #5689FF 50%, #547DFF 100%);
  color: #FFFFFF;
  font-size: 1.25rem;
  font-family: fontello;
  font-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
  font-style: normal;
  animation: ${animateIn} 1s;
  animation-delay: ${(props) => .6 + (props.index / 10)}s;
  animation-fill-mode: both;
  transition: .1s;
  @media (max-width: ${MOBILE_WIDTH}px) {
    font-size: 1.75rem;
  }
`
