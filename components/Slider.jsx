import React from "react";

const Slider = ({ slides }) => {
  return (
    <div>
      <h1> Gallery</h1>
      <div>
        {slides.map((slide, index) => {
          return <img src={`${slide.image}`}></img>;
        })}
        ;
      </div>
    </div>
  );
};

export default Slider;
