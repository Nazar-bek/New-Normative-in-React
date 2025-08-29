import React, { useEffect, useState } from "react";
import banner from "../assets/bannern.png";
const BannerJbl = () => {
  const START_TIME = 6 * 24 * 60 * 60; 

  const [timeLeft, setTimeLeft] = useState(START_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return START_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const days = String(Math.floor(seconds / (3600 * 24))).padStart(2, "0");
    const hours = String(Math.floor((seconds % (3600 * 24)) / 3600)).padStart(
      2,
      "0"
    );
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return { days, hours, minutes, secs };
  };

  const { hours, minutes, secs, days } = formatTime(timeLeft);
  return (
    <div className="h-[500px] bg-black mt-[140px] text-white flex gap-7">
      <div className="mt-[69px] ml-[56px] w-[443px]">
        <p className="font-semibold text-base leading-5 tracking-[0%] text-[#00FF66] font-poppins">
          Categories
        </p>
        <h2 className="mt-8 font-semibold text-5xl leading-[60px] tracking-[4%] font-inter">
          Enhance Your Music Experience
        </h2>
        <div className="mt-8 flex gap-6">
          <div className="w-[62px] h-[62px] flex flex-col items-center  rounded-full text-black bg-white pt-3">
            <p className="font-semibold text-base leading-5 tracking-[0%] font-poppins">
              {days}
            </p>
            <p className="font-normal text-[11px] leading-[18px] tracking-[0%] font-poppins">
              Days
            </p>
          </div>
          <div className="w-[62px] h-[62px] flex flex-col items-center  rounded-full text-black bg-white pt-3">
            <p className="font-semibold text-base leading-5 tracking-[0%] font-poppins">
              {hours}
            </p>
            <p className="font-normal text-[11px] leading-[18px] tracking-[0%] font-poppins">
              hours
            </p>
          </div>
          <div className="w-[62px] h-[62px] flex flex-col items-center  rounded-full text-black bg-white pt-3">
            <p className="font-semibold text-base leading-5 tracking-[0%] font-poppins">
              {minutes}
            </p>
            <p className="font-normal text-[11px] leading-[18px] tracking-[0%] font-poppins">
              Minutes
            </p>
          </div>
          <div className="w-[62px] h-[62px] flex flex-col items-center  rounded-full text-black bg-white pt-3">
            <p className="font-semibold text-base leading-5 tracking-[0%] font-poppins">
              {secs}
            </p>
            <p className="font-normal text-[11px] leading-[18px] tracking-[0%] font-poppins">
              seconds
            </p>
          </div>
        </div>
        <button className="mt-10 w-[170px] bg-[#00FF66] py-4 rounded font-medium text-base leading-6 tracking-[0%] font-poppins">
          Buy Now!
        </button>
      </div>
      <div className="mt-17 ">
        <img src={banner} className="banner_main" alt="Jbl" />
      </div>
    </div>
  );
};

export default BannerJbl;
