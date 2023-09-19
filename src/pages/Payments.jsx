import React from "react";
import column from "../images/column.png";
import medium from "../images/pillar-medium.png";
import large from "../images/pillar-large.png";
import phone from "../images/payments-phone 1.png";
import small from "../images/pillar-small.png";

function Payments() {
  return (
    <div className=" h-screen   relative overflow-y-hidden">
      <img
        src={column}
        alt="column"
        className="w-20  bp:w-auto absolute -bottom-14 right-96 z-10"
      />
      <img
        src={medium}
        alt="pillar"
        className="w-20 bp:w-auto bottom-44 absolute right-80 "
      />
      <div className="absolute bp:w-auto bottom-16 bp:right-5 right-20">
        <img src={column} alt="column" />
        <img
          src={large}
          alt="pillar"
          className="w-20 bp:w-auto bottom-20 absolute "
        />
      </div>

      <img
        src={medium}
        alt="pillar"
        className="w-20 bp:w-auto -bottom-20 absolute inset-x-1/2 z-10"
      />
      <img
        src={medium}
        alt="pillar"
        className="w-20 bp:w-auto absolute top-96 left-96 z-10"
      />
      <div className="absolute top-40 left-72">
        <h1 className=" bp:text-xxl text-xl  text-green-500  font-bold">
          Payments
        </h1>
        <p className="bp:w-80 w-auto  text-justify">
          Send and receive money with anyone, donate to an important cause, or
          tip professionals. Just enter a $cashtag, phone number, or scan their
          QR code to pay.
        </p>
      </div>

      <img
        src={phone}
        alt="phone"
        className="absolute w-56 bp:w-auto left-96 bottom-60"
      />
      <img
        src={small}
        alt="pillar"
        className="absolute bp:w-auto bottom-36 left-40"
      />
      <img
        src={medium}
        alt="pillar"
        className="w-20 bp:w-auto absolute left-16 bottom-20"
      />
    </div>
  );
}

export default Payments;
