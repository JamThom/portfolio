import styled from 'styled-components';

export default styled.div`
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.10);
  border-radius: 4px;
  font-family: IBMPlexSans-Text;
  font-size: 12px;
  color: #5C5C5C;
  letter-spacing: 0;
  text-align: center;
  line-height: 19px;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%,-10%);
  transition: .3s;
  opacity: 0;
  width: 7rem;
  padding: 0.7rem;
  z-index: 2;
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
