import React from 'react';

interface SectionDividerProps {
  color?: string;
}

const SectionDivider = ({ color = '#FFFFFF' }: SectionDividerProps) => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="relative block w-full h-[75px]"
      >
        <path
          d="M1440,100H0V9.5C250.4,32.3,477.5,45,720,45s469.6-12.7,720-35.5V100Z"
          style={{ fill: color }}
        ></path>
      </svg>
    </div>
  );
};

export default SectionDivider;
