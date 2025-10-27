'use client';

import React from 'react';
import Image from 'next/image';

interface FeaturesCdcoProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const FeaturesCdco: React.FC<FeaturesCdcoProps> = ({
  title,
  description,
  image,
  imageAlt,
}) => {
  return (
    <>
      {/* Features Section */}
      <section className="bg-background md:py-4">
        <div className="gap-8 items-center sm:py-4 mt-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={1600}
            className="md:mb-4 w-full h-52 sm:h-80 lg:h-80 lg:mb-0 rounded-md object-contain object-center"
          />
          
          <div className="text-muted-foreground sm:text-lg flex flex-col pt-4 justify-center">
            <h2 className="mb-4 text-lg sm:text-3xl lg:text-2xl tracking-tight font-semibold text-foreground">
              {title}
            </h2>
            
            <div className="mb-4 max-w-3xl text-md md:text-lg text-foreground font-medium leading-relaxed">
              {description.split('\n\n').map((paragraph, index) => {
                const isLastParagraph = index === description.split('\n\n').length - 1;
                return (
                  <p key={index} className={`${index > 0 ? 'mt-4' : ''} ${isLastParagraph ? 'font-bold' : ''}`}>
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesCdco;
