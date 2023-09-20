import React from "react";
import column from "../images/column.png";
import medium from "../images/pillar-medium.png";
import large from "../images/pillar-large.png";
import phone from "../images/payments-phone 1.png";
import small from "../images/pillar-small.png";
import column2 from "../images/column2.png";

function Payments() {
  return (
    <div
      className=" h-screen w-screen bp:flex   
    relative overflow-y-hidden overflow-x-hidden"
    >
      <div
        className="w-96  bp:w-auto absolute 
      bp:-bottom-14 -bottom-10 bp:right-96 z-10 
      md:right-80 hidden md:block bp:block"
      >
        <img src={column} alt="column" />
      </div>

      <div
        className="w-20 bp:w-auto bp:bottom-44 
      absolute bp:right-80 right-24 bottom-20 hidden md:block bp:block"
      >
        <img src={medium} alt="pillar" />
      </div>

      <div
        className="absolute bp:w-auto bp:bottom-16 
      bp:right-5 -right-2 bottom-5 w-96"
      >
        <img src={column} alt="column" />
      </div>
      <div
        className="w-20 bp:w-auto bp:bottom-20 
        absolute bp:left-1/2 bp:transform left-48 bottom-16
      bp:-translate-x-1/2 md:transform-none md:left-64 md:hidden bp:block"
      >
        <img src={large} alt="pillar" />
      </div>

      <img
        src={medium}
        alt="pillar"
        className="w-20 bp:w-auto bp:-bottom-20 absolute 
        bp:left-1/2 bp:transform -bottom-8 left-44 
        bp:-translate-x-1/2 z-20"
      />
      <img
        src={medium}
        alt="pillar"
        className="w-16 bp:w-auto absolute 
        bp:top-96 bp:left-96 bottom-12 left-36 z-10 "
      />
      <div
        className="absolute top-40 bp:left-60 left-24
      md:left-6 md:top-12"
      >
        <h1 className=" bp:text-xxl text-xl  text-green-500  font-bold">
          Payments
        </h1>
        <p className="bp:w-80 w-60  text-justify">
          Send and receive money with anyone, donate to an important cause, or
          tip professionals. Just enter a $cashtag, phone number, or scan their
          QR code to pay.
        </p>
      </div>
      <div
        className="absolute w-96 bp:w-auto 
      bottom-28 left-3 bp:left-80 bp:bottom-60 md:left-72 md:bottom-12"
      >
        <img src={phone} alt="phone" />
      </div>
      <div
        className="absolute bp:w-auto 
      bp:bottom-32 bp:left-36 left-20 bottom-12 w-14"
      >
        <img src={small} alt="pillar" />
      </div>
      <div
        className="w-20 bp:w-auto absolute 
      bp:left-16 bp:bottom-20 left-6 bottom-8"
      >
        <img src={medium} alt="pillar" />
      </div>
      <div
        className="bp:w-96 -left-12 -bottom-20 
      absolute w-28 z-10"
      >
        <img src={column2} alt="column" />
      </div>
    </div>
  );
}

export default Payments;
