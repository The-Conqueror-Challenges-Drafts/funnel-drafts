import { MoveRight } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero159 = () => {
  return (
    <section className="relative overflow-hidden bg-primary/5 pt-28 pb-12 md:pt-40 md:pb-20 lg:pt-48">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-[1fr_1fr] xl:gap-x-48">
          <div>
            <div className="flex h-full flex-col justify-between gap-6 md:gap-24">
              <div>
                <h1 className="mb-4 text-5xl leading-tight font-bold text-gray-900 lg:text-[3.625rem] xl:text-6xl">
                  Enabling your financial success
                </h1>
                <p className="text-lg text-muted-foreground">
                  Our platform offers powerful tools and insights to help you
                  manage, grow, and protect your financial assets.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <Button
                  asChild
                  className="group flex h-fit w-fit items-center gap-2 rounded-full px-8 py-3"
                >
                  <a href="#">
                    <div className="font-medium text-white">
                      Started for free
                    </div>
                    <div className="relative h-6 w-7 overflow-hidden">
                      <div className="absolute top-0 left-0 flex -translate-x-1/2 items-center transition-all duration-500 group-hover:translate-x-0">
                        <MoveRight className="h-6! w-6! stroke-white px-1" />
                        <MoveRight className="h-6! w-6! stroke-white px-1" />
                      </div>
                    </div>
                  </a>
                </Button>
                <p className="text-muted-foreground">
                  No joining fee . No annual fee
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="h-full w-full md:max-w-[37.5rem]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt=""
                className="aspect-[1.026845638/1] h-full w-full rounded-xl object-cover object-center lg:aspect-[1.34529148/1]"
              />
            </div>
            <div className="absolute bottom-[4%] left-[4%] w-36 lg:w-56">
              <AspectRatio
                ratio={1.140102041 / 1}
                className="overflow-hidden rounded-lg border shadow-sm"
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-white-1.svg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-36 right-0 hidden w-1/2 rounded-bl-[1.875rem] md:block md:h-[34.375rem] xl:h-[41.5625rem]">
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-8-wide.svg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export { Hero159 };
