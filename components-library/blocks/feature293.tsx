import { ArrowRight } from "lucide-react";
import React from "react";

import { SparklesCore } from "@/components/aceternity/sparkles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Feature293 = () => {
  return (
    <section className="bg-background text-foreground dark relative h-screen w-screen overflow-hidden py-32">
      <div className="container relative flex h-full flex-col items-center justify-center">
        <div className="w-full max-w-lg text-center">
          <h1 className="relative z-20 text-center text-5xl font-semibold tracking-tighter md:text-6xl lg:text-7xl">
            Subscribe for New Releases
          </h1>
          <p className="text-muted-foreground/50 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sed
            voluptate sequi molestias nam exercitationem.
          </p>
          <div className="mt-10 flex w-full max-w-lg gap-2">
            <Input
              className="lg:h-13 h-11 w-full rounded-2xl border-none"
              placeholder="Enter Your email"
            />
            <Button className="lg:h-13 h-11 rounded-2xl !px-4">
              Subscribe <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
        <div className="relative mt-5 h-40 w-[40rem]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="bg-background absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </section>
  );
};

export { Feature293 };
