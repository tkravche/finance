import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectToken } from '../redux/selectors';

const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);
  console.log(token);
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
