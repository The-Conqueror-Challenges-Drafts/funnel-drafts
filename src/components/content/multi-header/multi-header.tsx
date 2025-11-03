'use client';

import React from 'react';
import Image from 'next/image';

interface MultiHeaderProps {
  logo: string;
  alt: string;
}

const MultiHeader: React.FC<MultiHeaderProps> = ({
  logo,
  alt
}) => {
  return (
    <header className="bg-black">
      <div className="container flex items-center justify-center">
        <div className="flex py-1 items-center justify-center">
          <Image
            src={logo}
            alt={alt}
            width={200}
            height={40}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </div>
      </div>
    </header>
  );
};

export default MultiHeader;

