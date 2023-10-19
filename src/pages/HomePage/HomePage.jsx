import React, { useEffect, useState } from 'react';
import AddTransactionBtn from '../../components/Transactions/AddTransactiomBtn/AddTransactionBtn';
import Modal from '../../components/Modal/Modal';
import AddTransactionPopUp from '../../components/Transactions/AddTransactionPopUp/AddTransactionPopUp';
import { StyledSection } from './HomePage.styled';
import { useDispatch } from 'react-redux';

import {
  getTransactionCategoriesThunk,
  getTransactionsThunk,
} from '../../redux/transactions/transOperations';
import TransactionsList from '../../components/Transactions/TransactionsList/TransactionList';

const HomePage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getTransactionCategoriesThunk());
    dispatch(getTransactionsThunk());
  }, [dispatch]);

  return (
    <StyledSection>
      <TransactionsList />
      <AddTransactionBtn onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddTransactionPopUp text={'Add Transaction'} onClose={closeModal} />
      </Modal>
    </StyledSection>
  );
};

export default HomePage;
