import React from "react";
import stars from "../images/stars.svg";
import rightPhone from "../images/investing-phone-1.png";
import leftPhone from "../images/investing-phone-2.png";
import NormalFooter from "../components/NormalFooter";
import small from "../images/smaller-branch.png";
import large from "../images/large-branch.png";
import medium from "../images/medium-branch.png";

function Invest() {
  return (
    <div
      className="bg-gradient-to-b from-green-600 to-white w-screen 
    h-screen overflow-x-hidden overflow-y-hidden relative"
    >
      <img src={stars} className=" w-screen h-screen absolute" alt="stars" />
      <div className="absolute bp:right-96 bp:bottom-56 right-36 bottom-56 w-20 bp:w-auto">
        <img src={rightPhone} alt="phone" />
      </div>
      <div className="absolute bp:left-96 bp:bottom-56 left-36 bottom-56 w-20 bp:w-auto">
        <img src={leftPhone} alt="phone" />
      </div>
      <div className="absolute right-0 bp:bottom-72 bottom-36 bp:w-auto w-52">
        <img src={small} alt="small branch" />
      </div>
      <div className=" absolute right-0 bottom-24 bp:w-auto w-44">
        <img src={large} alt="large branch" />
      </div>
      <div className="left-0 absolute bottom-28 bp:w-auto w-56">
        <img src={medium} alt="branch " />
      </div>
      <div>
        <NormalFooter />
      </div>
    </div>
  );
}

export default Invest;
