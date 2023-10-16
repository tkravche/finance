import styled from 'styled-components';

export const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;
export const SwitchText = styled.p`
  text-align: right;
  color: #ff868d;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  align-items: center;
  transition: color 0.5s;

  &:first-of-type {
    color: ${props => (props.checked ? ' #ffb627' : '#fff')};
  }

  &:last-of-type {
    color: ${props =>
      props.checked ? '#fff' : '#ff868d'};
  }
`;

export const SwitchSlider = styled.label`
  width: 80px;
  height: 40px;
  border: none;
  outline: none; 
  border-radius: 30px;
  background-color: #fff;
  position: relative;
  cursor: pointer;

  & svg {
    content: '';
    width: 44px;
    height: 44px;
    position: absolute;
    top: 50%;
    left: ${props => (props.checked ? '20%' : '80%')};
    transform: translate(-50%, -50%);
    border-radius: 100%;
    transition: all 0.5s;
    background-color: ${props =>
      props.checked ? ' #ffb627' : '#ff868d'};
    box-shadow: 0 2px 20px
      ${props => (props.checked ? ' #ffb627' : '#ff868d')};

    &:first-of-type {
      /* fill: '#fff'; */
      opacity: ${props => (props.checked ? '1' : '0')};
    }

    &:last-of-type {
      opacity: ${props => (props.checked ? '0' : '1')};
      /* fill: '#fff'; */
    } 
  }
`;

export const SwitchCheckBox = styled.input`
  visibility: hidden;
  /* opacity: 0;
  width: 0;
  height: 0; */
`;