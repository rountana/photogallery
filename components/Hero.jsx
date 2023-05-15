import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mb-[10rem] bg-fixed bg-center bg-cover custom-img">
      {/* Overlay & make it transparent to give it a yellow retro tinge*/}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-500/20 z-[2]" />
      <div className="p-5 text-white z-[2] ml-0 mt-[-30rem] sm:ml-[-40rem] ">
        <h2 className="text-5xl font-bold"> {heading} </h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">Book</button>
      </div>
    </div>
  );
};

export default Hero;
