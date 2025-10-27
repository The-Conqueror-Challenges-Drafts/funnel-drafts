'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface CtaCdcoProps {
  badge: string;
  title: string;
  buttonText: string;
  buttonUrl: string;
}

const CtaCdco: React.FC<CtaCdcoProps> = ({
  badge,
  title,
  buttonText,
  buttonUrl
}) => {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-muted py-6 md:py-8">
        <div className="px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="mx-auto max-w-screen-md text-center">
            <div className="mb-2 text-lg md:text-2xl font-bold text-primary">
              {badge}
            </div>
            <h2 className="mb-4 text-xl sm:text-3xl tracking-tight font-semibold text-foreground">
              {title}
            </h2>
            
            <Button
              asChild
              size="lg"
              className="w-full font-bold px-8 py-6 text-xl md:mb-0 rounded-lg transition-all duration-300"
            >
              <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
                {buttonText}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaCdco;
