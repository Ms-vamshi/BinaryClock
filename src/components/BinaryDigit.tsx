
import React from 'react';

interface BinaryDigitProps {
  value: number;
  isMinute?: boolean;
}

const BinaryDigit = ({ value, isMinute = false }: BinaryDigitProps) => {
  // For hours: 8, 4, 2, 1 (4 bits)
  // For minutes: 32, 16, 8, 4, 2, 1 (6 bits)
  const bitValues = isMinute ? [32, 16, 8, 4, 2, 1] : [8, 4, 2, 1];
  
  return (
    <div className="flex gap-4">
      {bitValues.map((bitValue, index) => {
        const isActive = (value & bitValue) !== 0;
        return (
          <div
            key={index}
            className={`
              text-6xl md:text-7xl font-mono font-bold
              transition-all duration-300
              ${isActive 
                ? 'text-red-500' 
                : 'text-gray-700'
              }
            `}
          >
            {bitValue}
          </div>
        );
      })}
    </div>
  );
};

export default BinaryDigit;
