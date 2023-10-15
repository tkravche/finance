import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { StyledOutlet, StyledWrapper } from './SharedLayot.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <StyledWrapper>
        <Sidebar />
        <StyledOutlet>
          <Outlet />
        </StyledOutlet>
      </StyledWrapper>
    </>
  );
};

export default SharedLayout;
