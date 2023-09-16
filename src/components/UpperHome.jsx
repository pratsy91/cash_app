import React from "react";
import cube from "../images/intro-cube 1.png";
import stairs from "../images/intro-stairs 1.png";

function UpperHome() {
  return (
    <div className="flex justify-between px-52 relative top-20 ">
      <div>
        <img src={cube} alt="cube" />
      </div>
      <div>
        <img src={stairs} alt="stairs" />
      </div>
    </div>
  );
}

export default UpperHome;
