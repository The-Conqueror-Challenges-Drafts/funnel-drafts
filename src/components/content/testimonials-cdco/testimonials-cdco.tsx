'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Lock, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  quote: string;
  author: string;
  image: string;
  rating: number;
}

interface TrustIndicator {
  icon: string;
  text: string;
}

interface TestimonialsCdcoProps {
  title: string;
  ctaTitle: string;
  buttonText: string;
  buttonUrl: string;
  trustIndicators: TrustIndicator[];
  testimonials: Testimonial[];
}

const TestimonialsCdco: React.FC<TestimonialsCdcoProps> = ({
  ctaTitle,
  buttonText,
  buttonUrl,
  trustIndicators,
  testimonials
}) => {
  return (
    <>
      {/* Reason 2 Section - Testimonials & Form */}
      <section className="bg-muted" id="get-started">
        <div className="max-w-7xl px-4 sm:px-6 py-12 md:py-16 md:pb-20 md:mb-24 mx-auto">
          {/* Two Column Layout */}
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start min-w-0">
            {/* Left Column: Testimonials */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 min-w-0">
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <figure key={index} className="p-5 sm:p-6 bg-background shadow-lg rounded-lg">
                    <blockquote className="text-sm text-muted-foreground">
                      <p className="mb-4 text-foreground leading-relaxed text-md md:text-lg break-words">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={128}
                        height={128}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold ml-1 text-foreground">{testimonial.author}</div>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Right Column: Form Container */}
            <div className="w-full order-1 lg:order-2 min-w-0">
              <div className="w-full lg:sticky lg:top-8">
                <div className="bg-background p-4 py-6 sm:p-6 sm:py-8 md:p-8 md:py-10 lg:p-12 border border-border shadow-lg rounded-lg overflow-visible">
                  <div className="workout-form-wrapper">
                    {/* CTA Section */}
                    <div className="text-center space-y-6">
                      <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                        {ctaTitle}
                      </h3>
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

                    {/* Trust Indicators */}
                    <div className="pt-6 mt-8 border-t border-border">
                      <div className="flex justify-center mt-2 items-center opacity-60 gap-4 sm:gap-6 lg:gap-8 text-sm text-muted-foreground">
                        {trustIndicators.map((indicator, index) => {
                          const icons = { Lock, Shield, Users };
                          const IconComponent = icons[indicator.icon as keyof typeof icons] || Lock;
                          return (
                            <div key={index} className="flex flex-col items-center space-y-2 min-w-0 flex-1 max-w-[120px] group cursor-default transition-all duration-300 hover:opacity-100">
                              <IconComponent className="w-6 h-6 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                              <span className="text-center text-xs sm:text-sm leading-tight transition-colors duration-300 group-hover:text-foreground">{indicator.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
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

export default TestimonialsCdco;
