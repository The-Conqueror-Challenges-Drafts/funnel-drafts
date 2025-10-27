'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { initiateCheckout } from '@/hooks/useCheckout';

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
              className="mb-4 cursor-pointer rounded-lg py-6 inline-flex items-center w-full justify-center border-2 text-lg md:text-xl border-primary font-semibold px-8 transition-all duration-300"
              onClick={() => {
                const formSection = document.getElementById('get-started');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <p>
                {buttonText}
              </p>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaCdco;
