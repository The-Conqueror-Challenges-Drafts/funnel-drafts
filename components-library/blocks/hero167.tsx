import { ArrowRight } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero167 = () => {
  return (
    <section className="overflow-hidden bg-background py-20 font-sans">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-2">
          <div className="flex flex-col gap-12">
            <div className="max-w-[31.25rem]">
              <h1 className="mb-8 font-sans text-5xl font-semibold text-foreground md:text-7xl">
                Expand the ability to nurture
              </h1>
              <p className="text-xl text-muted-foreground">
                Remove inefficiencies and enhance patient care with a
                comprehensive healthcare system that seamlessly integrates and
                optimizes your workflow.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                asChild
                variant="outline"
                className="group inline-flex h-fit w-fit flex-wrap items-center gap-2 rounded-full border border-black px-5 py-3 transition-all hover:bg-black hover:shadow-[0_2px_15px_2px_var(--color-muted-foreground)]"
              >
                <a href="#">
                  <p className="text-sm font-medium text-black transition-colors group-hover:text-white">
                    Named Top Virtual Care
                  </p>
                  <ArrowRight className="size-4! stroke-black transition-colors group-hover:stroke-white" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="group inline-flex h-fit w-fit flex-wrap items-center gap-2 rounded-full border border-black px-5 py-3 transition-all hover:bg-black hover:shadow-[0_2px_15px_2px_var(--color-muted-foreground)]"
              >
                <a href="#">
                  <p className="text-sm font-medium text-black transition-colors group-hover:text-white">
                    Named Top Conversational AI
                  </p>
                  <ArrowRight className="size-4! stroke-black transition-colors group-hover:stroke-white" />
                </a>
              </Button>
            </div>
          </div>
          <div className="">
            <div className="relative -mr-8 h-[25rem] min-w-[50vw] rounded-lg bg-linear-to-b from-[#fbf7ec] to-[#e2f1ee] md:h-[45.625rem]">
              <div className="absolute top-16 left-24 w-[26.25rem] overflow-hidden rounded-lg shadow-lg md:top-32 md:left-40 md:w-[42.5rem] md:rounded-xl lg:left-24 lg:w-[46.25rem]">
                <AspectRatio ratio={1.466424682 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt=""
                    className="size-full object-cover object-center"
                  />
                </AspectRatio>
              </div>

              <div className="absolute bottom-4 left-32 w-full max-w-[8.75rem] overflow-hidden rounded-md shadow-xl md:left-72 md:max-w-[16.5625rem] md:rounded-xl lg:bottom-10 lg:left-52 xl:left-32">
                <AspectRatio ratio={1.698717949 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg"
                    alt=""
                    className="size-full object-cover object-center"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero167 };
