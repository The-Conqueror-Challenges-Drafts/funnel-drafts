'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface MultiHeroProps {
  title: string;
  intro: string;
  mainText: string;
  image: string;
  imageAlt: string;
}

const MultiHero: React.FC<MultiHeroProps> = ({
  title,
  intro,
  mainText,
  image,
  imageAlt
}) => {
  return (
    <section className="bg-background py-12 md:py-20 font-sans overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {title}
            </motion.h1>

            <motion.div 
              className='flex gap-2 items-center'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                <Avatar>
                  <AvatarImage src="https://randomuser.me/api/portraits/women/75.jpg" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="@maxleiter"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/women/41.jpg"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="font-semibold text-xs text-primary">1Mil+</AvatarFallback>
                </Avatar>
              </div>
              <p className='text-primary text-sm md:text-lg font-medium'>
                Already Achieved Their fitness goal
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4 text-md md:text-lg text-muted-foreground leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p>{intro}</p>
              <p>{mainText}</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div 
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiHero;

