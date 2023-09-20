import React from "react";
import news from "../images/news.jpg";

function Press() {
  return (
    <div
      className="h-screen bg-top bg-cover bg-no-repeat 
      overflow-y-scroll relative bg-black
      bp:px-32 flex justify-center items-center px-10 pt-10"
      style={{
        backgroundImage: `url(${news})`,
      }}
    >
      <div className=" bg-white opacity-80 p-1 rounded-md">
        <h1 className="text-scash text-green-500">Press</h1>
        <p className="text-bold text-xl">
          <span className="text-green-500 text-xl">P</span>ress refers to
          various types of media organizations that gather and distribute news
          and information to the public, including newspapers, magazines, radio
          and television stations, websites, and social media platforms. The
          press plays a crucial role in informing the public about events and
          issues that affect their lives and shaping public opinion.
        </p>
      </div>
    </div>
  );
}

export default Press;
