import React from 'react';
import TransactionForm from '../TransactionForm/TransactionForm';
import Button from '../../Buttons/Button';

const AddTransactionPopUp = ({ onClose }) => {
  return (
    <>
      <button type="button" onClick={onClose}>
        X
      </button>
      <h2>Add Transaction</h2>
      <TransactionForm />
      <Button bgColor={true} textCl={true} marginB={'40px'}>
        Add
      </Button>
    </>
  );
};

export default AddTransactionPopUp;
