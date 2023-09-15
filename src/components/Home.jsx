import React from "react";
import phone from "../images/intro-phone 1.png";

function Home() {
  return (
    <>
      <div className="flex flex-col text-center relative">
        <p className="text-cash text-white  font-black ">CASH</p>

        <img
          src={phone}
          alt="phone"
          className="left-56 -bottom-24 w-96 absolute h-phone top-24"
        />
        <p className="text-cash text-white  font-black absolute -bottom-56 left-24 ">
          APP
        </p>
      </div>
    </>
  );
}

export default Home;
