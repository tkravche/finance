import React, { useState } from 'react';
import AddTransactionBtn from '../../components/Transactions/AddTransactiomBtn/AddTransactionBtn';
import Modal from '../../components/Modal/Modal';
import AddTransactionPopUp from '../../components/Transactions/AddTransactionPopUp/AddTransactionPopUp';
import { StyledSection } from './HomePage.styled';
import TransactionTableHead from '../../components/Transactions/TransactionTableHead/TransactionTableHead';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <StyledSection>
      <TransactionTableHead />
      <AddTransactionBtn onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddTransactionPopUp onClose={closeModal} />
      </Modal>
    </StyledSection>
  );
};

export default HomePage;
