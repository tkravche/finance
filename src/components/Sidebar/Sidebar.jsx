import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/statistic">Statistics</NavLink>
    </>
  );
};

export default Sidebar;
