import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import PublicRoute from './routes/PublicRoute.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import HomePage from './pages/HomePage.jsx';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage.jsx';
import Currency from './pages/Currency/Currency';

function App() {
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

      <Route element={<Dashboard />}>
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
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
