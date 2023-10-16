import React from 'react';
// import TransactionForm from '../TransactionForm/TransactionForm';
import Button from '../../Buttons/Button';
import Switch from '../Switch/Switch';

const AddTransactionPopUp = ({ onClose }) => {
  return (
    <>
      <button type="button" onClick={onClose}>
        X
      </button>
      <h2>Add Transaction</h2>
      <Switch />
      {/* <TransactionForm /> */}
      <Button bgColor={true} textCl={true} marginB={'40px'}>
        Add
      </Button>
    </>
  );
};

export default AddTransactionPopUp;
