"use client";

import { ArrowRightIcon, HeartIcon } from "lucide-react";
import React, { useState } from "react";

import { Lens } from "@/components/aceternity/lens";

const cardData = [
  {
    title: "June Collection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.",
    price: "$150",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
    link: "#",
  },
  {
    title: "Summer Essentials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.",
    price: "$89",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    link: "#",
  },
  {
    title: "Premium Bundle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.",
    price: "$299",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
    link: "#",
  },
  {
    title: "New Arrivals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.",
    price: "$120",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
    link: "#",
  },
  {
    title: "Limited Edition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.",
    price: "$199",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img27.jpeg",
    link: "#",
  },
  {
    title: "Exclusive Set",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.",
    price: "$249",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg",
    link: "#",
  },
];

const Gallery33 = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="overflow-hidden py-32">
      <div className="container w-full">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-muted/60 rounded-4xl relative flex flex-col p-2"
            >
              <Lens
                hovering={hoveredCard === index}
                setHovering={(hovering) =>
                  setHoveredCard(hovering ? index : null)
                }
              >
                <img
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  src={card.image}
                  alt={card.title}
                  className="h-72 w-full rounded-3xl object-cover"
                />
              </Lens>
              <div className="mt-3 flex items-center justify-between gap-3 px-2 pb-3">
                <div>
                  <p className="text-muted-foreground text-sm tracking-tighter">
                    {card.title}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {card.price}
                  </h3>
                </div>
                <a
                  href={card.link}
                  className="bg-muted-foreground/10 hover:bg-muted-foreground/20 flex size-12 items-center justify-center gap-2 rounded-full text-sm transition-all duration-300"
                >
                  <ArrowRightIcon className="size-7 -rotate-45 stroke-1" />
                </a>
              </div>
              <div className="absolute right-4 top-4 z-20">
                <div className="bg-background/30 text-background hover:bg-background/50 flex size-12 items-center justify-center gap-2 rounded-full text-sm transition-all duration-300">
                  <HeartIcon className="size-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery33 };
