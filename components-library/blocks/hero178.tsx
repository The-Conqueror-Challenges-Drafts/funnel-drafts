import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero178 = () => {
  return (
    <section className="relative border-b border-muted bg-background pt-10">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-2 md:gap-4 lg:grid-cols-2">
          <div className="flex w-full max-w-[31.25rem] flex-col gap-9 lg:max-w-[37.5rem] lg:py-[20%] xl:py-[26%]">
            <p className="font-mono text-[clamp(0.875rem,0.875vw,1rem)] text-muted-foreground">
              Customer Support
            </p>
            <h1 className="font-bebas_neue text-[clamp(3.5rem,calc(6.5vw+2.3rem),9.5rem)] leading-[0.85] tracking-[-0.03em] text-foreground">
              Change
              <br />
              their life
            </h1>
            <p className="text-[clamp(1.125rem,1.125vw,1.4rem)] leading-normal text-muted-foreground">
              Customer challenges and team missteps can cause chaos. Simplify
              delivering exceptional support with a platform designed for
              customer-focused teams like yours.
            </p>
          </div>
          <div>
            <div className="relative ml-8 aspect-square w-full max-w-[56.25rem] overflow-hidden lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2">
              <div className="absolute right-0 bottom-0 w-[85%] overflow-hidden rounded-lg">
                <AspectRatio ratio={0.918918919 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt=""
                    className="block size-full object-cover object-top-left"
                  />
                </AspectRatio>
              </div>
              <div className="absolute bottom-0 left-[0%] w-[70%] overflow-hidden rounded-tl-lg">
                <AspectRatio ratio={1.9 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                    alt=""
                    className="block h-full w-full object-cover object-center"
                  />
                </AspectRatio>
              </div>
              <div className="absolute right-[5%] bottom-0 w-[40%] overflow-hidden rounded-tl-lg rounded-tr-lg shadow-md">
                <AspectRatio ratio={0.776119403 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                    alt=""
                    className="block h-full w-full object-cover object-top"
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

export { Hero178 };
