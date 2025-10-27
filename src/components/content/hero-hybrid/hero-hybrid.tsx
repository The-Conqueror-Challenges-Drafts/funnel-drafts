'use client';

import React from 'react';
import Image from 'next/image';
import { Trophy } from 'lucide-react';

interface HeroHybridProps {
  title: string;
  subtitle: string;
  authors: {
    name: string;
    description: string;
    image: string;
  };
  description: string[];
  heroImage: string;
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

const HeroHybrid: React.FC<HeroHybridProps> = ({
  title,
  subtitle,
  authors,
  description,
  heroImage
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="pb-2 pt-3 md:py-8">
        <div className="container">
          <div className="lg:grid lg:items-center lg:gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-2xl font-bold mb-1 sm:text-4xl lg:text-5xl sm:mb-4">
                {title}
              </h1>
              <p className="text-lg text-primary mb-1 sm:text-3xl sm:mb-4 flex items-center gap-2 font-semibold">
                <Trophy className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                {subtitle}
              </p>

              <div className="mb-4.5 mt-3 sm:mb-6 flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src={authors.image}
                    alt="Ren and Jen, Co-founders of She Moves"
                    width={62}
                    height={62}
                    className="w-12 h-12 rounded-full object-cover"
                    sizes="120px"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold pt-1 text-muted-foreground sm:text-base">{authors.name}</p>
                  <p className="text-sm font-medium -mt-0.5 text-muted-foreground/60 sm:text-base">{authors.description}</p>
                </div>
              </div>

              {description.map((paragraph, index) => (
                <p key={index} className="mb-4 max-w-xl text-base text-muted-foreground leading-loose sm:mb-4 sm:text-lg">
                  {parseTextWithBold(paragraph)}
                </p>
              ))}

              {/* Image on mobile - between "Hey Mumma" and "We leaked" paragraphs */}
              <div className="relative -mt-2 md:mt-3 mb-3 lg:hidden">
                <Image
                  src={heroImage}
                  alt="Ren and Jen, co-founders of She Moves, celebrating together with a high-five"
                  width={800}
                  height={450}
                  priority
                  fetchPriority="high"
                  className="shadow-2xl w-full aspect-video object-cover object-[center_42%]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                />
              </div>
            </div>

            {/* Image on desktop - original position */}
            <div className="relative hidden lg:block">
              <Image
                src={heroImage}
                alt="Ren and Jen, co-founders of She Moves, celebrating together with a high-five"
                width={800}
                height={450}
                priority
                fetchPriority="high"
                className="shadow-2xl w-full lg:h-[780px] object-cover"
                sizes="(max-width: 1024px) 50vw, 800px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHybrid;
