import { lazy } from 'react';
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

import { CardModal } from './CardModal/CardModal';
import { CardPopUp } from './CardPopUp/CardPopUp';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const ScreensPage = lazy(() => import('../pages/ScreensPage'));

export const App = () => {
  return (
    <>
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

          <Route path="/welcome" element={<WelcomePage />} />
          <Route
            path="/auth/:id"
            element={
              <RestrictedRoute redirectTo="/home" component={<AuthPage />} />
            }
          >
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />} />
          </Route>

          <Route path="/home" element={<HomePage />}>
            <Route path=":boardName" element={<ScreensPage />} />
          </Route>
          <Route path="*" element={<WelcomePage />} />
          <Route
            path="/s"
            element={
              <CardModal isOpen={true}>
                <CardPopUp />
              </CardModal>
            }
          />
        </Route>
      </Routes>
      {/* </Container> */}
    </>
  );
};
