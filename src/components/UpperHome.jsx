import React from "react";
import cube from "../images/intro-cube 1.png";
import stairs from "../images/intro-stairs 1.png";

function UpperHome() {
  return (
    <div className="flex justify-between px-10 bp:px-52 bp:top-20 relative top-44 ">
      <div>
        <img src={cube} alt="cube" />
      </div>
      <div className="bp:w-auto w-20">
        <img src={stairs} alt="stairs" />
      </div>
    </div>
    // <div className="flex justify-between lg:px-52 sm:px-28 relative top-20 ">
    //   <div>
    //     <img src={cube} alt="cube" />
    //   </div>
    //   <div>
    //     <img src={stairs} alt="stairs" />
    //   </div>
    // </div>
  );
}

export default UpperHome;
