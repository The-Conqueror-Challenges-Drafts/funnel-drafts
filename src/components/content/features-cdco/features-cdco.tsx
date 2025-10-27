'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle, Heart, Star } from 'lucide-react';

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
  imageAlt
}) => {
  return (
    <>
      {/* Features Section */}
      <section className="bg-background py-6 md:-mt-26 md:py-12">
        <div className="gap-8 items-center sm:py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 lg:px-6">
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={1600}
            className="mb-4 w-full hidden lg:block lg:h-160 lg:mb-0 rounded-md object-cover object-center"
          />
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={1600}
            className="mb-4 w-full h-80 lg:hidden lg:mb-0 rounded-md object-cover object-center"
          />
          
          <div className="text-muted-foreground sm:text-lg flex flex-col pt-4 md:pt-12 justify-center">
            <h2 className="mb-6 text-2xl sm:text-4xl tracking-tight font-semibold text-primary">
              {title}
            </h2>
            
            <p className="mb-4 md:mb-16 max-w-3xl text-md md:text-lg text-foreground font-medium leading-relaxed">
              {description}
            </p>
            
            <div className="py-8 mb-6 -mt-8 border-t border-border hidden lg:block">
              <div className="flex items-center">
                <div className="flex justify-center items-center mr-4 w-8 h-8 bg-muted rounded-full shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary">
                    Safe routines tailored for new mums
                  </h3>
                </div>
              </div>
              
              <div className="flex items-center pt-4">
                <div className="flex justify-center items-center mr-4 w-8 h-8 bg-muted rounded-full shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary">
                    Strength, Pilates, HIIT & mobility (all under 30 mins)
                  </h3>
                </div>
              </div>
              
              <div className="flex items-center pt-4">
                <div className="flex justify-center items-center mr-4 w-8 h-8 bg-muted rounded-full shrink-0">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary">
                    No gym gear needed to get started
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesCdco;
