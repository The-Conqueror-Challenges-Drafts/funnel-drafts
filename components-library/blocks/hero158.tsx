import { MoveRight } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero158 = () => {
  return (
    <section className="bg-primary/5 py-12 font-sans md:py-20">
      <div className="container max-w-[87.5rem]">
        <div className="grid grid-cols-1 gap-[5.625rem] lg:grid-cols-2">
          <div>
            <div className="flex flex-col gap-12">
              <div>
                <h1 className="mb-3 text-4xl font-bold md:text-5xl lg:text-6xl">
                  Uncover our vision for a more innovative, better future
                </h1>
                <p className="text-lg text-muted-foreground">
                  Be part of our journey to innovate and develop solutions that
                  enrich lives and fuel progress.
                </p>
              </div>
              <Button
                asChild
                className="group flex h-fit w-fit items-center gap-2 rounded-full px-8 py-3"
              >
                <a href="#">
                  <div className="font-medium text-white">Started for free</div>
                  <div className="relative h-6 w-7 overflow-hidden">
                    <div className="absolute top-0 left-0 flex -translate-x-1/2 items-center transition-all duration-500 group-hover:translate-x-0">
                      <MoveRight className="h-6! w-6! fill-white px-1" />
                      <MoveRight className="h-6! w-6! fill-white px-1" />
                    </div>
                  </div>
                </a>
              </Button>
            </div>
          </div>
          <div>
            <AspectRatio ratio={1.390658174 / 1}>
              <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-5 lg:max-w-[38.9375rem] lg:gap-8">
                <div className="col-[1/2] row-[1/3]">
                  <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-3xl">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="col-[2/3] row-[1/2]">
                  <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-3xl">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="col-[2/3] row-[2/3]">
                  <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-3xl">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero158 };
