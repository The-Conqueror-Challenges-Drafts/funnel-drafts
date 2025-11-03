'use client';

import React from 'react';
import { CheckCircle, Award, Smartphone, Calendar, MapPin } from 'lucide-react';

interface ReasonsCdcoProps {
  title: string;
  subtitle: string;
  features: Array<{
    title: string;
    description: string;
  }>;
}

const ReasonsCdco: React.FC<ReasonsCdcoProps> = ({
  title,
  features
}) => {
  return (
    <>
      {/* Reason 1 Section */}
      <section className="bg-background">
        <div className="px-4 mx-auto max-w-screen-xl py-4 md:py-8 md:px-6">
          <div className="max-w-screen-sm mb-8 lg:mb-10 flex flex-col gap-2">
            <h2 className="mb-4 text-lg sm:text-2xl tracking-tight font-semibold text-black">
              {title}
            </h2>
          </div>
          <div className="space-y-8 -mt-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 xl:gap-12 md:space-y-0">
            {features.map((feature, index) => {
              const icons = [Award, Smartphone, Calendar, MapPin];
              const IconComponent = icons[index] || CheckCircle;
              return (
                <div key={index} className="group flex items-center space-x-4 cursor-default transition-all duration-300">
                  <div className="flex justify-center items-center w-10 h-10 bg-muted rounded-lg lg:h-16 lg:w-16 flex-shrink-0 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-primary lg:w-8 lg:h-8 transition-all duration-300" />
                  </div>
                  <div className="text-left">
                    <p className="leading-tight font-medium text-sm md:text-md text-foreground transition-colors duration-300">
                      <b>{feature.title}</b>. {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReasonsCdco;
