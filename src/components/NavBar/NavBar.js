import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/login">Login</Link>
      </span>
    </div>
  );
};

export default NavBar;
