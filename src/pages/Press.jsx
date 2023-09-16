import React from 'react';
import news from "../images/news.jpg"

function Press() {
  return (
    <div className="h-screen bg-top bg-cover bg-no-repeat overflow-y-scroll relative bg-black flex justify-center items-center pt-96"
    style={{
     backgroundImage: `url(${news})`,
   }}>       
   </div>
  )
}

export default Press