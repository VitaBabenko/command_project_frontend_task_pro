import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks";


export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const {isLoggedIn}= useAuth()

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
