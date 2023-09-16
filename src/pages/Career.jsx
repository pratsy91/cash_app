import React from "react";
import career from "../images/career.jpg";



function Career() {
  return (
    <div className="h-screen bg-top overflow-y-scroll relative bg-black flex justify-center items-center pt-96"
     style={{
      backgroundImage: `url(${career})`,
    }}>       
    </div>
  );
}

export default Career;
