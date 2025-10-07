"use client";

import { Code, GitBranch, Sparkle } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const sections = [
  {
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    title: "Design",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, autem.",
    logo: <Code className="h-5 w-5" />,
  },
  {
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    title: "Develop",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, autem.",
    logo: <GitBranch className="h-5 w-5" />,
  },
  {
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    title: "Ship",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, autem.",
    logo: <Sparkle className="h-5 w-5" />,
  },
];

const Gallery9 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollToSection = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-20 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl">
            Cut the time it takes to close your books
          </h1>

          <Badge
            variant="secondary"
            className="px-5 py-2 text-base font-normal"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Badge>
        </div>
        <Carousel setApi={setApi} className="flex flex-col gap-10">
          <CarouselContent>
            {sections.map((item, index) => (
              <CarouselItem className="h-full w-full" key={index}>
                <img
                  src={item.img}
                  alt="logo"
                  className="aspect-square h-full w-full object-cover md:aspect-[2]"
                />
                <div className="mt-8 flex cursor-pointer flex-col gap-2 md:hidden">
                  <div>{item.logo}</div>
                  <div className="text-lg font-medium">{item.title}</div>
                  <div className="text-lg text-muted-foreground">
                    {item.text}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mb-8 hidden justify-between gap-8 md:flex">
            {sections.map((section, index) => (
              <div
                key={index}
                onClick={() => scrollToSection(index)}
                className="flex cursor-pointer flex-col gap-2"
              >
                <div>{section.logo}</div>
                <div className="text-lg font-medium">{section.title}</div>
                <div
                  className={`text-lg ${index + 1 === current ? "text-muted-foreground" : "text-muted-foreground/50"} hover:text-muted-foreground`}
                >
                  {section.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-8">
            <div>
              {current} / {count}
            </div>
            <div className="flex items-center justify-start gap-2">
              <CarouselPrevious
                className="static translate-y-0"
                disabled={false}
              />
              <CarouselNext className="static translate-y-0" disabled={false} />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery9 };
