'use client';

import React from 'react';

interface HeaderHybridProps {
  text: string;
}

const HeaderHybrid: React.FC<HeaderHybridProps> = ({ text }) => {
  return (
    <header 
      className="bg-primary text-primary-foreground py-2 px-4 cursor-pointer"
      onClick={() => document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-md md:text-lg font-semibold">{text}</p>
      </div>
    </header>
  );
};

export default HeaderHybrid;
