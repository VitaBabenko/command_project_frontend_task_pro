import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';

import GlobalStyle from 'GlobalStyle';
import { MODAL_EDIT_PROFILE } from './Modal/ModalMapContainer/enums';
import { Modal } from './Modal';
import { getModalMapData } from './Modal/ModalMapContainer';


const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const ScreensPage = lazy(() => import('../pages/ScreensPage'));

export const App = () => {
  const [open, setIsOpen] = useState('');

  const toggle = () => {
    setIsOpen((prev) => prev ? '' : MODAL_EDIT_PROFILE);
  };

  return (
    <>

      <button onClick={toggle}>open</button>
      <Modal {...{ open, toggle }}>
        {getModalMapData(open)}
      </Modal>


      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/auth/:id" element={<AuthPage />}>
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  components={<RegisterForm />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  components={<LoginForm />}
                />
              }
            />
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
        </Routes>
      </Suspense>
    </>
  );
};
