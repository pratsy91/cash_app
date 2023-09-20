import React from "react";
import social from "../images/social2.jpg";

function License() {
  return (
    <div
      className="h-screen bg-top bg-cover bg-no-repeat 
      overflow-y-scroll relative bg-black
      bp:px-32 flex justify-center items-center pt-10 px-5"
      style={{
        backgroundImage: `url(${social})`,
      }}
    >
      <div className="bg-black text-white opacity-80 px-1 py-1 rounded-md">
        <h1 className="text-scash text-green-500 pb-5">Licenses</h1>
        <p className="text-bold text-xl">
          <span className="text-green-500 text-xl">L</span>icenses are legal
          permissions granted by an authority that allow an individual or an
          organization to perform a specific activity or conduct business.
          Licenses are a way for governments to regulate and control certain
          industries or professions, ensuring that they are held to certain
          standards and regulations.
        </p>
      </div>
    </div>
  );
}

export default License;
