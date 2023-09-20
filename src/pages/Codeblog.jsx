import React from "react";
import code from "../images/code.jpg";

function Codeblog() {
  return (
    <div
      className="h-screen bg-top bg-cover bg-no-repeat 
      overflow-y-scroll relative bg-black
      bp:px-32 flex justify-center items-center px-10 pt-10"
      style={{
        backgroundImage: `url(${code})`,
      }}
    >
      <div className=" bg-white opacity-80 p-1 rounded-md">
        <h1 className="text-xl text-green-500 pb-1">Codeblog</h1>
        <p className="text-bold text-xl">
          <span className="text-green-500 text-xl">A</span> coding community is
          a group of individuals who come together with the shared interest of
          learning, collaborating, and advancing their skills in programming and
          technology. These communities are often formed online through forums,
          social media, and coding challenges, but can also be found in person
          at coding boot camps, hackathons, and meetups. These communities offer
          a supportive environment where members can seek help, share knowledge,
          and work on projects together. They can also provide valuable
          networking opportunities and connections to industry professionals.
        </p>
      </div>
    </div>
  );
}

export default Codeblog;
