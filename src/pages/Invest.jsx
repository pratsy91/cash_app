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
      <div
        className="absolute top-20 left-1/2 transform 
      -translate-x-1/2"
      >
        <h1 className=" text-xxl text-white font-bold">Investing</h1>
      </div>
      <div
        className="absolute bp:right-96 bp:bottom-56 
      right-24 top-60 w-20 bp:w-auto md:top-20"
      >
        <img src={rightPhone} alt="phone" />
      </div>
      <div className="absolute bp:right-12 bp:top-56 hidden bp:flex flex-col">
        <h1 className=" text-xl text-black font-bold">Bitcoin</h1>
        <p className="bp:w-80 text-justify">
          Cash App is the fastest way to convert dollars to bitcoin. From your
          home screen, six taps are all it takes to stack sats, buy an entire
          bitcoin, or just see what its all about.
        </p>
      </div>
      <div className="absolute bp:left-12 bp:top-56 hidden bp:flex flex-col">
        <h1 className=" text-xl text-black font-bold">Stocks</h1>
        <p className="bp:w-80 text-justify">
          Whether you are an expert or just getting started, Cash App is the
          fastest and most accessible way to invest in stocks. Start now with as
          little as $1.
        </p>
      </div>
      <div
        className="absolute bp:left-96 bp:bottom-56 
      left-24 top-60 w-20 bp:w-auto md:top-20"
      >
        <img src={leftPhone} alt="phone" />
      </div>
      <div
        className="absolute -right-4 bp:bottom-72 bottom-48 
      md:bottom-24  bp:w-auto w-40"
      >
        <img src={small} alt="small branch" />
      </div>
      <div
        className=" absolute -right-2 bottom-32 
      md:bottom-10 bp:bottom-28 bp:w-auto w-44"
      >
        <img src={large} alt="large branch" />
      </div>
      <div
        className="-left-4 absolute bottom-40
        bp:bottom-32 md:bottom-16 bp:w-auto w-56"
      >
        <img src={medium} alt="branch " />
      </div>
      <div>
        <NormalFooter />
      </div>
    </div>
  );
}

export default Invest;
