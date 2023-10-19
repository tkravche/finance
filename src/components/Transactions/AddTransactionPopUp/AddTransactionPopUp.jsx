import React from 'react';
import TransactionForm from '../TransactionForm/TransactionForm';

const AddTransactionPopUp = ({ onClose, text }) => {
  return (
    <>
      <button type="button" onClick={onClose}>
        X
      </button>
      <h2>{text}</h2>
      <TransactionForm />
    </>
  );
};

export default AddTransactionPopUp;
