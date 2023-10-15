import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { logoutThunk } from '../../redux/auth/authOperations';
import { selectUserName } from '../../redux/selectors';
import { Logo } from '../Logo/Logo';
import Modal from '../Modal/Modal';

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
      <div class="flex justify-between bg-[#2e225f]">
        <Link to="/">
          <Logo />
        </Link>
        <div class="">
          <span>{currentUserName}</span>
          <button onClick={openModal}>Exit</button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <button type="button" onClick={handleLogout}>
              Log out
            </button>
          </Modal>
        </div>
      </div>
    </header>
  );
};

export default Header;