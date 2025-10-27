'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { CurrencyDisplay } from '@/components/ui/conq/currency';
import Link from 'next/link';

interface InvitationHybridProps {
  title: string;
  description: string[];
  offer: {
    price: string;
    priceValue: number;
    originalPrice: string;
    originalPriceValue: number;
    duration: string;
    disclaimer: string;
    features: string[];
    buttonText: string;
  };
  socialProof: string;
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

const InvitationHybrid: React.FC<InvitationHybridProps> = ({
  title,
  description,
  offer,
  socialProof
}) => {
  return (
    <>
      {/* Final CTA Section */}
      <section id="invitation" className="py-4 lg:py-6 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-3 text-balance">{title}</h2>
          <div className="text-lg mb-6 leading-relaxed max-w-3xl mx-auto px-4 md:px-6 lg:px-8 space-y-1.5">
            {description.map((paragraph, index) => (
              <p key={index}>
                {parseTextWithBold(paragraph)}
              </p>
            ))}
          </div>

          <Link href="https://joinshemoves.com/join" target="_blank" rel="noopener noreferrer">
            <div className="bg-card/10 border-2 border-primary-foreground/30 p-6 pt-8 mb-4 max-w-2xl mx-auto relative cursor-pointer">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-foreground text-primary px-2.5 py-1 rounded-full text-sm font-bold">
                SPECIAL OFFER
              </div>
              <div className="text-center mb-3">
                <div className="text-5xl font-bold mb-2">
                  <CurrencyDisplay amount={offer.priceValue} className="text-5xl font-bold" />
                </div>
                <div className="text-lg font-semibold text-primary-foreground/90">
                  {offer.duration} <span className="line-through text-primary-foreground/60">
                    (<CurrencyDisplay amount={offer.originalPriceValue} />)
                  </span>
                </div>
                <div className="text-md text-primary-foreground/75">{offer.disclaimer}</div>
              </div>

              <div className="space-y-4 text-left mb-6">
                {offer.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <p className="text-base">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button size="lg" className="w-full font-bold px-8 py-4 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300">
                  {offer.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Link>

          <p className="text-lg">{socialProof}</p>
        </div>
      </section>
    </>
  );
};

export default InvitationHybrid;
