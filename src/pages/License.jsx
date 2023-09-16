import React from 'react';
import social from "../images/social2.jpg"
import office from "../images/office.jpg"

function License() {
  return (
    <div className="h-screen bg-top bg-cover bg-no-repeat overflow-y-scroll relative 
    bg-black flex justify-center items-center pt-2"
    style={{
     backgroundImage: `url(${social})`,
   }}>  
   {/* <img src={social} alt="" />      */}
   </div>
  )
}

export default License