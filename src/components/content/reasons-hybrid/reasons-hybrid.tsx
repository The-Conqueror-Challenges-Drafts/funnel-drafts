'use client';

import React from 'react';
import Image from 'next/image';

interface ReasonsItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ReasonsHybridProps {
  title: string;
  items: ReasonsItem[];
}

const ReasonsHybrid: React.FC<ReasonsHybridProps> = ({ title, items }) => {
  return (
    <>
      {/* The 5 Things Section */}
      <section className="py-2 my-4 pb-6 md:pt-6 md:pb-12 bg-muted">
        <div className="container">
          <h2 className="text-xl font-semibold text-primary text-center mb-2.5 mt-2 sm:text-3xl sm:mb-8 lg:text-4xl">{title}</h2>

          <div className="space-y-6 sm:space-y-8">
            {items.map((item) => (
              <div key={item.id} className="grid items-center gap-4 sm:gap-10 lg:grid-cols-2">
                <div>
                  <Image
                    src={item.image}
                    alt={`Illustration for point ${item.id}`}
                    width={800}
                    height={600}
                    className="w-full aspect-video shadow-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary text-balance mb-1 sm:text-2xl sm:mb-4">{item.id}. {item.title}</h3>
                  <p className="text-base text-foreground leading-relaxed sm:text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReasonsHybrid;
