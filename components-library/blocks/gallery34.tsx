"use client";

import { motion } from "framer-motion";
import { AudioLines, Globe, Heart, TrophyIcon } from "lucide-react";
import React, { useState } from "react";

const featureData = [
  {
    id: 1,
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    link: "#",
    title: "June Layout Grid Collection v2",
    description: "#JuneBlockCollection",
    chips: [
      { icon: TrophyIcon, value: "50+" },
      { icon: Globe, value: "50+" },
      { icon: AudioLines, value: "50+" },
    ],
  },
  {
    id: 2,
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    link: "#",
    title: "Modern UI Components Pack",
    description: "#ModernUIComponents",
    chips: [
      { icon: TrophyIcon, value: "75+" },
      { icon: Globe, value: "60+" },
      { icon: AudioLines, value: "45+" },
    ],
  },
  {
    id: 3,
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg",
    link: "#",
    title: "Responsive Design System",
    description: "#ResponsiveDesign",
    chips: [
      { icon: TrophyIcon, value: "90+" },
      { icon: Globe, value: "80+" },
      { icon: AudioLines, value: "65+" },
    ],
  },
  {
    id: 4,
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg",
    link: "#",
    title: "Interactive Animation Kit",
    description: "#AnimationKit",
    chips: [
      { icon: TrophyIcon, value: "40+" },
      { icon: Globe, value: "35+" },
      { icon: AudioLines, value: "55+" },
    ],
  },
  {
    id: 5,
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
    link: "#",
    title: "Dark Mode Components",
    description: "#DarkModeUI",
    chips: [
      { icon: TrophyIcon, value: "65+" },
      { icon: Globe, value: "70+" },
      { icon: AudioLines, value: "50+" },
    ],
  },
  {
    id: 6,
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg",
    link: "#",
    title: "E-commerce Template Pack",
    description: "#EcommerceUI",
    chips: [
      { icon: TrophyIcon, value: "85+" },
      { icon: Globe, value: "90+" },
      { icon: AudioLines, value: "75+" },
    ],
  },
];

const Gallery34 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="h-full overflow-hidden py-32">
      <div className="container">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-muted relative overflow-hidden rounded-3xl p-2"
            >
              <motion.img
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.5,
                }}
                animate={{
                  filter:
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "blur(10px)"
                      : "blur(0px)",
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                    delay: 0,
                  },
                  scale: hoveredIndex === index ? 1.02 : 1,
                }}
                src={item.img}
                className="pointer-events-none h-72 w-full rounded-2xl object-cover"
                alt={item.title}
              />
              <div className="mt-2 p-2">
                <h2 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {item.chips.map((chip, index) => {
                    const IconComponent = chip.icon;
                    return (
                      <span
                        key={index}
                        className="bg-background inline-flex items-center justify-center gap-3 rounded-full px-2 py-1 text-sm"
                      >
                        <IconComponent className="size-4" /> {chip.value}
                      </span>
                    );
                  })}
                </div>
                <div className="absolute right-4 top-4">
                  <Heart className="text-background fill-background/20 size-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery34 };
