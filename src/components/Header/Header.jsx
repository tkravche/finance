import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { logoutThunk } from '../../redux/auth/authOperations';
import { selectUserName } from '../../redux/selectors';
import { Logo } from '../Logo/Logo';
import Modal from '../Modal/Modal';
import Button from '../Buttons/Button';
import { Container } from '../Container/Container';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const currentUserName = useSelector(selectUserName);
  const handleLogout = () => {
    dispatch(logoutThunk());
    toast.success(
      `You have successfully logged out. We hope to see you back soon!`
    );
  };
  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header>
      <div class="bg-[#2e225f]">
        <Container>
          <div class=" flex justify-between">
            <Link to="/">
              <Logo />
            </Link>
            <div class="">
              <span>{currentUserName}</span>
              <button onClick={openModal}>Exit</button>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <p>Are you sure you want to log out?</p>
                <Button type="button" bgColor={true} onClick={handleLogout}>
                  Log out
                </Button>
              </Modal>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
