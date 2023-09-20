import React from "react";
import phone from "../images/intro-phone 1.png";

function Home() {
  return (
    <>
      <div
        className="flex flex-col text-center bp:px-0 px-10 
      items-center relative bp:top-32 top-40"
      >
        <p className=" text-scash bp:text-cash text-white  font-black">CASH</p>
        <div className=" w-36 bp:w-96 bp:top-24 absolute bp:-bottom-24  bp:left-56">
          <img src={phone} alt="phone" />
        </div>

        <p
          className="text-scash bp:text-cash text-white 
         bp:-bottom-56  font-black absolute -bottom-20"
        >
          APP
        </p>
      </div>
      {/* <div className="flex flex-col text-center relative">
        <p className="text-cash  text-white  font-black ">CASH</p>

        <img
          src={phone}
          alt="phone"
          className="left-56 -bottom-24  sm:w-48 lg:w-96 absolute  top-24 "
        />
        <p className="text-cash text-white  font-black absolute -bottom-56 left-24">
          APP
        </p>
      </div> */}
    </>
  );
}

export default Home;
