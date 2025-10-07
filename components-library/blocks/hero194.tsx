"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import { Command } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const teamImages = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
    alt: "",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/carles-rabada-f7UprkNqi08-unsplash.jpg",
    alt: "",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
    alt: "",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/kevin-charit-1fL2Q1JcbNc-unsplash.jpg",
    alt: "",
  },

  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/sam-wermut-FiUuNWxnb3k-unsplash.jpg",
    alt: "",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ines-alvarez-fdez-VjRc6HDXJ5s-unsplash.jpg",
    alt: "",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-Kj2tYAl4HZg-unsplash.jpg",
    alt: "",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vasilis-karkalas-qOaeVSKyhhE-unsplash.jpg",
    alt: "",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pat-whelen-gWfpmH0H2bM-unsplash.jpg",
    alt: "",
  },
];

const offsets = [0, 2, 4, 6];
const rotatedTeamImagesArray = offsets.map((offset) =>
  teamImages.slice(offset).concat(teamImages.slice(0, offset)),
);

const TeamCarousel = () => {
  return (
    <div className="w-full">
      <div className="relative -top-4 -right-[20%] hidden gap-2 lg:flex">
        {rotatedTeamImagesArray.map((rotatedTeamImages, index) => (
          <Carousel
            opts={{
              loop: true,
              align: "center",
              axis: "y",
            }}
            plugins={[
              AutoScroll({
                speed: 0.5,
                direction: index % 2 ? "backward" : "forward",
              }),
            ]}
            orientation="vertical"
            className="rotate-[7deg]"
            key={`carousel-1-team-${index}`}
          >
            <CarouselContent className="h-full max-h-[40.625rem] w-fit">
              {rotatedTeamImages.map((t, i) => (
                <CarouselItem key={`team-image-${i}`} className="-mt-2">
                  <div className="h-[9rem] w-[7.875rem] overflow-hidden rounded-lg">
                    <img
                      src={t.src}
                      alt={t.alt}
                      className="size-full object-cover object-center"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ))}
      </div>

      <div className="flex flex-col gap-2.5 pb-12 lg:hidden">
        {[...Array(2)].map((_, i) => (
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            plugins={[
              AutoScroll({
                speed: 0.5,
                direction: i % 2 ? "backward" : "forward",
              }),
            ]}
            key={`carousel-2-team-${i}`}
          >
            <CarouselContent>
              {teamImages.map((t, i) => (
                <CarouselItem
                  key={`team-image-${i}`}
                  className="h-[9rem] w-full max-w-[7.875rem] pl-2.5"
                >
                  <div className="size-full overflow-hidden rounded-lg">
                    <img
                      src={t.src}
                      alt={t.alt}
                      className="block size-full object-cover object-center"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ))}
      </div>
    </div>
  );
};

const Hero194 = () => {
  return (
    <section className="container max-w-[1536px] py-20">
      <div className="dark relative overflow-hidden rounded-2xl bg-black">
        <div className="grid h-full w-full grid-cols-1 lg:max-h-[37.5rem] lg:grid-cols-2">
          <div className="flex w-full max-w-[90%] flex-col justify-center gap-5 py-16 pr-10 pl-20 md:max-w-[70%] lg:max-w-full lg:py-0">
            <h1 className="text-4xl leading-[1.1] text-white md:text-5xl lg:text-4xl xl:text-5xl">
              Generative topologies with AI land surveying
            </h1>
            <p className="text-sm text-muted-foreground md:text-base">
              Enhance your photos with cutting-edge technology that brings out
              the vibrant colors and intricate details of the natural world.
              Perfect for photographers of all levels, our app makes capturing
              stunning images effortless.
            </p>

            <div className="flex gap-4">
              <Button variant="secondary">
                <Command className="size-4" />
                Download Now
              </Button>
            </div>
          </div>
          <div className="absolute left-1/2 z-10 hidden h-full w-[500px] bg-linear-to-r from-black via-black/95 to-transparent lg:block"></div>
          <div className="relative">
            <TeamCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero194 };
