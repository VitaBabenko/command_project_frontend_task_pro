import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = true;

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
