import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";

export const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  return (
    <div className={s.wrapperLinks}>
      <NavLink className={buildLinkClass} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Sign In
      </NavLink>
    </div>
  );
};

export default AuthNav;
