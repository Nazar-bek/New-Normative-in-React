import React, { useEffect, useState } from "react";
import { slides } from "../services/slideData";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrent(index);
  return (
    <div className="w-[892px] h-[344px] relative bg-black overflow-hidden">
      <div
        className=" flex transition duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            className="w-[892px] pl-16 flex-shrink-0   flex gap-[60px] items-center"
            key={slide.id}
          >
            <div className="text-white flex flex-col gap-6 w-1/2">
              <div className="flex items-center gap-6">
                <img
                  src={slide.brand}
                  alt={slide.serie}
                  className="w-[50px] h-[49px]"
                />
                <h2 className="font-normal text-base leading-6 tracking-[0%] text-center font-poppins">
                  {slide.serie}
                </h2>
              </div>
              <p className="font-semibold font-inter text-5xl leading-[60px] tracking-[4%]">
                {slide.discount}
              </p>
              <div className="group flex gap-2 items-center">
                <p className="font-medium text-base cursor-pointer leading-6 tracking-[0%] text-center group-hover:border-b group-hover">
                  Shop Now
                </p>
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8H18M18 8L11 1M18 8L11 15"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <img
                src={slide.img}
                alt={slide.serie}
                className="w-[700px] h-[352px]   "
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 ">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`cursor-pointer w-3 h-3 rounded-full transition-colors duration-300 ${
              current === index ? "bg-white scale-110" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
