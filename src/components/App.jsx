import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const ScreensPage = lazy(() => import('../pages/ScreensPage'));

export const App = () => {
  return (
    <>
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
