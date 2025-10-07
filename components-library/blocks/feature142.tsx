"use client";

import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const items: string[] = [
  "Responsive Design and Layout",
  "Clean and Modern Design",
  "Easy to Customize",
  "Cross Browser Compatible",
];

const Feature142 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mt-20 flex flex-col items-center justify-center gap-16 md:flex-row">
          <div className="bg-linear-to-br relative grid w-full max-w-md grid-cols-[1fr_6fr_1fr] grid-rows-[1fr_2fr_1fr_7fr] rounded-lg from-red-100 to-blue-100 sm:max-h-[700px] md:max-w-xl">
            <div className="border-muted-foreground/30 border-b-2 border-r-2 p-4" />
            <div className="border-muted-foreground/30 border-b-2 p-4" />
            <div className="border-muted-foreground/30 border-b-2 border-l-2 p-4" />
            <div className="border-muted-foreground/30 border-r-2 p-4" />
            <div className="bg-background flex items-center justify-center rounded-xl p-2 md:p-3">
              <p className="text-muted-foreground text-center text-xs sm:text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className="border-muted-foreground/30 border-l-2 p-4" />
            <div className="border-muted-foreground/30 border-b-2 border-r-2 border-t-2 p-4" />
            <div className="border-muted-foreground/30 border-b-2 border-t-2 p-4" />
            <div className="border-muted-foreground/30 border-b-2 border-l-2 border-t-2 p-4" />
            <div className="border-muted-foreground/30 border-r-2 p-4" />
            <div className="">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder"
                className="h-full w-full rounded-t-xl object-cover"
              />
            </div>
            <div className="border-muted-foreground/30 border-l-2 p-4" />
          </div>

          <div className="w-full max-w-sm">
            <h6 className="text-3xl">
              Build any kind of Website with our Blocks
            </h6>
            <Badge variant="outline" className="bg-muted mt-8 px-3 py-2">
              Badge
            </Badge>

            <div className="bg-muted-foreground mb-4 mt-16 h-px w-full" />

            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li className="flex items-center gap-2 text-lg" key={item}>
                  <ArrowRight className="size-5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature142 };
