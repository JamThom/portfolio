import { MOBILE_WIDTH } from 'Constants';
import styled from 'styled-components';

export default styled.div`
  width: 3rem;
  height: 3rem;
  margin-top: -1.5rem;
  margin-left: -1.5rem;
  top: 50%;
  left: 50%;
  position: absolute;
  &:hover i {
    transform: scale(1.1);
  }
  &:hover {
    z-index: 1;
  }
  &:hover div {
    opacity: 1;
    transform: translate(-50%,-20%);
  }
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 4rem;
    height: 4rem;
    margin-top: -2rem;
    margin-left: -2rem;
  }
`
