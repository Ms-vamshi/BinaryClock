
import React, { useState, useEffect } from 'react';
import BinaryDigit from './BinaryDigit';

const BinaryClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: Date) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = Math.floor(time.getMilliseconds() / 100);
    const ampm = hours >= 12 ? 'pm' : 'am';
    const displayHours = hours % 12 || 12;

    return {
      hours: displayHours,
      minutes,
      seconds,
      milliseconds,
      ampm,
      digitalTime: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}.${String(Math.floor(time.getMilliseconds() / 10)).padStart(2, '0')}`
    };
  };

  const { hours, minutes, seconds, milliseconds, ampm, digitalTime } = formatTime(time);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="relative z-10 text-center">
        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl font-mono mb-16 tracking-wider">
          Binary Clock
        </h1>

        {/* Binary Time Display */}
        <div className="mb-12">
          {/* Hours and AM/PM */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="flex gap-4">
              <BinaryDigit value={Math.floor(hours / 10)} />
              <BinaryDigit value={hours % 10} />
            </div>
            <span className="text-red-500 text-2xl font-mono">{ampm}</span>
          </div>

          {/* Minutes and Seconds */}
          <div className="flex items-center justify-center gap-8">
            <div className="flex gap-4">
              <BinaryDigit value={Math.floor(minutes / 10)} />
              <BinaryDigit value={minutes % 10} />
            </div>
            <div className="flex gap-4">
              <BinaryDigit value={Math.floor(seconds / 10)} />
              <BinaryDigit value={seconds % 10} />
            </div>
            <div className="flex gap-4">
              <BinaryDigit value={Math.floor(milliseconds / 10)} />
              <BinaryDigit value={milliseconds % 10} />
            </div>
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

        {/* Binary explanation */}
        <div className="mt-12 text-gray-500 text-sm font-mono max-w-md">
          <p className="mb-2">Binary representation of current time</p>
          <p>Red digits = 1, Gray digits = 0</p>
        </div>
      </div>
    </div>
  );
};

export default BinaryClock;
