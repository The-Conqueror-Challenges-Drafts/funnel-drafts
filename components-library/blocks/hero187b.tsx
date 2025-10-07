"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Tailored workflows",
    description: "Track progress across custom issue flows for your team.",
    icon: CircleDot,
  },
  {
    title: "Milestones",
    description: "Break projects down into concrete phases.",
    icon: Diamond,
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across teams and departments.",
    icon: Blend,
  },
  {
    title: "Progress insights",
    description: "Track scope, velocity, and progress over time.",
    icon: ChartNoAxesColumn,
  },
];

const SLIDES = [
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", label: "Kanban" },
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg", label: "Issues" },
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg", label: "Add Issues" },
];

const Hero187b = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          {/* Left side - Carousel */}
          <div className="relative order-2 lg:order-1">
            <Carousel
              className="size-full"
              setApi={setApi}
              opts={{
                loop: true,
              }}
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            >
              <CarouselContent>
                {SLIDES.map((slide, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={slide.image}
                      alt={`Streamline product interface showing ${slide.label}`}
                      className="h-[450px] w-full rounded-2xl object-cover lg:h-[600px]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <SlideIndicator
              currentSlide={currentSlide}
              slides={SLIDES}
              className="mt-6 lg:hidden"
              api={api}
            />
          </div>

          {/* Right side - Content */}
          <div className="order-1 space-y-8 lg:order-2 lg:space-y-10">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Shadcnblocks components for your next project
              </h1>

              <p className="text-muted-foreground mt-6 text-xl font-medium leading-relaxed">
                Streamline is the fit-for-purpose tool for planning and building
                modern software products.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Icon className="text-primary mt-0.5 size-5" />
                    </div>
                    <div>
                      <h2 className="font-semibold">{feature.title}</h2>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" aria-label="Get started">
                Get started
              </Button>
              <a href="#">
                <Button aria-label="Documentation" variant="outline" size="lg">
                  <span className="flex items-center gap-2">
                    Documentation
                    <ArrowRight className="size-4" />
                  </span>
                </Button>
              </a>
            </div>

            <SlideIndicator
              currentSlide={currentSlide}
              slides={SLIDES}
              className="max-lg:hidden"
              api={api}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface SlideIndicatorProps {
  currentSlide: number;
  slides: Array<{ label: string }>;
  className?: string;
  api: CarouselApi | null;
}

const SlideIndicator = ({
  currentSlide,
  slides,
  className,
  api,
}: SlideIndicatorProps) => {
  return (
    <div
      className={cn("flex flex-col items-start gap-2 font-medium", className)}
    >
      <div className="">
        <span className="text-foreground-700">{currentSlide + 1} of 3 — </span>
        <span className="text-primary">{slides[currentSlide].label}</span>
      </div>
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-0.5 w-6 rounded-full transition-colors",
              index === currentSlide
                ? "bg-primary"
                : "bg-primary/20 hover:bg-primary/40",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export { Hero187b };
