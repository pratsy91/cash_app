import React from "react";
import pillar from "../images/intro-pillar 1.png";
import cubes from "../images/intro-cubes 1.png";

function LowerHome() {
  return (
    <div className="flex justify-between px-36 pt-56">
      <div>
        <img src={cubes} alt="cubes" />
      </div>
      <div>
        <img src={pillar} alt="pillar" />
      </div>
    </div>
  );
}

export default LowerHome;