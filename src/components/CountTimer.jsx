import React, { useEffect, useState } from "react";

const CountTimer = () => {
  const THREE_DAYS_IN_SECONDS = 3 * 24 * 60 * 60;

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const savedEndTime = localStorage.getItem("threeDayTimerEnd");

    let endTime;
    if (savedEndTime) {
      endTime = new Date(savedEndTime);
    } else {
      endTime = new Date(Date.now() + THREE_DAYS_IN_SECONDS * 1000);
      localStorage.setItem("threeDayTimerEnd", endTime.toISOString());
    }

    const updateTimeLeft = () => {
      const now = new Date();
      const diff = Math.floor((endTime - now) / 1000);
      setTimeLeft(diff > 0 ? diff : 0);
    };

    updateTimeLeft();
    const interval = setInterval(() => {
      updateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const d = Math.floor(timeLeft / (3600 * 24));
  const h = Math.floor((timeLeft % (3600 * 24)) / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return (
    <div className="p-4">
      {timeLeft > 0 ? (
        <div className="flex items-center gap-6">
          <div>
            <p className="font-medium text-xs leading-[18px] tracking-[0%] font-poppins">
              Days
            </p>
            <h2 className="font-bold text-[32px] leading-[30px] font-inter tracking-[4%]">
              {String(d).padStart(2, "0")}
            </h2>
          </div>
          <div className="mt-3">
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#E07575" />
              <circle cx="2" cy="14" r="2" fill="#E07575" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-xs leading-[18px] tracking-[0%] font-poppins">
              Hours{" "}
            </p>
            <h2 className="font-bold text-[32px] leading-[30px] font-inter  tracking-[4%]">
              {String(h).padStart(2, "0")}
            </h2>
          </div>
          <div className="mt-3">
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#E07575" />
              <circle cx="2" cy="14" r="2" fill="#E07575" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-xs leading-[18px] tracking-[0%] font-poppins">
              Minutes
            </p>
            <h2 className="font-bold text-[32px] leading-[30px] font-inter  tracking-[4%]">
              {String(m).padStart(2, "0")}
            </h2>
          </div>
          <div className="mt-3">
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#E07575" />
              <circle cx="2" cy="14" r="2" fill="#E07575" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-xs leading-[18px] tracking-[0%] font-poppins">
              Seconds
            </p>
            <h2 className="font-bold text-[32px] leading-[30px] font-inter  tracking-[4%]">
              {String(s).padStart(2, "0")}
            </h2>
          </div>
        </div>
      ) : (
        <h2 className="text-xl font-semibold text-red-600">
          Time is up! Please take action.
        </h2>
      )}
    </div>
  );
};

export default CountTimer;
