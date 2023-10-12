import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLogin } from '../redux/selectors';

const PublicRoute = ({ children }) => {
  const isLogedIn = useSelector(selectIsLogin);
  return !isLogedIn ? children : <Navigate to="/home" />;
};

export default PublicRoute;
