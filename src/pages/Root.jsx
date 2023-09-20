import React from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default Root;
