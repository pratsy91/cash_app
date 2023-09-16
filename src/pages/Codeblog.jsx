import React from 'react';
import code from "../images/code.jpg"

function Codeblog() {
  return (
    <div className="h-screen bg-top bg-cover bg-no-repeat overflow-y-scroll relative bg-black flex justify-center items-center pt-96"
    style={{
     backgroundImage: `url(${code})`,
   }}>       
   </div>
  )
}

export default Codeblog