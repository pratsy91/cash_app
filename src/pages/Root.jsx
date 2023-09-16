import React from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default Root;
