"use client";

import { Cpu, Zap } from "lucide-react";
import React, { useRef } from "react";

import { AnimatedBeam } from "@/components/knowledge-base/magicui/animated-beam";

const Feature250 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <p className="text-muted-foreground mx-auto mb-4 max-w-sm text-center md:text-xl">
          Bridging Developers, Building the Future
        </p>
        <h1 className="mx-auto -mb-12 max-w-3xl text-center text-4xl font-medium tracking-tighter md:text-6xl lg:mb-5 lg:text-7xl">
          Connecting Developers Worldwide
        </h1>
        <AnimatedBeamIllustration />
      </div>
    </section>
  );
};

export { Feature250 };

const REVERSE = false;

function AnimatedBeamIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="h-100 relative z-10 flex w-full items-center justify-center rounded-3xl lg:w-0">
          <div
            ref={div1Ref}
            className="size-18 bg-background absolute left-0 top-40 z-10 flex -translate-y-1/2 items-center justify-center rounded-full p-1 lg:left-0 lg:top-1/2"
          >
            <div className="border-border bg-background flex size-10 items-center justify-center rounded-lg border p-[5px]">
              <div className="border-border bg-muted flex size-full items-center justify-center rounded-md border">
                <Cpu size={16} />
              </div>
            </div>
          </div>
          <div
            ref={div2Ref}
            className="size-18 bg-background absolute right-0 top-40 z-10 flex -translate-y-1/2 items-center justify-center rounded-full p-1 lg:left-20 lg:top-20"
          >
            <div className="border-border bg-background flex size-10 items-center justify-center rounded-lg border p-[5px]">
              <div className="border-border bg-muted flex size-full items-center justify-center rounded-md border">
                <Cpu size={16} />
              </div>
            </div>
          </div>
          <div
            ref={div3Ref}
            className="size-18 bg-background absolute bottom-0 left-6 z-10 flex -translate-y-1/2 items-center justify-center rounded-full p-1 lg:bottom-2 lg:left-20"
          >
            <div className="border-border bg-background flex size-10 items-center justify-center rounded-lg border p-[5px]">
              <div className="border-border bg-muted flex size-full items-center justify-center rounded-md border">
                <Cpu size={16} />
              </div>
            </div>
          </div>
          <div
            ref={div4Ref}
            className="size-18 bg-background lg:left-50 absolute bottom-0 right-6 z-10 flex -translate-y-1/2 items-center justify-center rounded-full p-1 lg:top-0"
          >
            <div className="border-border bg-background flex size-10 items-center justify-center rounded-lg border p-[5px]">
              <div className="border-border bg-muted flex size-full items-center justify-center rounded-md border">
                <Cpu size={16} />
              </div>
            </div>
          </div>
          <div
            ref={div5Ref}
            className="size-18 bg-background lg:top-100 lg:left-50 absolute top-20 z-10 flex -translate-y-1/2 items-center justify-center rounded-full p-1"
          >
            <div className="border-border bg-background flex size-10 items-center justify-center rounded-lg border p-[5px]">
              <div className="border-border bg-muted flex size-full items-center justify-center rounded-md border">
                <Cpu size={16} />
              </div>
            </div>
          </div>
        </div>
        <div
          ref={div6Ref}
          className="bg-muted lg:size-42 z-10 flex size-32 items-center justify-center rounded-3xl border"
        >
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
            className="lg:size-18 size-14 dark:invert"
            alt=""
          />
        </div>
        <div
          ref={div7Ref}
          className="size-15 bg-muted z-10 mt-40 flex items-center justify-center rounded-xl border lg:mt-0"
        >
          <Zap fill="currentColor" />
        </div>
      </div>

      <div className="block lg:hidden">
        <AnimatedBeam
          duration={3}
          endYOffset={-60}
          endXOffset={-10}
          curvature={10}
          reverse={REVERSE}
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          duration={3}
          endYOffset={-60}
          endXOffset={10}
          curvature={10}
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />

        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div7Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
          reverse={REVERSE}
        />
      </div>

      <div className="hidden lg:block">
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          endYOffset={-30}
          endXOffset={60}
          duration={3}
          curvature={-140}
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          endYOffset={30}
          curvature={140}
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          endYOffset={-30}
          endXOffset={-60}
          curvature={-180}
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />

        <AnimatedBeam
          duration={3}
          endXOffset={-60}
          endYOffset={30}
          curvature={180}
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
          reverse={REVERSE}
        />
      </div>
    </div>
  );
}
