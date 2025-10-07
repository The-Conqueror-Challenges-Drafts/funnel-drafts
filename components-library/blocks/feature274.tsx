"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { CanvasRevealEffect } from "@/components/aceternity/canvas-reveal-effect";

const Feature274 = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <h2 className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-7 lg:text-7xl">
          Numbers That Build Trust
        </h2>
        <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card
            defaultText="99%"
            revealText="Success Rate"
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
          <Card
            defaultText="50+"
            revealText="Active users"
            animationSpeed={3}
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <Card
            defaultText="100+"
            revealText="Downloads"
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
          <Card
            defaultText="$1.2M"
            revealText="Total raised"
            animationSpeed={4}
            containerClassName="bg-orange-600"
            colors={[[249, 115, 22]]}
            dotSize={3}
          />
        </div>
      </div>
    </section>
  );
};

export { Feature274 };

const Card = ({
  defaultText,
  revealText,
  animationSpeed = 3,
  containerClassName = "bg-primary",
  colors = [[255, 255, 255]],
  dotSize = 1,
  hasRadialGradient = false,
}: {
  defaultText: string;
  revealText: string;
  animationSpeed?: number;
  containerClassName?: string;
  colors?: number[][];
  dotSize?: number;
  hasRadialGradient?: boolean;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card border-border relative mx-auto flex h-[25rem] w-full max-w-sm items-center justify-center border p-4"
    >
      <BorderIllustration className="text-foreground absolute -left-3 -top-3 h-6 w-6" />
      <BorderIllustration className="text-foreground absolute -bottom-3 -left-3 h-6 w-6" />
      <BorderIllustration className="text-foreground absolute -right-3 -top-3 h-6 w-6" />
      <BorderIllustration className="text-foreground absolute -bottom-3 -right-3 h-6 w-6" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            <CanvasRevealEffect
              animationSpeed={animationSpeed}
              containerClassName={containerClassName}
              colors={colors}
              dotSize={dotSize}
            />
            {hasRadialGradient && (
              <div className="bg-muted/50 absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)]" />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute mx-auto flex w-full items-center justify-center text-center text-6xl font-semibold tracking-tight transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {defaultText}
        </div>
        <div className="text-foreground absolute relative z-10 mt-4 text-center text-2xl font-bold tracking-tight opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100">
          {defaultText}
          <br />
          {revealText}
        </div>
      </div>
    </div>
  );
};

export const BorderIllustration = ({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
