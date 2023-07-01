import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';
// import Container from '../components/Container/Container';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
// import Container from './Container/Container';
import GlobalStyle from 'GlobalStyle';
import { ModalContainer } from './Modal';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks';

import { Loader } from '../components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/auth/operations';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const ScreensPage = lazy(() => import('../pages/ScreensPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <Loader />
    </div>
  ) : (
    <>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
      <ModalContainer />
      <GlobalStyle />

      {/* <Container> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
            }
          />

          <Route
            path="/welcome"
            element={
              <RestrictedRoute redirectTo="/home" component={<WelcomePage />} />
            }
          />
          <Route
            path="/auth/:id"
            element={
              <RestrictedRoute redirectTo="/home" component={<AuthPage />} />
            }
          >
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />} />
          </Route>

          <Route
            path="/home"
            element={
              <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
            }
          >
            <Route path=":boardName" element={<ScreensPage />} />
          </Route>
          <Route path="*" element={<WelcomePage />} />
        </Route>
      </Routes>
      {/* </Container> */}
    </>
  );
};
