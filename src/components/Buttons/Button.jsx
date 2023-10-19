import React from 'react';
import { StyledButton } from './Button.styled';
// import { StyledButton } from './Button.styled';

function Button({
  children,
  ariaLabel = 'button for click',
  bgColor,
  textCl,
  marginB,
  type = 'button',
  onClick,
}) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      buttonbg={bgColor}
      buttontxt={textCl}
      marginbtm={marginB}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
