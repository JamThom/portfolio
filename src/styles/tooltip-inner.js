import { MOBILE_WIDTH } from 'Constants';
import styled from 'styled-components';

export default styled.i`
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.10);
  border-radius: 4px;
  color: #5C5C5C;
  line-height: 19px;
  padding: 0.7rem;
  position: relative;
  font-family: IBMPlexSans-Text;
  font-size: 0.8rem;
  font-style: normal;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    width: 1rem;
    height: 1rem;
    background: white;
    left: 50%;
    transform: translate(-50%,-50%) rotate(45deg);
  }
`
