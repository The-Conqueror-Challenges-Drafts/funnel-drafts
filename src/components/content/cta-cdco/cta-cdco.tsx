'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface CtaCdcoProps {
  title: string;
  buttonText: string;
  buttonUrl: string;
}

const CtaCdco: React.FC<CtaCdcoProps> = ({
  title,
  buttonText,
  buttonUrl
}) => {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-muted py-6 md:py-12">
        <div className="px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-6 text-2xl sm:text-4xl tracking-tight font-semibold text-primary">
              {title}
            </h2>
            
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="mb-4 rounded-lg py-6 inline-flex items-center justify-center border-2 text-lg md:text-xl border-primary text-primary font-semibold px-8 transition-all duration-300"
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
