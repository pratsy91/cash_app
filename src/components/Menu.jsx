import React from "react";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";
import eye from "../images/Layer 2.svg";

function Menu() {
  return (
    <header className="bg-black px-10 pt-5 flex justify-between">
      <img src={logo} alt="logo" />
      <div className="text-white flex justify-between gap-5">
        <NavLink>SIGN IN</NavLink>
        <NavLink>LEGAL</NavLink>
        <NavLink>LICENCES</NavLink>
        <NavLink>SECURITY</NavLink>
        <NavLink>CAREERS</NavLink>
        <NavLink>PRESS</NavLink>
        <NavLink>SUPPORT</NavLink>
        <NavLink>STATUS</NavLink>
        <NavLink>CODEBLOG</NavLink>
      </div>
      <img src={eye} alt="logo" />
    </header>
  );
}

export default Menu;
