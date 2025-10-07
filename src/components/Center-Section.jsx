import React from "react";
import Button from "../assets/Button.png";
const CenterSection = () => {
  return (
  <div className="relative flex items-center min-h-[400px] md:min-h-[600px] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 bg-black opacity-60 z-0"></div>
      <div className="relative z-10 flex flex-col justify-center items-start px-4 py-8 md:px-12 md:py-16 max-w-[90vw] md:max-w-xl w-full">
        <span className="text-xs md:text-sm tracking-[0.2em] text-white mb-4 text-left">
          KHAWAJA YANNI
        </span>
        <h1 className="text-white font-serif text-3xl md:text-5xl lg:text-6xl font-samibold leading-tight mb-4 text-left">
          The new
          <br />
          era of luxury
        </h1>
        <p className="text-white text-sm md:text-base mb-8 break-words text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
        </p>
        <img src={Button} alt="Button" className="w-48 md:w-auto" />
      </div>
      <div className="absolute left-0 bottom-6 md:bottom-9 w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-12 gap-2 z-10">
        <span className="w-3 h-3 rounded-full bg-white/60"></span>
        <span className="w-3 h-3 rounded-full bg-white/30"></span>
        <span className="w-3 h-3 rounded-full bg-white/30"></span>
      </div>
    </div>
  );
};

export default CenterSection;
