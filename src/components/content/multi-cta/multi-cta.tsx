'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface MultiCtaProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

const MultiCta: React.FC<MultiCtaProps> = ({
  title,
  description,
  buttonText,
  buttonUrl
}) => {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            {title}
          </h2>
          <p className="text-md md:text-lg text-primary-foreground/80 text-pretty font-medium">
            {description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 h-auto mt-4 cursor-pointer"
          >
            <a href={buttonUrl}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MultiCta;

