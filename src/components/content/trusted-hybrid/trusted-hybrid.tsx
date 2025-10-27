'use client';

import React from 'react';
import Image from 'next/image';

interface TrustedHybridProps {
  trustLogos: string[];
  trustTitle: string;
}

const TrustedHybrid: React.FC<TrustedHybridProps> = ({
  trustLogos,
  trustTitle
}) => {
  return (
    <>
      <div className="container py-4">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-primary text-center md:mt-2">
            {trustTitle}
          </h3>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:gap-12 justify-items-center">
            {trustLogos.map((logo, index) => (
              <div key={index} className={`flex justify-center items-center ${index >= 2 ? 'hidden md:flex' : ''}`}>
                <div className="relative w-40 h-20 md:w-48 md:h-24 lg:w-56 lg:h-28">
                  <Image
                    src={logo}
                    alt={`Trust badge ${index + 1}`}
                    fill
                    className="object-contain opacity-80 grayscale transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedHybrid;
