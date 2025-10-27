'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import { CurrencyDisplay } from '@/components/ui/conq/currency';

interface ClosingHybridProps {
  image: string;
  content: string[];
  buttonText: string;
  signature: string;
}

// Utility function to parse text with bold markers
const parseTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const ClosingHybrid: React.FC<ClosingHybridProps> = ({
  image,
  content,
  signature
}) => {
  return (
    <>
      {/* Closing */}
      <section className="py-6 md:py-8">
        <div className="container max-w-2xl text-center">
          <div className="mb-6">
            <div className="relative mx-auto w-fit">
              {/* Photo Frame */}
              <div className="relative p-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Inner frame shadow */}
                <div className="absolute inset-3 bg-gradient-to-br from-primary/30 to-primary/40 rounded-sm opacity-50"></div>
                {/* Photo */}
                <div className="relative bg-white p-2 rounded-sm shadow-inner">
                  <Image
                    src={image}
                    alt="Ren and Jen, She Moves co-founders"
                    width={600}
                    height={400}
                    className="w-80 h-48 object-cover rounded-sm"
                    sizes="320px"
                  />
                </div>
                {/* Frame highlight */}
                <div className="absolute top-2 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
              </div>
              {/* Frame shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-lg blur-md transform translate-y-2 -z-10"></div>
            </div>
          </div>

          <div className="text-base text-foreground leading-relaxed max-w-sm mx-auto mb-4 space-y-1">
            {content.map((paragraph, index) => (
              <p key={index}>
                {parseTextWithBold(paragraph)}
              </p>
            ))}
          </div>

          <Button 
            size="lg" 
            className="w-full sm:w-auto font-bold px-8 py-6 text-md transition-all duration-300 mb-3"
            onClick={() => document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join She Moves Today for Just <CurrencyDisplay amount={1} showLoading={false} />
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex items-center justify-center space-x-2 text-primary">
            <Heart className="h-5 w-5 fill-current" />
            <p className="text-md font-medium"><strong>{signature}</strong></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClosingHybrid;
