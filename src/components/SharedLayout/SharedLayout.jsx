import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { StyledOutlet, StyledWrapper } from './SharedLayot.styled';
import { Container } from '../Container/Container';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <StyledWrapper>
          <Sidebar />
          <StyledOutlet>
            <Outlet />
          </StyledOutlet>
        </StyledWrapper>
      </Container>
    </>
  );
};

export default SharedLayout;
