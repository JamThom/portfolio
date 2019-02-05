import { MOBILE_WIDTH } from 'Constants';
import styled from 'styled-components';

export default styled.div`
  text-align: center;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%,-80%);
  transition: .3s;
  opacity: 0;
  width: 10rem;
  pointer-events: none;
  z-index: 2;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`
