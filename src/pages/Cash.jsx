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
        w-screen h-full bg-black overflow-x-hidden
        "
      >
        <div className="bp:w-1/3 w-32 relative bg-black h-screen">
          <div className="absolute left-0 bottom-0">
            <img src={leftStairs} alt="stairs" />
          </div>
          <div
            className="absolute bp:left-96 left-10 
          bp:top-32 top-32 z-10 text-center md:left-16 md:-top-6"
          >
            <h1
              className="text-xxl text-green-500 
            font-bold "
            >
              Cash Card
            </h1>
            <p className="text-white text-justify w-72">
              The Cash Card is a free, customizable debit card that lets you pay
              online and in stores. Its the only way to get Boosts instant
              discounts that work at places where you want to spend.
            </p>
          </div>
        </div>
        <div className=" bp:w-2/3 w-80 relative bg-black h-screen ">
          <div className="absolute right-0 bottom-0">
            <img src={rightStairs} alt="stairs" />
          </div>
          <div
            className="absolute bp:right-6 right-1 
            bp:top-96 bottom-20
           z-10 bp:w-auto w-10 md:bottom-24"
          >
            <img src={shoe} alt="shoe" />
          </div>
          <div
            className="absolute bp:right-80 
            right-20 bp:bottom-28
          bottom-8 bp:w-auto w-8 md:right-24
          md:bottom-12"
          >
            <img src={coffee} alt="coffee" />
          </div>
          <div
            className="absolute bp:left-1/2 bp:transform 
            bp:-translate-x-1/2 bp:top-96 left-28
            bottom-16 bp:w-auto w-8 md:bottom-24 md:transform-none
            md:left-36"
          >
            <img src={burger} alt="burger" />
          </div>
          <div
            className="absolute bp:right-56 right-10 
            bp:top-24 bottom-44 bp:w-auto w-10
            md:bottom-52 md:right-16"
          >
            <img src={hand} alt="hand" />
          </div>
          <div
            className=" absolute bp:right-80 right-20
           bp:top-52 bottom-28 bp:w-auto w-8 md:right-28
           md:bottom-36"
          >
            <img src={card} alt="card" />
          </div>
          <div
            className="absolute bp:bottom-20 
          bottom-6 bp:left-48 left-14 bp:w-auto w-10
          md:bottom-10"
          >
            <img src={phone} alt="phone" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cash;
