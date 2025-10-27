'use client';

import React from 'react';
import Image from 'next/image';

interface TransformationHybridProps {
  title: string;
  content: string[];
  image: string;
  stats: {
    number: string;
    label: string;
  };
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

const TransformationHybrid: React.FC<TransformationHybridProps> = ({
  title,
  content,
  image,
  stats
}) => {
  return (
    <>
      {/* Transformation Section */}
      <section className="lg:py-6">
        <div className="container">
          <div className="grid items-center sm:gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-primary mb-2 mt-1 sm:text-3xl sm:mb-6 lg:text-3xl">{title}</h2>
              
              <div className="text-base text-foreground mb-6 space-y-3 sm:text-lg sm:mb-8 sm:space-y-4">
                {content.map((paragraph, index) => (
                  <p key={index}>
                    {parseTextWithBold(paragraph)}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src={image}
                alt="Confident woman sitting relaxed after workout showing transformation"
                width={1200}
                height={800}
                className="w-full shadow-2xl lg:h-[420px] object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />

              <div className="absolute top-4 right-4 bg-background p-2 shadow-lg sm:top-6 sm:right-6 sm:p-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary sm:text-2xl">{stats.number}</div>
                  <div className="text-xs font-medium text-muted-foreground sm:text-sm">{stats.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransformationHybrid;
