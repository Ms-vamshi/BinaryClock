
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
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    if (hours === 0) hours = 12;

    return {
      hours,
      minutes,
      seconds,
      ampm,
      digitalTime: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`
    };
  };

  const { hours, minutes, digitalTime, ampm } = formatTime(time);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="text-center">
        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-16 tracking-wider" style={{fontFamily: 'Courier New, monospace'}}>
          Binary Clock
        </h1>

        {/* Binary Time Display */}
        <div className="mb-12 space-y-12">
          {/* Hours with AM/PM */}
          <div className="flex items-center justify-center gap-8">
            <BinaryDigit value={hours} />
            <div className="text-red-500 text-3xl font-bold" style={{fontFamily: 'Courier New, monospace'}}>
              {ampm}
            </div>
          </div>

          {/* Minutes */}
          <div className="flex justify-center">
            <BinaryDigit value={minutes} isMinute={true} />
          </div>
        </div>

        {/* What's time now label */}
        <p className="text-gray-400 text-lg mb-6 tracking-wide" style={{fontFamily: 'Courier New, monospace'}}>
          What's time now
        </p>

        {/* Digital time display */}
        <div className="bg-red-500 px-8 py-4 rounded-lg">
          <span className="text-white text-3xl font-bold tracking-wider" style={{fontFamily: 'Courier New, monospace'}}>
            {digitalTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BinaryClock;
