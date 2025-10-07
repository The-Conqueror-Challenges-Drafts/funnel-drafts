import { CircleCheck, Star } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero177 = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container">
        <div className="mx-auto flex max-w-[77.5rem] flex-col items-center gap-8">
          <Badge className="flex w-fit items-center gap-4 rounded-md bg-accent px-4 py-2 hover:bg-accent">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-play-icon.svg"
              className="size-5"
              alt="google play store icon"
            ></img>
            <div className="flex items-center gap-1">
              <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
              <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
              <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
              <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
              <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
            </div>
            <p className="text-sm text-accent-foreground">5.0 rating</p>
          </Badge>
          <h1 className="max-w-[54.375rem] text-center text-[2.5rem] leading-[90%] font-bold tracking-[-1.6px] text-foreground transition-[font-size] duration-300 md:text-6xl lg:text-[4.25rem]">
            Consolidate fuel, fleet, and field costs on a single card.
          </h1>
          <p className="max-w-[54.375rem] text-center text-lg text-muted-foreground md:text-xl">
            Eliminate fuel theft and overspending with a fuel card that has been
            shown to lower fuel costs by an average of 24%¹. Our advanced
            software streamlines expense tracking, card management, and
            accounting, making these tasks easier and faster than ever.
          </p>
          <ul className="flex flex-col gap-2 text-left md:flex-row md:justify-center md:gap-6 md:text-center">
            <li className="flex items-center gap-3">
              <CircleCheck className="size-6 fill-primary stroke-background" />
              <p className="text-muted-2-foreground">VISA acceptance</p>
            </li>
            <li className="flex items-center gap-3">
              <CircleCheck className="size-6 fill-primary stroke-background" />
              <p className="text-muted-2-foreground">
                US-based customer service
              </p>
            </li>
            <li className="flex items-center gap-3">
              <CircleCheck className="size-6 fill-primary stroke-background" />
              <p className="text-muted-2-foreground">Rebates & cashback</p>
            </li>
          </ul>
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row md:w-auto lg:justify-start">
            <Button
              asChild
              className="group inline-block h-fit overflow-hidden rounded-md px-6 py-4 text-center text-sm leading-none font-semibold tracking-tight transition"
            >
              <a href="#">
                <div className="relative">
                  <span className="block text-nowrap transition group-hover:translate-y-[-250%]">
                    Get Started
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 translate-y-[250%] transition group-hover:-translate-y-1/2"
                  >
                    Get Started
                  </span>
                </div>
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="group inline-block h-fit overflow-hidden rounded-md border px-6 py-4 text-center text-sm leading-none font-semibold tracking-tight transition"
            >
              <a href="#">
                <div className="relative">
                  <span className="block text-nowrap transition group-hover:translate-y-[-250%]">
                    See interactive demo
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 translate-y-[250%] transition group-hover:-translate-y-1/2"
                  >
                    See interactive demo
                  </span>
                </div>
              </a>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-12 flex w-full max-w-[77.5rem] gap-[1.5%] md:mt-20">
          <div className="flex-[33.3%]">
            <AspectRatio
              ratio={0.741410488 / 1}
              className="overflow-hidden rounded-lg md:rounded-xl"
            >
              <div className="relative h-full w-full bg-amber-100">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt=""
                  className="block h-full w-full object-cover object-center"
                />
              </div>
            </AspectRatio>
          </div>
          <div className="flex-[66.6%]">
            <AspectRatio
              ratio={1.482820976 / 1}
              className="h-full w-full overflow-hidden rounded-lg bg-muted md:rounded-xl"
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt=""
                className="block h-full w-full translate-x-[4%] translate-y-[5.5%] rounded-lg object-cover object-center"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero177 };
