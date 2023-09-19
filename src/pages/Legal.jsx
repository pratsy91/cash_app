import React from "react";
import legal from "../images/legal.jpg";

function Legal() {
  return (
    <div
      className="h-screen bg-top bg-cover bg-no-repeat 
      overflow-y-scroll relative bg-black
      bp:px-32 flex justify-center items-center px-10 "
      style={{
        backgroundImage: `url(${legal})`,
      }}
    >
      <div className="bg-white opacity-80 p-5 rounded-md">
        <h1 className="text-xxl text-green-500">Terms of Service</h1>
        <p className="text-bold text-xl">
          <span className="text-green-500 text-xxl">L</span>aw is a system of
          rules and regulations that are enforced by a government or any other
          authority. The purpose of law is to ensure order, justice, and peace
          in society. It provides a framework for the behavior of individuals,
          organizations, and governments by holding them accountable for their
          actions. Laws cover a wide range of topics such as criminal law, civil
          law, contract law, and constitutional law.
        </p>
      </div>
    </div>
  );
}

export default Legal;
