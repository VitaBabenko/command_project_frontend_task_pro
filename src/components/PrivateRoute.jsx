import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  const { isRefreshing } = useAuth();
  console.log('isLoggedIn', isLoggedIn);
  console.log('isRefreshing', isRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  // const isLoggedIn = false;

  // return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
