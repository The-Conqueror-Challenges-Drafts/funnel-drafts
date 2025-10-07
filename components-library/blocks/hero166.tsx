import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero166 = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container max-w-[111rem]">
        <div className="grid w-full grid-cols-1 items-center justify-between gap-14 lg:grid-cols-2">
          <div className="flex w-full max-w-[31.25rem] flex-col gap-8 md:gap-14 lg:max-w-full">
            <h1 className="font-serif text-5xl text-foreground md:text-6xl lg:text-7xl xl:text-[5rem]">
              Revolutionize your business operations
            </h1>
            <p className="font-montserrat text-2xl leading-snug text-foreground lg:text-3xl xl:text-4xl">
              The ultimate platform to unlock your agency’s capabilities.
            </p>
            <Button
              asChild
              className="block h-fit w-fit rounded-lg px-7 py-3.5 text-lg font-medium transition-all duration-300 hover:-translate-y-1"
            >
              <a href="#">Book a Demo</a>
            </Button>
          </div>
          <div className="mx-auto w-full max-w-[52.875rem] lg:mx-0">
            <AspectRatio ratio={1.049627792 / 1}>
              <div className="grid w-full grid-cols-2 items-center justify-center gap-4">
                <div className="flex flex-col items-end justify-center gap-4">
                  <div className="relative animate-[transform1_15s_ease-in-out_infinite] overflow-hidden rounded-lg">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt=""
                      className="absolute block h-full w-full animate-[image1_15s_ease-in-out_infinite] object-cover object-center"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                      alt=""
                      className="absolute block h-full w-full animate-[image2_15s_ease-in-out_infinite] object-cover object-center"
                    />
                  </div>
                  <div className="relative animate-[transform2_15s_ease-in-out_infinite] overflow-hidden rounded-lg">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                      alt=""
                      className="absolute block h-full w-full animate-[image1_15s_ease-in-out_infinite] object-cover object-center"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
                      alt=""
                      className="absolute block h-full w-full animate-[image2_15s_ease-in-out_infinite] object-cover object-center"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                      alt=""
                      className="absolute block h-full w-full animate-[image3_15s_ease-in-out_infinite] object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <div className="relative animate-[transform4_15s_ease-in-out_infinite] overflow-hidden rounded-lg">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt=""
                      className="absolute block h-full w-full animate-[image3_15s_ease-in-out_infinite] object-cover object-center"
                    />
                  </div>
                  <div className="relative animate-[transform3_15s_ease-in-out_infinite] overflow-hidden rounded-lg">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                      alt=""
                      className="absolute block h-full w-full animate-[image1_15s_ease-in-out_infinite] object-cover object-center"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
                      alt=""
                      className="absolute block h-full w-full animate-[image2_15s_ease-in-out_infinite] object-cover object-center"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg"
                      alt=""
                      className="absolute block h-full w-full animate-[image3_15s_ease-in-out_infinite] object-cover object-center"
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

export { Hero166 };
