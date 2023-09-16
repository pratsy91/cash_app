import React from "react";
import logo from "../images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import eye from "../images/Layer 2.svg";

function Menu() {
  const navigate = useNavigate();
  const logoHandler = () => {
    navigate("/");
  };

  return (
    <header
      className="bg-black px-10 pt-5 flex justify-between fixed top-0 w-full 
    opacity-40 hover:opacity-60 z-10"
    >
      <img
        src={logo}
        alt="logo"
        onClick={logoHandler}
        className="cursor-pointer"
      />
      <div className="text-white flex justify-between gap-5">
        {/* <NavLink  className={({ isActive, isPending }) =>
    isActive?"border border-white px-2 py-1 bg-white text-black mb-2 rounded-md":""
  }>SIGN IN</NavLink> */}
        <NavLink to="/legal"className={({ isActive, isPending }) =>
    isActive?"border border-white px-2 py-1 bg-white text-black mb-2 rounded-md":""
  }>LEGAL</NavLink>
        <NavLink to="/license" className={({ isActive, isPending }) =>
    isActive?"border border-white px-2 py-1 bg-white text-black mb-2 rounded-md":""
  }>LICENCES</NavLink>
        <NavLink to="/security"className={({ isActive, isPending }) =>
    isActive?"border border-white px-2 py-1 bg-white text-black mb-2 rounded-md":""
  }>SECURITY</NavLink>
        <NavLink to="/career"  className={({ isActive, isPending }) =>
    isActive?"border border-white px-2 py-1 bg-white text-black mb-2 rounded-md":""
  }>CAREERS</NavLink>
        <NavLink to="/press" className={({ isActive, isPending }) =>
    isActive?"border border-white px-2 py-1 bg-white text-black mb-2 rounded-md":""
  }>PRESS</NavLink>
        <NavLink to="/support" className={({ isActive, isPending }) =>
    isActive?"border border-white px-2 py-1 bg-white text-black mb-2 rounded-md":""
  }>SUPPORT</NavLink>
        <NavLink to="/status" className={({ isActive, isPending }) =>
    isActive?"border border-white px-2 py-1 bg-white text-black mb-2 rounded-md":""
  }>STATUS</NavLink>
        <NavLink to="/code" className={({ isActive }) =>
    isActive?"border border-white px-2 py-1 bg-white text-black mb-2 rounded-md":""
  }>CODEBLOG</NavLink>
      </div>
      <img src={eye} alt="logo" />
    </header>
  );
}

export default Menu;
