import React from "react";
import pillar from "../images/intro-pillar 1.png";
import cubes from "../images/intro-cubes 1.png";

function LowerHome() {
  return (
    <div className="flex justify-between relative -bottom-32 px-10 bp:px-44 bp:-bottom-72">
      <div className="w-20 bp:w-auto">
        <img src={cubes} alt="cubes" />
      </div>
      <div className="w-20 bp:w-auto">
        <img src={pillar} alt="pillar" />
      </div>
    </div>
    // <div className="flex justify-between lg:px-44 sm:px-24 relative -bottom-60">
    //   <div>
    //     <img src={cubes} alt="cubes" />
    //   </div>
    //   <div>
    //     <img src={pillar} alt="pillar" />
    //   </div>
    // </div>
  );
}

export default LowerHome;
