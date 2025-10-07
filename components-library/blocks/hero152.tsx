import { MoveUpRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero152 = () => {
  return (
    <section className="bg-muted pt-12 font-sans md:pt-20">
      <div className="mx-auto max-w-[99rem] px-0 sm:px-8">
        <div className="container px-4">
          <div className="mx-auto flex max-w-[25rem] flex-col items-center gap-6 sm:max-w-[31.25rem] lg:max-w-[40rem]">
            <div className="flex items-center justify-center gap-2">
              <Star className="size-5 fill-black stroke-black" />
              <p className="text-nowrap text-sm">
                Trusted by over 7,000 customers
              </p>
            </div>
            <div className="mb-2">
              <h1 className="text-center text-[2.8125rem] font-bold leading-none sm:text-[3.9375rem] lg:text-[5.3125rem]">
                Design system that delivers
              </h1>
            </div>
            <p className="text-muted-foreground text-balance text-center text-base leading-snug sm:text-2xl">
              Create, prototype, and personalize any design—clean and
              effortless, in just minutes.
            </p>
            <div className="flex w-full flex-wrap items-center gap-4 md:w-fit">
              <Button
                variant="secondary"
                asChild
                className="group flex h-fit min-w-[11.25rem] flex-1 items-center justify-center gap-1 rounded-[5rem] border-2 border-black px-4 py-3 text-base font-semibold md:min-w-fit md:flex-none"
              >
                <a href="#">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-icon.svg"
                    alt=""
                    className="block size-6 shrink-0"
                  />
                  <p className="group-hover:text-primary text-nowrap transition-all duration-300 ease-in-out">
                    Preview
                  </p>
                  <MoveUpRight className="group-hover:stroke-primary size-6 shrink-0 stroke-black transition-all duration-300 ease-in-out" />
                </a>
              </Button>
              <Button
                asChild
                variant="default"
                className="border-primary bg-primary group flex h-fit min-w-[11.25rem] flex-1 items-center justify-center gap-1 text-nowrap rounded-[5rem] border-2 px-4 py-3 text-base font-semibold text-white md:min-w-fit md:flex-none"
              >
                <a href="#">Get Module</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative mt-16 aspect-[1.2/1] overflow-hidden sm:-right-[10%] sm:right-auto sm:mt-28 sm:aspect-[2.788990826/1]">
          <div className="absolute left-[8%] top-[11%] z-10 aspect-[0.7/1] w-[80%] sm:left-[4%] sm:w-[45%]">
            <div className="size-full [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt=""
                className="block size-full object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute left-[70%] top-0 z-20 aspect-[0.7/1] w-[73%] -translate-x-1/2 sm:left-1/2 sm:w-[38%]">
            <div className="size-full shadow-[-25px_0px_20px_0px_rgba(0,0,0,.04)] [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                alt=""
                className="block size-full object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute -right-[45%] top-[3%] z-30 aspect-[0.7/1] w-[85%] sm:-right-[2%] sm:w-[50%]">
            <div className="size-full shadow-[-25px_0px_20px_0px_rgba(0,0,0,.04)] [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                alt=""
                className="block size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero152 };
