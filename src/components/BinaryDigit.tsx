
import React from 'react';

interface BinaryDigitProps {
  value: number;
}

const BinaryDigit = ({ value }: BinaryDigitProps) => {
  // Convert decimal to 4-bit binary
  const binaryString = value.toString(2).padStart(4, '0');
  const binaryArray = binaryString.split('').map(bit => bit === '1');

  return (
    <div className="flex flex-col gap-2">
      {binaryArray.map((isOne, index) => (
        <div
          key={index}
          className={`
            w-12 h-12 md:w-16 md:h-16 flex items-center justify-center
            text-2xl md:text-3xl font-mono font-bold rounded-lg
            transition-all duration-300 transform hover:scale-105
            ${isOne 
              ? 'text-red-500 bg-red-500/10 border border-red-500/30 shadow-lg shadow-red-500/20' 
              : 'text-gray-600 bg-gray-800/30 border border-gray-700/50'
            }
          `}
        >
          {isOne ? '1' : '0'}
        </div>
      ))}
    </div>
  );
};

export default BinaryDigit;
