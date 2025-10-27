'use client';

import React from 'react';
import { CheckCircle, GraduationCap, Briefcase } from 'lucide-react';

interface ReasonsCdcoProps {
  title: string;
  subtitle: string;
}

const ReasonsCdco: React.FC<ReasonsCdcoProps> = ({
  title,
  subtitle
}) => {
  return (
    <>
      {/* Reason 1 Section */}
      <section className="bg-background">
        <div className="pb-10 px-4 mx-auto max-w-screen-xl py-6 md:py-16 md:px-6">
          <div className="max-w-screen-sm mb-8 lg:mb-16">
            <h2 className="mb-4 text-2xl sm:text-4xl tracking-tight font-semibold text-primary">
              {title}
            </h2>
            <p className="text-lg font-medium md:text-xl text-foreground">
              {subtitle}
            </p>
          </div>
          <div className="space-y-8 -mt-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 xl:gap-12 md:space-y-0">
            <div className="group flex items-center space-x-4 cursor-default transition-all duration-300">
              <div className="flex justify-center items-center w-10 h-10 bg-muted rounded-lg lg:h-16 lg:w-16 flex-shrink-0 transition-all duration-300 group-hover:bg-primary/10 group-hover:shadow-md">
                <CheckCircle className="w-5 h-5 text-primary lg:w-8 lg:h-8 transition-all duration-300" />
              </div>
              <div className="text-left">
                <p className="leading-tight font-medium text-md md:text-lg text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
                  <b>Safe</b>. Delivered by qualified expert trainers who specialise in pre/postnatal care.
                </p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 cursor-default transition-all duration-300">
              <div className="flex justify-center items-center w-10 h-10 bg-muted rounded-lg lg:h-16 lg:w-16 flex-shrink-0 transition-all duration-300 group-hover:bg-primary/10 group-hover:shadow-md">
                <GraduationCap className="w-5 h-5 text-primary lg:w-8 lg:h-8 transition-all duration-300" />
              </div>
              <div className="text-left">
                <p className="leading-tight font-medium text-md md:text-lg text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
                  <b>Flexible</b>. Workouts as short as 5 minutes. No gym gear or clean leggings required.
                </p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 cursor-default transition-all duration-300">
              <div className="flex justify-center items-center w-10 h-10 bg-muted rounded-lg lg:h-16 lg:w-16 flex-shrink-0 transition-all duration-300 group-hover:bg-primary/10 group-hover:shadow-md">
                <Briefcase className="w-5 h-5 text-primary lg:w-8 lg:h-8 transition-all duration-300" />
              </div>
              <div className="text-left">
                <p className="leading-tight font-medium text-md md:text-lg text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
                  <b>Supportive</b>. Built for fluctuating energy and messy mum life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReasonsCdco;
