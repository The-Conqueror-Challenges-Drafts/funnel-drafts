"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero85 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="mx-auto">
            <div className="flex w-fit items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs font-medium">
              <Badge>AI-powered</Badge>
              Solutions for new businesses
            </div>
            <h1 className="mt-10 mb-4 text-3xl font-semibold lg:text-5xl">
              Revolutionizing Client Collaboration for Modern Services
            </h1>
            <p className="mx-auto text-muted-foreground lg:text-lg">
              Elevate your service-based business with customizable client
              portals and advanced back-office management
            </p>
            <div className="mt-10 flex flex-col gap-2 sm:flex-row">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                Start for Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full gap-2 sm:w-auto"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:hidden">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                }),
              ]}
              className="-mx-7"
            >
              <CarouselContent className="max-h-[350px]">
                <CarouselItem className="max-w-96">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                  direction: "backward",
                }),
              ]}
              className="-mx-7"
            >
              <CarouselContent className="max-h-[350px]">
                <CarouselItem className="max-w-96">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem className="max-w-96">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          <div className="hidden grid-cols-2 gap-8 lg:grid">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                }),
              ]}
              orientation="vertical"
            >
              <CarouselContent className="max-h-[600px]">
                <CarouselItem>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                  direction: "backward",
                }),
              ]}
              orientation="vertical"
            >
              <CarouselContent className="max-h-[600px]">
                <CarouselItem>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                    alt="placeholder"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero85 };
