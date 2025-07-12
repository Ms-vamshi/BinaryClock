
import React, { useState, useEffect } from 'react';
import BinaryDigit from './BinaryDigit';

const BinaryClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: Date) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();

    return {
      hours,
      minutes,
      digitalTime: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    };
  };

  const { hours, minutes, digitalTime } = formatTime(time);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="text-center">
        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl font-mono mb-16 tracking-wider">
          Binary Clock
        </h1>

        {/* Binary Time Display */}
        <div className="mb-12 space-y-8">
          {/* Hours */}
          <div className="flex justify-center gap-8">
            <BinaryDigit value={Math.floor(hours / 10)} />
            <BinaryDigit value={hours % 10} />
          </div>

          {/* Minutes */}
          <div className="flex justify-center gap-8">
            <BinaryDigit value={Math.floor(minutes / 10)} />
            <BinaryDigit value={minutes % 10} />
          </div>
        </div>

        {/* What's time now label */}
        <p className="text-gray-400 text-lg font-mono mb-6 tracking-wide">
          What's time now
        </p>

        {/* Digital time display */}
        <div className="bg-red-500 px-8 py-4 rounded-lg">
          <span className="text-white text-3xl font-mono font-bold tracking-wider">
            {digitalTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BinaryClock;
