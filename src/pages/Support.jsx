import React from "react";
import support from "../images/support.jpg";

function Support() {
  return (
    <div
      className="h-screen bg-top bg-cover bg-no-repeat 
    overflow-y-scroll relative bg-black
    bp:px-32 flex justify-center items-center px-10 pt-10"
      style={{
        backgroundImage: `url(${support})`,
      }}
    >
      <div className=" bg-white opacity-80 p-1 rounded-md">
        <h1 className="text-xl text-green-500 pb-1">How Can We Help You?</h1>
        <p className="text-bold text-xl">
          <span className="text-green-500 text-xl">T</span>echnical support
          refers to a range of services offered by companies to help customers
          troubleshoot and resolve problems with their technology products and
          services. This can include software or hardware issues, or more
          complex network and IT support. Technical support may be offered over
          the phone, via email, live chat, or through remote access tools that
          allow technicians to access and control a customer's device.
        </p>
      </div>
    </div>
  );
}

export default Support;
