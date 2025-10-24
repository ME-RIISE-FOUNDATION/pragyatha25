import React, { useEffect, useState } from "react";

const EventStats = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("November 28, 2025 16:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 text-center">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {[
          { value: "500+", label: "Participants" },
          { value: "5+", label: "Events" },
          { value: "3", label: "Days" },
          { value: "10+", label: "Colleges" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-center transition-all duration-300 hover:bg-white/10"
          >
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{item.value}</div>
            <div className="text-gray-300 uppercase tracking-wider text-xs sm:text-sm">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Countdown Timer */}
      <div className="mt-8">
        <h2 className="text-lg sm:text-xl text-gray-300 mb-3 uppercase tracking-wider">
          Event Starts In
        </h2>
        <div className="flex justify-center gap-4 sm:gap-8 text-cyan-400 font-bold text-2xl sm:text-3xl">
          <div className="flex flex-col items-center">
            <span>{timeLeft.days}</span>
            <span className="text-xs sm:text-sm text-gray-400">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.hours}</span>
            <span className="text-xs sm:text-sm text-gray-400">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.minutes}</span>
            <span className="text-xs sm:text-sm text-gray-400">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.seconds}</span>
            <span className="text-xs sm:text-sm text-gray-400">Seconds</span>
          </div>
        </div>
        <p className="mt-4 text-gray-400 text-sm">
          Starting on <span className="text-cyan-400 font-semibold">November 28, 2025 – 4 PM</span>
        </p>
      </div>
    </div>
  );
};

export default EventStats;
