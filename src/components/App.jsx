import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import Container from '../components/Container/Container';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
import Container from './Container/Container';
import GlobalStyle from 'GlobalStyle';
import { ModalContainer } from './Modal';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const ScreensPage = lazy(() => import('../pages/ScreensPage'));

export const App = () => {
  return (
    <>
      <ModalContainer />
      <GlobalStyle />

      <Suspense fallback={<div>Loading...</div>}>
        <Container>
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
                <PrivateRoute
                  redirectTo="/auth/login"
                  component={<HomePage />}
                />
              }
            >
              <Route path=":boardName" element={<ScreensPage />} />
            </Route>
            <Route path="*" element={<WelcomePage />} />
          </Routes>
        </Container>
      </Suspense>
    </>
  );
};
