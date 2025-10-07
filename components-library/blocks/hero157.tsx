import { MoveUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero157 = () => {
  return (
    <section className="font-poppins dark relative h-svh max-h-[1400px] w-full overflow-hidden bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-MaVm_A0xhKk-unsplash.jpg')] bg-cover bg-center bg-no-repeat py-12 after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:bg-black/65 after:content-[''] md:py-20">
      <div className="container relative z-20 h-full w-full max-w-[85rem]">
        <div className="flex h-full w-full flex-col justify-end gap-12">
          <div className="flex max-w-[61.375rem] flex-col gap-1">
            <p className="text-muted-foreground text-sm uppercase leading-none">
              #WORLDS NUMBER ONE
            </p>
            <h1 className="leading-snug! text-foreground text-3xl md:text-4xl lg:text-6xl">
              Designing Distinctive Spaces with Cutting-Edge Architectural
              Innovations
            </h1>
          </div>
          <div className="flex w-full flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="border-muted-foreground text-muted-foreground max-w-[20.25rem] border-l pl-6 text-base">
              Harnessing the power of architecture to reshape lives and uplift
              communities.
            </p>
            <div className="shrink-0">
              <Button
                asChild
                variant="outline"
                className="border-muted-foreground/40 text-foreground group flex h-fit w-fit items-center gap-3 rounded-full border bg-transparent px-6 py-4 text-sm uppercase hover:bg-transparent"
              >
                <a href="#">
                  <p className="group-hover:underline">Our projects</p>
                  <MoveUpRight className="h-4! w-4! fill-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero157 };
