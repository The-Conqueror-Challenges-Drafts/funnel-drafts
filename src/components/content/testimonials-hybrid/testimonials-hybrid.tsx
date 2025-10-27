'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, X, Shield } from 'lucide-react';
import { CurrencyDisplay } from '@/components/ui/conq/currency';

interface TestimonialsHybridProps {
  title: string;
  images: string[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    features: string[];
  };
}

const TestimonialsHybrid: React.FC<TestimonialsHybridProps> = ({
  title,
  images,
  cta
}) => {
  return (
    <>
      {/* Social Proof Section */}
      <section className="py-6 lg:pt-4">
        <div className="container">
          <h2 className="text-lg font-semibold text-primary text-center mb-3 mt:-mt-3 sm:text-3xl sm:mb-8 lg:text-4xl">{title}</h2>

          <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-2 sm:mb-12">
            {images.map((image, index) => (
              <div key={index} className="w-full">
                <Image
                  src={image}
                  alt={`Testimonial ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-12 sm:mb-4 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-2 sm:text-2xl sm:mb-4">{cta.title}</h3>
            <p className="text-base text-muted-foreground mb-3 sm:text-lg sm:mb-6">{cta.description}</p>
            <Button 
              size="lg" 
              className="w-full sm:w-auto font-bold px-8 py-6 text-md transition-all duration-300 mb-3 sm:mb-4"
              onClick={() => document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join She Moves Today for Just <CurrencyDisplay amount={1} showLoading={false} />
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm sm:text-md text-muted-foreground flex flex-col items-center gap-1 sm:flex-row sm:gap-4 sm:justify-center">
              {cta.features.map((feature, index) => (
                <span key={index} className="flex items-center gap-1">
                  {index === 0 ? <X className="h-4 w-4" /> : <Shield className="h-4 w-4" />}
                  <strong>{feature.split(' - ')[0]}</strong> - {feature.split(' - ')[1]}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsHybrid;
