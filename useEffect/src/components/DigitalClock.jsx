import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridian}`;
  };

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };
  return (
    <div className="flex justify-center items-center">
      <div className="clock">
        <span className="text-[5vw] text-red-800 font-[Monospace] font-bold">
          {formatTime()}
        </span>
      </div>
    </div>
  );
};

export default DigitalClock;
