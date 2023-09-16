import React from "react";
import Footer from "../components/Footer";
import Home from "../components/Home";
import LowerHome from "../components/LowerHome";
import Menu from "../components/Menu";
import UpperHome from "../components/UpperHome";
import stars from "../images/stars.svg";

function Main() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen  overflow-y-scroll relative bg-black">
        <img src={stars} className=" w-screen absolute " alt="stars" />

        <UpperHome />
        <div className="flex justify-center items-center absolute left-72 top-14">
          <Home />
        </div>
        <LowerHome />
        <Footer />
      </div>
    </>
  );
}

export default Main;
