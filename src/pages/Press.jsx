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
      <div className=" bg-white opacity-80 p-5 rounded-md">
        <h1 className="text-scash text-green-500 pb-5">Press</h1>
        <p className="text-bold text-xl">
          <span className="text-green-500 text-xxl">P</span>ress refers to
          various types of media organizations that gather and distribute news
          and information to the public, including newspapers, magazines, radio
          and television stations, websites, and social media platforms. The
          press plays a crucial role in informing the public about events and
          issues that affect their lives and shaping public opinion. Journalists
          who work for the press are responsible for conducting research,
          interviewing sources, and presenting accurate and balanced reports.
          The press is also responsible for holding those in power accountable
          and exposing corruption and wrongdoing.
        </p>
      </div>
    </div>
  );
}

export default Press;
