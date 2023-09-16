import React from 'react'
import support from "../images/support.jpg"

function Support() {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat overflow-y-scroll relative bg-black flex justify-center items-center pt-96"
    style={{
     backgroundImage: `url(${support})`,
   }}>       
   </div>
  )
}

export default Support