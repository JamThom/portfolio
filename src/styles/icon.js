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
  position: absolute;
  width: 100%;
  height: 100%;
  font-style: normal;
  transition: .3s;
  animation: ${animateIn} 1s;
  animation-delay: ${(props) => .6 + (props.index / 10)}s;
  animation-fill-mode: both;
  @media (max-width: ${MOBILE_WIDTH}px) {
    font-size: 1.75rem;
  }
`
