"use client"
import { useState } from 'react';

const Tooltip = ({ text, children }: any) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative flex flex-col-reverse justify-end items-center">
      <span
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </span>
      {showTooltip && (
        <div className="duration-300 absolute right-12 text-nowrap z-10 px-2 py-1 capitalize text-white bg-gray-800 rounded shadow text-lg">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
