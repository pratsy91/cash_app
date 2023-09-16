import React from 'react'
import progress from "../images/status.jpg"

function Status() {
  return (
    <div className="h-screen bg-top bg-cover bg-no-repeat overflow-y-scroll relative bg-black flex justify-center items-center pt-96"
    style={{
     backgroundImage: `url(${progress})`,
   }}>       
   </div>
  )
}

export default Status