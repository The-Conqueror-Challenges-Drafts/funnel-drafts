import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero180 = () => {
  return (
    <section className="bg-background py-12 font-sans md:py-20">
      <div className="container">
        <div className="flex flex-col gap-24">
          <div>
            <div className="relative z-10 mx-auto flex max-w-[55rem] flex-col gap-7">
              <h1 className="text-center text-5xl leading-[1.294] font-semibold text-foreground sm:text-[3.75rem] md:text-[4.25rem]">
                Conversation Intelligence{" "}
                <span className="relative text-nowrap after:absolute after:top-1/2 after:left-0 after:z-[-1] after:block after:h-[65%] after:w-full after:-translate-y-1/3 after:bg-muted after:content-['']">
                  at Your Fingertips
                </span>
              </h1>
              <p className="text-center text-xl leading-normal text-muted-foreground">
                Grain automates note-taking, record-keeping, and insight
                capture, allowing you to focus on what matters most—coaching
                your team and closing deals.
              </p>
              <div className="flex items-center justify-center gap-5">
                <Button
                  asChild
                  className="block h-fit w-fit rounded-full px-6 py-3 text-base leading-normal font-medium"
                >
                  <a href="#">Try For Free</a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="block h-fit w-fit rounded-full px-6 py-3 text-base leading-normal font-medium"
                >
                  <a href="#">Book a Demo</a>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="mx-auto w-full max-w-[81.25rem]">
              <AspectRatio ratio={1.818181818 / 1}>
                <div className="relative flex size-full flex-col justify-between">
                  <AspectRatio
                    ratio={3.714285714 / 1}
                    className="w-full rounded-xl bg-[linear-gradient(transparent,var(--color-muted))]"
                  />
                  <AspectRatio
                    ratio={3.714285714 / 1}
                    className="w-full rounded-xl bg-[linear-gradient(var(--color-muted),transparent)]"
                  />
                  <div className="border-muted2 absolute top-1/2 left-1/2 z-10 w-[87.69%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border">
                    <AspectRatio ratio={1.594405594 / 1}>
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                        alt=""
                        className="object-centers size-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <div className="absolute -top-[50%] left-1/2 z-0 w-[60%] -translate-x-1/2">
                    <AspectRatio
                      ratio={1}
                      className="bg-[radial-gradient(closest-side,var(--color-accent),transparent)]"
                    />
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero180 };
