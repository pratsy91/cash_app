import React from "react";

function FooterBox({ text, image }) {
  return (
    <div
      className="border border-white rounded-md py-1 px-2 flex justify-center gap-6 w-44 
    h-10 items-center"
    >
      <img src={image} alt={text} />
      <p className="text-white text-2xl font-bold">{text}</p>
    </div>
  );
}

export default FooterBox;
