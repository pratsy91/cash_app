import React from "react";
import pillar from "../images/intro-pillar 1.png";
import cubes from "../images/intro-cubes 1.png";

function LowerHome() {
  return (
    <div
      className="flex justify-between relative -bottom-52 px-10 
    bp:px-44 bp:top-48 md:-top-8"
    >
      <div className="w-20 bp:w-auto">
        <img src={cubes} alt="cubes" />
      </div>
      <div className=" bp:pt-24 pt-6 md:pt-12 ">
        <svg
          width="18"
          height="30"
          viewBox="0 0 18 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M9.69361 29.6495L17.7513 20.4362C18.121 20.0137 18.0726 19.3748 17.6455 19.0109C17.2178 18.6456 16.5717 18.6921 16.202 19.1147L10.0265 26.1768V1.01089C10.0265 0.452881 9.56877 0 9.00321 0C8.43765 0 7.97988 0.452881 7.97988 1.01089V26.4308L4.34299 22.4055L1.82561 19.2609C1.47495 18.8235 0.831623 18.7487 0.388182 19.0951C0.133032 19.2946 0 19.5905 0 19.889C0 20.1087 0.0716343 20.3298 0.221039 20.5158L2.77798 23.7055L8.15658 29.6617C8.35237 29.8787 8.63345 30.002 8.92817 30C9.2222 29.9973 9.50123 29.8706 9.69361 29.6495Z"
            fill="#00D54B"
          />
        </svg>
      </div>
      <div className="w-20 bp:w-auto">
        <img src={pillar} alt="pillar" />
      </div>
    </div>
  );
}

export default LowerHome;
