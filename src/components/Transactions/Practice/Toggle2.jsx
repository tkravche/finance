// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

// const Toggle2 = () => {
//   const [isOn, setIsOn] = useState(false);

//   const handleToggle = () => {
//     setIsOn(!isOn);
//   };
//   return (
//     <StyledSwitchWrapper>
//       <SwitchText checked={isOn}> Income</SwitchText>
//       <SwitchInput type="radio" checked={isOn} onChange={handleToggle} />
//       <SwitchSlider checked={isOn}>
//         <CiCirclePlus icon="icon__btn-plus" checked={isOn} />
//         <CiCircleMinus icon="icon__btn-minus" checked={isOn} />
//       </SwitchSlider>
//       <SwitchText checked={isOn}>Expense</SwitchText>
//     </StyledSwitchWrapper>
//   );
// };

// export default Toggle2;

// const SwitchInput = styled.input`
//   opacity: 0;
//   width: 0;
//   height: 0;
// `;
// export const SwitchText = styled.p`
//   text-align: right;
//   color: #ff868d;
//   font-size: 16px;
//   font-weight: 600;
//   margin: 0;
//   align-items: center;
//   transition: color 0.5s;

//   &:first-of-type {
//     color: ${props => (props.checked ? ' #ffb627' : '#fff')};
//   }

//   &:last-of-type {
//     color: ${props => (props.checked ? '#fff' : '#ff868d')};
//   }r
// `;
// export const StyledSwitchWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   justify-content: center;
// `;
// export const SwitchSlider = styled.label`
//   width: 80px;
//   height: 40px;
//   border: none;
//   outline: none;
//   border-radius: 30px;
//   background-color: #fff;
//   position: relative;
//   cursor: pointer;

//   & svg {
//     content: '';
//     width: 44px;
//     height: 44px;
//     position: absolute;
//     top: 50%;
//     left: ${props => (props.checked ? '20%' : '80%')};
//     transform: translate(-50%, -50%);
//     border-radius: 100%;
//     transition: all 0.5s;
//     background-color: ${props => (props.checked ? ' #ffb627' : '#ff868d')};
//     box-shadow: 0 2px 20px ${props => (props.checked ? ' #ffb627' : '#ff868d')};

//     &:first-of-type {
//       fill: '#fff';
//       opacity: ${props => (props.checked ? '1' : '0')};
//     }

//     &:last-of-type {
//       opacity: ${props => (props.checked ? '0' : '1')};
//       fill: 'var(--total-white)';
//     }
//   }
// `;

import React, { useState } from 'react';
import styled from 'styled-components';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
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

  /* &:checked + .slider {
    background-color: #2196f3;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  } */

  /* &:checked + .slider:before {
    transform: translateX(26px); */
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
    background-color: ${props => (props.checked ? ' #ffb627' : '#ff868d')};
    box-shadow: 0 2px 20px ${props => (props.checked ? ' #ffb627' : '#ff868d')};

    &:first-of-type {
      fill: '#fff';
      opacity: ${props => (props.checked ? '1' : '0')};
    }

    &:last-of-type {
      opacity: ${props => (props.checked ? '0' : '1')};
      fill: 'var(--total-white)';
    }
    /* &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    } */
  }
`;

function Switch() {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <SwitchContainer>
      <SwitchLabel>
        <SwitchInput type="checkbox" checked={isOn} onChange={handleToggle} />
        <Slider className="slider">
          <CiCirclePlus icon="icon__btn-plus" checked={isOn} />
          <CiCircleMinus icon="icon__btn-minus" checked={isOn} />
        </Slider>
      </SwitchLabel>
      <div>{isOn ? 'Switch is ON' : 'Switch is OFF'}</div>
    </SwitchContainer>
  );
}

export default Switch;
