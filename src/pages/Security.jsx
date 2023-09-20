import React from "react";
import security from "../images/security2.png";

function Security() {
  return (
    <>
      <div
        className="h-screen bg-top bg-cover bg-no-repeat 
        overflow-y-scroll relative bg-black
        bp:px-32 flex justify-center items-center px-10 pt-10"
        style={{
          backgroundImage: `url(${security})`,
        }}
      >
        <div className=" bg-white text-black opacity-95 px-1 py-1 rounded-md">
          <h1 className="text-xl text-green-500 font-bold">Security</h1>
          <p className="text-bold text-xl text-justify">
            <span className="text-green-500 text-xl">I</span>t’s never been
            easier to send money, but that doesn’t mean it shouldn’t be safe.
            Cash App utilizes a variety of safety features to process millions
            of payments a year and ensure the protection of our customers. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Minus, itaque
            animi? Inventore, doloremque unde. Exercitationem ex id perspiciatis
            nesciunt expedita voluptate pariatur totam ullam mollitia
            repudiandae error dolore, eos quas explicabo quasi nihil molestias
            iure suscipit in voluptas. Quaerat soluta a provident ipsum. V
          </p>
        </div>
      </div>
    </>
  );
}

export default Security;
