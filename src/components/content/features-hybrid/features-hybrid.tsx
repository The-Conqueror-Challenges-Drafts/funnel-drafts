'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

interface FeaturesHybridProps {
  title: string;
  items: string[];
  image: string;
  trustLogos: string[];
  trustTitle: string;
}

const FeaturesHybrid: React.FC<FeaturesHybridProps> = ({
  title,
  items,
  image,
  trustLogos,
  trustTitle
}) => {
  return (
    <>
      {/* What You Get Section */}
      <section className="pt-5 lg:pt-6 bg-muted">
        <div className="container">
          <h2 className="text-xl font-semibold text-primary text-center mb-3 sm:text-3xl sm:mb-8 lg:text-4xl">
            {title}
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="space-y-4 sm:space-y-5">
                {items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src={image}
                alt="Woman doing She Moves online workout with laptop showing app experience"
                width={800}
                height={600}
                className="w-full shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
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
      </section>
    </>
  );
};

export default FeaturesHybrid;
