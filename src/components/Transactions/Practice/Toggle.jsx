import React, { useState } from 'react';
import styled from 'styled-components';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

const SwitchContainer = styled.div`
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
    color: ${props => (props.isOn ? ' #ffb627' : '#fff')};
  }

  &:last-of-type {
    color: ${props => (props.isOn ? '#fff' : '#ff868d')};
  }
`;
const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #2196f3;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

function Switch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <SwitchContainer>
      <SwitchText checked={isOn}>Income</SwitchText>
      <SwitchLabel>
        <SwitchInput type="checkbox" checked={isOn} onChange={handleToggle} />
        <Slider className="slider">
          <CiCirclePlus icon="icon__btn-plus" checked={isOn} />
          <CiCircleMinus icon="icon__btn-minus" checked={isOn} />
        </Slider>
      </SwitchLabel>
      <SwitchText>Expense</SwitchText>
    </SwitchContainer>
  );
}

export default Switch;
