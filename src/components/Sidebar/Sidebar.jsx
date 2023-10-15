import React from 'react';

import SidebarNavigation from './SidebarNavigation/SidebarNavigation';
import SidebarBalance from './SidebarBalance/SidebarBalance';
import Currency from '../Currency/Currency';
import { StyledNavAndBalanceWrapper, StyledSideBar } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <StyledSideBar>
      <StyledNavAndBalanceWrapper>
        <SidebarNavigation />
        <SidebarBalance />
      </StyledNavAndBalanceWrapper>
      <Currency />
    </StyledSideBar>
  );
};

export default Sidebar;
