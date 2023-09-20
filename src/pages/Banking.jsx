import React from "react";
import hole from "../images/banking-hole.png";
import monster from "../images/banking-monster.png";
import cubes from "../images/banking-cubes.png";
import rightStairs from "../images/banking-stairs-1.png";
import leftStairs from "../images/banking-stairs-2.png";
import upperRamp from "../images/banking-ramp-1.png";
import lowerRamp from "../images/banking-ramp-2.png";
import leftTrack from "../images/banking-track-1.png";
import rightTrack from "../images/banking-track-2.png";
import phone from "../images/banking-phone.png";
import tube from "../images/banking-tube.png";
import column from "../images/banking-column.png";

function Banking() {
  return (
    <div
      className="h-screen w-screen bp:flex  bg-green-500  
    relative overflow-y-hidden overflow-x-hidden"
    >
      <div
        className="absolute bp:right-96 bp:-bottom-24 
        -bottom-10 w-32 bp:w-auto right-28"
      >
        <img src={hole} alt="hole" />
      </div>
      <div
        className="absolute bp:right-20 right-5 
      bp:bottom-20 bottom-6 w-20 bp:w-auto"
      >
        <img src={monster} alt="monster" />
      </div>
      <div
        className="absolute bp:bottom-24 bottom-20
      bp:right-96 right-20 w-28 bp:w-auto md:right-48"
      >
        <img src={cubes} alt="cubes" />
      </div>
      <div
        className="absolute bp:right-28 right-6 
      bp:bottom-60 bottom-60 bp:w-auto w-14 md:bottom-24"
      >
        <img src={rightStairs} alt="stairs" />
      </div>
      <div
        className="absolute bp:right-96 right-16 bp:top-60 
      bottom-40 w-28 bp:w-auto md:right-36 md:bottom-44"
      >
        <img src={upperRamp} alt="ramp" />
      </div>
      <div
        className="absolute bp:right-44 right-10
         bp:top-20 top-20 bp:w-auto w-28 md:top-12 md:right-24"
      >
        <img src={rightTrack} alt="track" />
      </div>
      <div
        className="absolute bp:left-80 left-24 
      bp:top-44 text-center top-32 bp:w-72 w-48 md:top-8 md:left-36"
      >
        <h1 className="text-xxl font-bold text-white ">Banking</h1>
        <p className=" ps-1 text-justify">
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </p>
      </div>
      <div
        className="absolute bp:left-1/2 bp:transform 
      bp:-translate-x-1/2 bottom-32 w-24 bp:w-auto md:bottom-32 md:transform-none
      left-1/2 transform -translate-x-1/2"
      >
        <img src={phone} alt="phone" />
      </div>
      <div
        className="absolute bp:left-96 left-4 
      bottom-0 w-24 bp:w-auto md:left-72"
      >
        <img src={tube} alt="tube" />
      </div>
      <div
        className="absolute bp:left-96 left-14 
      bp:bottom-64 bottom-56 bp:w-auto w-28 md:left-8 md:top-7"
      >
        <img src={leftTrack} alt="track" />
      </div>
      <div
        className="absolute bp:bottom-24 bottom-24 bp:left-52 
      left-10 w-32 bp:w-auto md:bottom-6"
      >
        <img src={lowerRamp} alt="ramp" />
      </div>
      <div
        className="absolute bp:left-28 left-3 
      bp:bottom-52 bottom-48 w-14 bp:w-auto 
      md:bottom-10 md:left-2"
      >
        <img src={leftStairs} alt="stairs" />
      </div>
      <div className="absolute left-0 top-24 w-28 bp:w-auto">
        <img src={hole} alt="hole" />
      </div>
      <div
        className="absolute bp:left-28 bp:top-28 
      left-6 bp:w-auto w-14 top-32 md:left-20 md:top-32"
      >
        <img src={column} alt="column" />
      </div>
    </div>
  );
}

export default Banking;
