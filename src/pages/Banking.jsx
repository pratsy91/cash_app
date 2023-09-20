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
      className="h-screen w-screen bp:flex hidden bg-green-500  
    relative overflow-y-hidden overflow-x-hidden"
    >
      <div className="absolute right-96 -bottom-24">
        <img src={hole} alt="hole" />
      </div>
      <div className="absolute right-20 bottom-20">
        <img src={monster} alt="monster" />
      </div>
      <div className="absolute bottom-24 right-96">
        <img src={cubes} alt="cubes" />
      </div>
      <div className="absolute right-28 bottom-60">
        <img src={rightStairs} alt="stairs" />
      </div>
      <div className="absolute right-96 top-60">
        <img src={upperRamp} alt="ramp" />
      </div>
      <div className="absolute right-44 top-20">
        <img src={rightTrack} alt="track" />
      </div>
      <div
        className="absolute 
        left-80 top-48 bp:w-72"
      >
        <h1 className="text-xxl font-bold text-white ">Banking</h1>
        <p className=" text-justify">
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </p>
      </div>
      <div
        className="absolute left-1/2 transform 
      -translate-x-1/2 bottom-56"
      >
        <img src={phone} alt="phone" />
      </div>
      <div className="absolute left-96 bottom-0 ">
        <img src={tube} alt="tube" />
      </div>
      <div className="absolute bottom-32 left-52">
        <img src={lowerRamp} alt="ramp" />
      </div>
      <div className="absolute left-28 bottom-52">
        <img src={leftStairs} alt="stairs" />
      </div>
      <div className="absolute left-0 top-20">
        <img src={hole} alt="hole" />
      </div>
      <div className="absolute left-28 top-28">
        <img src={column} alt="column" />
      </div>
    </div>
  );
}

export default Banking;
