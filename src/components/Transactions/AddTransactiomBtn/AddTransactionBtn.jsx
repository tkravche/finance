import React from 'react';
import { BtnStyled } from './AddTransactionBtn.styled';

const AddTransactionBtn = ({ onClick }) => {
  return (
    <BtnStyled type="button" onClick={onClick}>
      +
    </BtnStyled>
  );
};

export default AddTransactionBtn;
