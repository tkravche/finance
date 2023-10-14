import React from 'react';
import { Logo } from '../Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { selectUserName } from '../../redux/selectors';

const Header = () => {
  const dispatch = useDispatch();
  const currentUserName = useSelector(selectUserName);
  const handleLogout = () => dispatch(logoutThunk());
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>

      <span>{currentUserName}</span>
      <div>|</div>
      <button onClick={handleLogout}>Exit</button>
    </header>
  );
};

export default Header;
