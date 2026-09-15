"use client";

import { useEffect, useState } from "react";

const targetDate = new Date("2026-09-30T23:59:59").getTime();
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (100 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTime();
    const intervel = setInterval(calculateTime, 1000);
    return () => clearInterval(intervel);
  }, []);

  if (!isMounted) return null;

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "hours", value: timeLeft.hours },
    { label: "mins", value: timeLeft.minutes },
    { label: "secs", value: timeLeft.seconds },
  ];
  return (
    <div className="flex gap-1 md:gap-2">
      {timerItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center w-12 h-12 bg-white text-primary text-center rounded-[3px]"
        >
          <span className="text-xs  font-bold tracking-tight text-primary font-mono">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm font-medium text-gray-400 mt-1 capitalize">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
