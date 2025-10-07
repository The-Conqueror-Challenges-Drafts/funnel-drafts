import { ChevronUp } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselItems = [
  {
    year: "2025",
    month: "August",
    title: "Performance Optimization",
    description:
      "Techniques for improving web application speed and user experience.",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
  },
  {
    year: "2025",
    month: "April",
    title: "React Innovations",
    description:
      "Discover cutting-edge React techniques and best practices for building dynamic interfaces.",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
  },
  {
    year: "2025",
    month: "July",
    title: "Frontend Architecture",
    description:
      "Learn advanced strategies for building robust and maintainable frontend applications.",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-xYFl3Q9am1E-unsplash.jpg",
  },
  {
    year: "2025",
    month: "May",
    title: "UI/UX Trends",
    description:
      "Uncover the latest design trends shaping user experience and interface development.",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
  },
  {
    year: "2025",
    month: "June",
    title: "Component Design",
    description:
      "Master the art of creating reusable and scalable React components.",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-majMgWtrF48-unsplash.jpg",
  },
];

const Feature240 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container relative">
        <h1 className="text-foreground z-10 mb-10 text-center text-6xl font-bold tracking-tighter">
          Services
        </h1>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-5">
            {CarouselItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <DottedDiv className="h-150 group w-full place-self-end p-4">
                  <div className="bg-muted/50 group-hover:bg-muted relative h-full w-full p-4 transition-all ease-in-out">
                    <div className="relative h-full w-full overflow-hidden rounded-3xl">
                      <img
                        src={item.imageSrc}
                        alt="aiImage"
                        className="h-full w-full object-cover transition-all ease-in-out group-hover:scale-125"
                      />
                      <div className="bg-linear-to-t absolute inset-0 from-black/80 via-transparent to-transparent"></div>
                    </div>

                    <div className="absolute top-4 -ml-4 flex h-full w-full flex-col items-center justify-between p-10">
                      <p className="text-background flex w-full items-center text-xl tracking-tighter">
                        {item.year}{" "}
                        <span className="bg-background mx-2 h-2.5 w-[1px]" />
                        {item.month}
                      </p>
                      <div className="flex flex-col items-center justify-center">
                        <h2 className="text-background text-center text-5xl font-semibold tracking-tight">
                          {item.title}
                        </h2>
                        <div className="bg-background mt-2 h-1 w-6 rounded-full" />
                        <p className="text- text-background/80 mt-10 max-w-sm px-2 text-center font-light leading-5 tracking-tighter">
                          {item.description}
                        </p>
                      </div>
                      <a
                        href="#"
                        className="text-background group mb-6 flex cursor-pointer flex-col items-center justify-center"
                      >
                        <ChevronUp
                          size={30}
                          className="transition-all ease-in-out group-hover:-translate-y-2"
                        />
                        <p className="text-background text-xl tracking-tight">
                          See All
                        </p>
                      </a>
                    </div>
                  </div>
                </DottedDiv>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-5 flex justify-end gap-3">
            <CarouselPrevious className="static size-12" />
            <CarouselNext variant="default" className="static size-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Feature240 };

const DottedDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative", className)}>
    <div className="bg-muted absolute -left-[28px] top-4 h-[1.5px] w-[100%]" />
    <div className="bg-muted absolute -left-[28px] bottom-4 h-[1.5px] w-[100%]" />
    <div className="-top-25 bg-muted absolute left-4 h-[130%] w-[1.5px]" />
    <div className="-top-25 bg-muted absolute right-4 h-[130%] w-[1.5px]" />
    <div className="bg-foreground absolute left-[12.5px] top-[12.5px] z-10 size-2 rounded-full" />
    <div className="bg-foreground absolute right-[12.5px] top-[12.5px] z-10 size-2 rounded-full" />
    <div className="bg-foreground absolute bottom-[12.5px] left-[12.5px] z-10 size-2 rounded-full" />
    <div className="bg-foreground absolute bottom-[12.5px] right-[12.5px] z-10 size-2 rounded-full" />
    {children}
  </div>
);
