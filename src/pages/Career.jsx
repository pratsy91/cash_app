import React from "react";
import career from "../images/career.jpg";

function Career() {
  return (
    <div
      className="h-screen bg-top bg-cover bg-no-repeat 
      overflow-y-scroll relative bg-black
      bp:px-32 flex justify-center items-center px-10 pt-10"
      style={{
        backgroundImage: `url(${career})`,
      }}
    >
      <div className=" bg-white opacity-80 p-2 rounded-md">
        <h1 className="text-xxl text-green-500">
          Redefine relationship with money.
        </h1>
        <p className="text-bold text-xl">
          <span className="text-green-500 text-xxl">W</span>e want to make the
          world’s relationship with money more relatable, instantly available,
          and universally accessible. This is our mission, and it’s why working
          at Cash App means so much than a job. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default Career;
