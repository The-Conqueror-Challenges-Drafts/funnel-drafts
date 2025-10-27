'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface HeroCdcoProps {
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const HeroCdco: React.FC<HeroCdcoProps> = ({
  badge,
  title,
  image,
  imageAlt
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background md:py-12 flex -mt-10 items-center font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-12">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Left side - Image */}
            <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={1200}
                  height={1600}
                  priority
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-60 md:h-96 lg:h-[580px] object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <p className="text-primary font-semibold text-lg md:text-2xl -mt-1 mb-3 md:mb-4">
                {badge}
              </p>
              
              <h1 className="text-xl md:text-3xl font-bold text-foreground/80 mb-4">
                {title}
              </h1>
              
              <p className="text-md font-semibold md:text-xl text-primary mb-4 leading-relaxed">
                Start our complete, physio-approved program today for just $1 (usually <span className="line-through">$19</span>/month). Your membership includes:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-start">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Play className="w-3 h-3 md:w-3 md:h-3 text-primary-foreground fill-current" />
                  </div>
                  <span className="text-md md:text-lg font-medium text-foreground/80 text-left">100+ physio-approved workouts (30mins to 10mins build for nap-time)</span>
                </div>
                
                <div className="flex items-center justify-start">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Play className="w-3 h-3 md:w-3 md:h-3 text-primary-foreground fill-current" />
                  </div>
                  <span className="text-md md:text-lg font-medium text-foreground/80 text-left">Support for prolapse, abdominal separation & post-cesarean</span>
                </div>
                
                <div className="flex items-center justify-start">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Play className="w-3 h-3 md:w-3 md:h-3 text-primary-foreground fill-current" />
                  </div>
                  <span className="text-md md:text-lg font-medium text-foreground/80 text-left">Rehab-focused core & pelvic floor sessions</span>
                </div>
                
                <div className="flex items-center justify-start">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Play className="w-3 h-3 md:w-3 md:h-3 text-primary-foreground fill-current" />
                  </div>
                  <span className="text-md md:text-lg font-medium text-foreground/80 text-left">Access to our private community of 5,000+ mums</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCdco;
