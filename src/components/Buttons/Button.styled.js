import styled from 'styled-components';

export const StyledButton = styled.button`
width: 100%;
max-width: 280px;
height: 50px;
margin-bottom:${props => (props.marginBtm? props.marginBtm : '0px')}; 
border-radius: 20px;
background-image:  ${props => (props.buttonBg? 'linear-gradient(97deg, #FFC727 -16.42%, #9E40BA 97.04%, #7000FF 150.71%)' : 'linear-gradient(#FCFCFC 50%, #FCFCFC 50% )')}; 
transition: transform 300ms ease-in;
border: transparent;
font-size: 18px;
color:${props => (props.buttonTxt? 'white' : 'black')}; 
text-transform: uppercase;
  &:focus,
  &:hover {
    border-radius: 18px;
    border: 2px solid yellow;
    transform: scale(1.01);
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
  }
`;
