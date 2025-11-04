'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface MultiHeroProps {
  title: string;
  intro: string;
  mainText: string;
  image?: string;
  imageAlt?: string;
  video?: string;
}

const MultiHero: React.FC<MultiHeroProps> = ({
  title,
  intro,
  mainText,
  image,
  imageAlt,
  video
}) => {
  return (
    <section className="bg-background py-4 md:py-6 font-sans overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Title */}
          <motion.h1 
            className="text-xl md:text-4xl lg:text-3xl xl:text-3xl font-bold mb-1.5 md:mb-3 lg:mb-2 text-foreground leading-tight max-w-4xl text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {title}
          </motion.h1>

          {/* Avatars */}
          <motion.div 
            className='flex gap-2 items-center justify-start -mt-5 -mb-2.5'
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

          {/* Intro Text */}
          <motion.div 
            className="text-base md:text-base text-muted-foreground leading-relaxed font-medium text-left max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>{intro}</p>
          </motion.div>

          {/* Video or Image */}
          <motion.div 
            className="w-full max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {video ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : image ? (
                <Image
                  src={image}
                  alt={imageAlt || 'Hero image'}
                  fill
                  priority
                  className="object-cover"
                />
              ) : null}
            </motion.div>
          </motion.div>

          {/* Main Text */}
          <motion.div 
            className="text-base md:text-base text-muted-foreground leading-relaxed font-medium text-left max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <p>{mainText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiHero;

