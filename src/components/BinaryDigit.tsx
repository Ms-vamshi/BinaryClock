
import React from 'react';

interface BinaryDigitProps {
  value: number;
}

const BinaryDigit = ({ value }: BinaryDigitProps) => {
  // Convert decimal to 4-bit binary
  const binaryString = value.toString(2).padStart(4, '0');
  const binaryArray = binaryString.split('').map(bit => bit === '1');

  return (
    <div className="flex gap-2">
      {binaryArray.map((isOne, index) => (
        <div
          key={index}
          className={`
            w-16 h-16 md:w-20 md:h-20 flex items-center justify-center
            text-2xl md:text-3xl font-mono font-bold rounded-lg
            transition-all duration-300
            ${isOne 
              ? 'text-red-500 bg-red-500/20 border-2 border-red-500 animate-pulse' 
              : 'text-gray-500 bg-gray-900/50 border-2 border-gray-700'
            }
          `}
        >
          {8 >> index}
        </div>
      ))}
    </div>
  );
};

export default BinaryDigit;
