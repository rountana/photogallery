import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const nextSlide = () => {
    {
      //currentSlide is a index value
      //when current slide is last image, roll to zero, if not roll to next
      currentSlide === slidesCount - 1 ? 0 : setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    {
      //shen current slide is the first image, set prev to last image, if not to prev
      currentSlide === 0
        ? setCurrentSlide(slidesCount - 1)
        : setCurrentSlide(currentSlide - 1);
    }
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id="gallery" className="max-w-[1240px] m-auto">
      <h1 className="text-2xl text-center font-bold p-4"> Gallery</h1>
      <div className="relative flex">
        {slides.map((slide, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-[0] ease-in duration-1000"
              }
            >
              <FaArrowAltCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[20px] text-white/70 cursor-pointer select-all"
                size={50}
              ></FaArrowAltCircleLeft>

              {/* <FaArrowAltCircleLeft
                className="absolute top-[50%] left-[30px] text-black cursor-pointer select-none z-[-2] "
                size="50"
              ></FaArrowAltCircleLeft> */}
              {index === currentSlide && (
                <Image
                  src={`${slide.image}`}
                  width="1440"
                  height="600"
                  alt="/"
                />
              )}
              {/* // objectFit="cover" deprecated */}

              <FaArrowAltCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[20px] text-white/70 cursor-pointer select-all"
                size={50}
              ></FaArrowAltCircleRight>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default Slider;
