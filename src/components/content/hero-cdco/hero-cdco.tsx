'use client';

import React from 'react';
import Image from 'next/image';
import { ChartSpline, Play, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TimerCountUp from './hero-timer';

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
              <div className='flex flex-col items-center gap-2'>
                <div className='flex flex-wrap gap-2 w-full justify-center md:justify-start'>
                  <Badge className="text-lg" variant="secondary-foreground">
                    {badge}
                  </Badge>

                  <div className='flex flex-wrap gap-4 justify-center'>
                    <div className='text-secondary text-md flex gap-1 items-center'><Timer size="1.2em"/> Limited time <TimerCountUp/> </div>
                  </div>
                </div>

                <h1 className="text-xl md:text-3xl font-semibold text-foreground mb-2 md:leading-10">
                  {title}
                </h1>
              </div>

              <div className="space-y-2 mb-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-start">
                    <div className="shrink-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center mr-4">
                      <Play className="w-2 h-2 text-primary-foreground fill-current" />
                    </div>
                    <span className="text-md md:text-2xl font-medium text-foreground text-left">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="flex flex-col items-center text-center lg:text-left gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full cursor-pointer font-bold px-8 py-6 text-xl mb-4 md:mb-0 rounded-lg transition-all duration-300"
                  onClick={() => {
                    const formSection = document.getElementById('get-started');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <p>{buttonText}</p>
                </Button>
                <div className="flex items-center flex-wrap justify-center gap-x-2 text-md font-medium md:text-lg text-primary mb-3 leading-relaxed">
                  <p>
                   {subtitle}
                  </p>
                  <div className='text-destructive animate-pulse text-md flex gap-2 items-center'>
                    <ChartSpline size="1.2em"/> Low Stock Alert
                  </div>
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
