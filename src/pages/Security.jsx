import React from "react";
import security from "../images/security2.png";
import NormalFooter from "../components/NormalFooter";

function Security() {
  return (
    <>
       <div className="h-screen bg-top overflow-y-scroll relative bg-black flex justify-center items-center pt-96"
     style={{
      backgroundImage: `url(${security})`,
    }}>       
    </div>
    </>
  );
}

export default Security;
