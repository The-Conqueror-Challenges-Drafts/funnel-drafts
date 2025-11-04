'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface ListItem {
  title: string;
  description?: string;
  testimonial: string;
  author: string;
  image?: string;
  video?: string;
  imageQuery: string;
  avatarQuery: string;
}

interface MultiReasonsProps {
  sectionTitle: string;
  listItems: ListItem[];
}

const MultiReasons: React.FC<MultiReasonsProps> = ({
  sectionTitle,
  listItems
}) => {
  return (
    <section className="bg-background py-4 md:py-6">
      <div className="container mx-auto px-4 max-w-6xl" data-reasons-section>
        <motion.h2 
          className="text-xl md:text-3xl font-bold text-left mb-8 md:mb-10 text-balance text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {sectionTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {listItems.map((item, index) => (
            <motion.div 
              key={index} 
              data-reason-item
              className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Headline - Full Width at Top */}
              <h3 className="text-xl md:text-2xl font-bold leading-tight mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                {index + 1}. {item.title}
              </h3>

              {/* Illustration */}
              <motion.div 
                className="relative w-full aspect-square rounded-xl overflow-hidden bg-muted mb-6 shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={item.image || `/.jpg?key=${index}&height=400&width=640&query=${item.imageQuery}`}
                    alt={`Illustration for ${item.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </motion.div>

              {/* Description */}
              {item.description && (
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>
              )}

              {/* Testimonial (only if exists) */}
              {item.testimonial && (
                <div className="mb-6">
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic font-medium">
                    &ldquo;{item.testimonial}&rdquo;
                  </p>
                </div>
              )}
              
              {/* Author Info - At the bottom (only if author exists) */}
              {item.author && (
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  {/* Avatar Circle */}
                  {item.avatarQuery && (
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-muted shadow-md flex-shrink-0">
                      <Image
                        src={`/.jpg?key=avatar-${index}&height=96&width=96&query=${item.avatarQuery}`}
                        alt={item.author}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  
                  {/* Author Name */}
                  <div>
                    <p className="text-sm md:text-base font-semibold text-foreground">
                      {item.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Conqueror Participant
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiReasons;

