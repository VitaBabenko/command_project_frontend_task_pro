import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  // const isLoggedIn = false;

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
