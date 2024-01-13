import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/register">register</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
