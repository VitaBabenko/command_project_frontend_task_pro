import { NavLink } from "react-router-dom";

export const Welcome = () => {
  return (
    <div>
      <h1>Task Pro</h1>
      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <nav>
        <NavLink to="/auth/register">Registration</NavLink>
        <NavLink to="/auth/login">Log In</NavLink>
        <NavLink to="/home">Screen Page</NavLink>
      </nav>
    </div>
  );
};
