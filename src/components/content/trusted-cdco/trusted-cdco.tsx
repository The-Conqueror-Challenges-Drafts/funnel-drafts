'use client';

import React from 'react';
import Image from 'next/image';

interface TrustedCdcoProps {
  trustLogos: string[];
  trustTitle: string;
}

const TrustedCdco: React.FC<TrustedCdcoProps> = ({
  trustLogos,
  trustTitle
}) => {
  return (
    <>
      {/* Proof Section */}
      <section className="bg-muted py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary text-center mb-2 md:mb-4">
            {trustTitle}
          </h2>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center">
            {trustLogos.map((logo, index) => (
              <div key={index} className={`flex justify-center items-center ${index >= 2 ? 'hidden md:flex' : ''}`}>
                <div className="relative w-40 h-20 md:w-48 md:h-24 lg:w-56 lg:h-28">
                  <Image
                    src={logo}
                    alt={`Trust badge ${index + 1}`}
                    fill
                    className="object-contain opacity-80 grayscale transition-all duration-300 rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedCdco;
