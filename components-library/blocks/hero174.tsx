import { ArrowDown } from "lucide-react";
import { Fragment } from "react";

import { Button } from "@/components/ui/button";

const Hero174 = () => {
  return (
    <Fragment>
      <section className="font-dm_sans dark relative h-svh max-h-[1400px] min-h-[600px] w-full bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-MaVm_A0xhKk-unsplash.jpg')] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:block after:size-full after:bg-zinc-950/50 after:content-['']">
        <div className="relative z-10 mx-auto flex size-full max-w-[125rem] px-4 py-9">
          <div className="flex w-full flex-col justify-between gap-10">
            <div className="mx-auto flex max-w-[31.25rem] flex-1 flex-col items-center justify-center gap-7 sm:max-w-[37.5rem] md:max-w-[50rem]">
              <h1 className="text-foreground text-center text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
                Transform Your Vision Into Digital Reality
              </h1>
              <p className="text-foreground text-balance text-center text-lg md:text-2xl">
                We craft exceptional digital solutions that help brands stand
                out and make a lasting impact in the digital landscape.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  className="block h-fit w-fit text-nowrap rounded-sm px-6 py-3.5 text-sm font-semibold uppercase tracking-wider"
                >
                  <a href="#">Explore Projects</a>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-lg bg-black/20 px-6 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="bg-primary h-8 w-1"></div>
                <div className="text-muted-foreground text-sm font-medium">
                  <p className="text-primary">Global Headquarters</p>
                  <p>San Francisco, California</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="border-primary hover:bg-primary/20 flex size-10 rounded-full border-2 transition-colors"
              >
                <ArrowDown className="size-5! stroke-primary m-auto" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export { Hero174 };
