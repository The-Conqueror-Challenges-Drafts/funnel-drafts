"use client";

import AutoPlay from "embla-carousel-autoplay";
import React from "react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Testimonial29 = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Creative Director @JOHN_DOE&X.COM @shadcn_blocks",
      quote:
        '"Lorem ipsum dolor sit amet consectetur adipiasicing elit. Lorem ipsum dolor sit amet consectetur seams."',
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    },
    {
      name: "Sarah Johnson",
      role: "Product Designer @SARAH_J @shadcn_design",
      quote:
        '"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
    {
      name: "Michael Chen",
      role: "Senior Developer @MCHEN @shadcn_dev",
      quote:
        '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
    {
      name: "Emily Williams",
      role: "UI/UX Lead @EMILY_W @shadcn_ui",
      quote:
        '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    },
    {
      name: "David Rodriguez",
      role: "Marketing Director @DAVID_R @shadcn_marketing",
      quote:
        '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."',
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    },
    {
      name: "Lisa Park",
      role: "CTO @LISA_PARK @shadcn_tech",
      quote:
        '"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."',
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-background py-32">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-foreground mb-10 text-center text-6xl font-bold tracking-tighter">
          Testimonials
        </h1>

        <Carousel
          className="mx-auto my-20 w-full max-w-3xl"
          opts={{
            loop: true,
          }}
          plugins={[AutoPlay({ playOnInit: true, delay: 2000 })]}
          setApi={(api) => {
            if (api) {
              api.on("select", () => {
                setActiveIndex(api.selectedScrollSnap());
              });
            }
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="flex flex-col items-center">
                <div className="flex w-full flex-col items-center gap-12">
                  {/* Avatar */}
                  <div className="size-30 bg-foreground relative flex items-center justify-center rounded-3xl p-2.5 shadow-xl">
                    <div className="bg-background flex size-full items-center justify-center rounded-2xl p-4">
                      <Avatar className="size-full">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="relative space-y-2 text-center">
                    <h2 className="text-foreground text-2xl font-medium tracking-tighter">
                      {testimonial.name}
                    </h2>
                    <p className="text-muted-foreground/70 text-lg tracking-tight">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Testimonial Quote */}
                  <Card className="border-none shadow-none">
                    <CardContent className="p-0">
                      <p className="text-foreground text-center text-2xl tracking-tight md:text-3xl">
                        {testimonial.quote}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-20 flex justify-center">
            {/* Pagination Dots */}
            <div className="flex items-center gap-1">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full ${
                    index === activeIndex
                      ? "bg-foreground w-10"
                      : "bg-muted w-4"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Testimonial29 };
