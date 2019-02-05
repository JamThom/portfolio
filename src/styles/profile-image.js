import styled, { keyframes } from 'styled-components';

const animateIn = keyframes`
  0% {
    transform: scale(0);
  }
`;

export default styled.div`
  width: 10rem;
  height: 10rem;
  background: url(${(props) => props.src});
  background-size: contain;
  border-radius: 50%;
  animation: ${animateIn} .5s cubic-bezier(0.25, 0.1, 0.47, 1.41);
  animation-fill-mode: both;
`
