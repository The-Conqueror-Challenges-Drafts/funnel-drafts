'use client';

import React from 'react';
import Image from 'next/image';

interface HeaderCdcoProps {
  logo: string;
  alt: string;
}

const HeaderCdco: React.FC<HeaderCdcoProps> = ({
  logo,
  alt
}) => {
  return (
    <>
      {/* Header/Navigation */}
      <header className="bg-background/95 md:mt-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-center">
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              alt={alt}
              width={200}
              height={40}
              className="h-6 md:h-10 w-auto"
              priority
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderCdco;
