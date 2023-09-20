import React from "react";
import progress from "../images/status.jpg";

function Status() {
  let arr = ["send and recieve money", "cash card", "cash app pay", "offers"];
  return (
    <div
      className="h-screen bg-top bg-cover bg-no-repeat 
      overflow-y-scroll relative bg-black
      bp:px-32 flex justify-center items-center px-10 pt-10"
      style={{
        backgroundImage: `url(${progress})`,
      }}
    >
      <div className=" bg-white opacity-80 p-1 rounded-md">
        <h1 className="text-xl text-green-500 pb-1 ">Good to go</h1>
        <ul className="flex flex-col gap-5">
          {arr.map((a) => (
            <li className="p-2 border border-green-500 rounded-md flex justify-between">
              <span className="uppercase text-xl font-bold">{a}</span>
              <span className="text-green-500 uppercase">working</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Status;
