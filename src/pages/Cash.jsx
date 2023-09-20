import React from "react";
import rightStairs from "../images/boost-stairs-1.png";
import leftStairs from "../images/boost-stairs-2.png";
import shoe from "../images/boost-shoe.png";
import coffee from "../images/boost-coffee.png";
import burger from "../images/boost-burger.png";
import hand from "../images/boost-hand.png";
import card from "../images/boost-card.png";
import phone from "../images/boost-phone.png";

function Cash() {
  return (
    <>
      <div
        className="flex justify-between pt-20
        px-4 items-center overflow-y-hidden
        w-screen h-screen bg-black overflow-x-hidden
        "
      >
        <div className="w-1/3 relative bg-black h-screen">
          <div className="absolute left-0">
            <img src={leftStairs} alt="stairs" />
          </div>
          <div className="absolute left-96 top-32 z-10 text-center">
            <h1
              className="text-xxl text-green-500 
            font-bold "
            >
              Cash Card
            </h1>
            <p className="text-white text-justify w-72">
              The Cash Card is a free, customizable debit card that lets you pay
              online and in stores. Its the only way to get Boosts—instant
              discounts that work at places where you want to spend.
            </p>
          </div>
        </div>
        <div className=" w-2/3 relative bg-black h-screen ">
          <div className="absolute right-0">
            <img src={rightStairs} alt="stairs" />
          </div>
          <div className="absolute right-6 top-96 z-10">
            <img src={shoe} alt="shoe" />
          </div>
          <div className="absolute right-80 bottom-28">
            <img src={coffee} alt="coffee" />
          </div>
          <div className="absolute right-96 top-96">
            <img src={burger} alt="burger" />
          </div>
          <div className="absolute right-56 top-24">
            <img src={hand} alt="hand" />
          </div>
          <div className=" absolute right-80 top-52">
            <img src={card} alt="card" />
          </div>
          <div className="absolute bottom-20 left-48">
            <img src={phone} alt="phone" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cash;
