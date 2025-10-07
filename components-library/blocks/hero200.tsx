"use client";

import { motion } from "framer-motion";
import React from "react";

import { Button } from "@/components/ui/button";

const Hero200 = () => {
  return (
    <section className="bg-background py-32">
      <div className="border-b border-foreground/40">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-semibold tracking-tighter text-foreground/80 md:text-2xl">
            Shadcnblocks.com
          </h2>
          <h1 className="font-playfair text-4xl tracking-tighter text-foreground md:text-7xl">
            Blocks Built With
            <br />
            Shadcn And Tailwind CSS
            <br />
            Just Copy Paste Them.
          </h1>
          <Button className="my-10 rounded-2xl px-6 py-6 text-background shadow-[0px_1px_3px_#0000001a,inset_0px_2px_0px_#ffffff40] md:rounded-3xl md:px-12 md:py-8 md:text-lg">
            <p className="mr-1 text-xl text-background md:mr-3 md:text-2xl">
              
            </p>{" "}
            Sign up for free
          </Button>

          {/* Iphone mockup with content */}
          <div className="h-[500px] w-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 200, scale: 0.8 }}
              animate={{ opacity: 100, y: 0, scale: 1 }}
              transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 0.8 }}
              className="relative mx-auto mt-6 flex h-[850px] w-[400px] items-center justify-center rounded-[75px] bg-black md:mt-12 md:h-[920px] md:w-[450px]"
            >
              <img
                className="absolute z-2 scale-105 object-cover"
                alt="Gold phone frame"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-5.png"
              />
              <div className="h-full w-full">
                <div className="mt-20 flex justify-between px-0">
                  <h1 className="flex items-end gap-2 px-12 text-5xl font-semibold tracking-tight text-background md:text-6xl">
                    Mon
                    <div className="mb-2 size-3 rounded-full bg-red-500 md:size-5" />
                  </h1>
                  <div className="mt-2 mr-8 flex flex-col items-end">
                    <p className="text-lg tracking-tight text-muted-foreground md:text-xl">
                      Feburary 9
                    </p>
                    <p className="-mt-1 text-xl font-semibold tracking-tighter text-muted-foreground/50 md:text-2xl">
                      2025
                    </p>
                  </div>
                </div>
                <img
                  className="z-2 mx-auto mt-20 size-40 object-cover"
                  alt="Gold phone frame"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-white-1.svg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero200 };
