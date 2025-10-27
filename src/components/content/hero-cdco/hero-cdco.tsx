'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroCdcoProps {
  badge: string;
  title: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  buttonUrl: string;
  image: string;
  imageAlt: string;
}

const HeroCdco: React.FC<HeroCdcoProps> = ({
  badge,
  title,
  subtitle,
  features,
  buttonText,
  buttonUrl,
  image,
  imageAlt
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background flex items-center font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Right side - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={1200}
                  height={1600}
                  priority
                  className="w-full mb-6 mt-2 max-w-md lg:max-w-lg xl:max-w-xl h-72 lg:h-[460px] object-contain rounded-lg"
                />
              </div>
            </div>
            
            {/* Left side - Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <p className="text-primary font-semibold text-lg md:text-2xl mb-1 -mt-3 md:mt-0">
                {badge}
              </p>
              
              <h1 className="text-xl md:text-3xl font-semibold text-foreground mb-2 md:leading-10">
                {title}
              </h1>
              
              <p className="text-lg font-medium md:text-2xl text-primary mb-3 leading-relaxed">
                 {subtitle}
              </p>
              
              <div className="space-y-2 mb-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-start">
                    <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center mr-4">
                      <Play className="w-2 h-2 text-primary-foreground fill-current" />
                    </div>
                    <span className="text-md md:text-2xl font-medium text-foreground text-left">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Section */}
              <div className="text-center lg:text-left space-y-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full font-bold px-8 py-6 text-xl mb-4 md:mb-0 rounded-lg transition-all duration-300"
                >
                  <a 
                    href={buttonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {buttonText}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCdco;
