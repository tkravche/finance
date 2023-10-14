import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import PublicRoute from './routes/PublicRoute.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage.jsx';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import CurrencyPage from './pages/CurrencyPage/CurrencyPage';
import { useEffect } from 'react';
import { currentUserThunk } from './redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin, selectToken } from './redux/selectors';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!isLogin && token) {
      dispatch(currentUserThunk());
    }
  }, [dispatch, isLogin, token]);

  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <SharedLayout />
          </PrivateRoute>
        }
      >
        <Route
          index
          element={
            <PrivateRoute>
              <Navigate to="/home" />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/statistic"
          element={
            <PrivateRoute>
              <StatisticsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/currency"
          element={
            <PrivateRoute>
              <CurrencyPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
