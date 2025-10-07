import React from "react";

import { GlowingStarsBackgroundCard } from "@/components/aceternity/glowing-stars";
import { Button } from "@/components/ui/button";

const cardData = [
  {
    title: "June Collection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.",
  },
  {
    title: "Summer Essentials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.",
  },
  {
    title: "Premium Bundle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.",
  },
  {
    title: "New Arrivals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.",
  },
];

const Feature287 = () => {
  return (
    <section className="bg-background text-foreground dark overflow-hidden py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <h2 className="relative mt-4 w-full max-w-7xl py-2 text-4xl font-semibold tracking-tighter lg:text-5xl">
          The Production Ready Blocks
          <br />
          <span className="text-muted-foreground">for your Next Project</span>
        </h2>
        <div className="mt-10 grid w-full max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-muted/60 flex flex-col rounded-3xl p-4"
            >
              <GlowingStarsBackgroundCard className="h-55 !bg-muted-foreground max-w-full border-none" />

              <div className="mt-3 flex items-center justify-start gap-3">
                <h3 className="text-xl font-semibold tracking-tighter">
                  {card.title}
                </h3>
              </div>
              <div className="text-muted-foreground/70 mt-1 flex items-center justify-between text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi.
              </div>
            </div>
          ))}
        </div>

        <Button variant="secondary" className="mt-10 h-10 rounded-full !px-5">
          View All Collections
        </Button>
      </div>
    </section>
  );
};

export { Feature287 };
