import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero165 = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container max-w-[98.125rem]">
        <div className="grid grid-cols-1 items-center justify-between gap-14 lg:grid-cols-2">
          <div className="w-full max-w-[41.625rem]">
            <AspectRatio ratio={0.815177479 / 1}>
              <div className="mx-auto grid h-full w-full grid-cols-[14.7%_47.29%_14.7%_14.7%] grid-rows-[34.7%_26.28%_34.7%] gap-x-[2.85%] gap-y-[2.32%]">
                <div className="col-[1/3] row-[1/3]">
                  <div className="h-full w-full overflow-hidden rounded-[2vw] bg-blue-100 lg:rounded-[1.2vw] xl:rounded-2xl">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="col-[3/5] row-[2/3]">
                  <div className="h-full w-full overflow-hidden rounded-[2vw] bg-green-100 lg:rounded-[1.2vw] xl:rounded-2xl">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="col-[2/4] row-[3/4]">
                  <div className="h-full w-full overflow-hidden rounded-[2vw] bg-pink-100 lg:rounded-[1.2vw] xl:rounded-2xl">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </AspectRatio>
          </div>
          <div className="flex w-full max-w-[31.25rem] flex-col gap-14 lg:max-w-full">
            <h1 className="font-serif text-6xl text-foreground lg:text-7xl xl:text-[5rem]">
              Revolutionize your business operations
            </h1>
            <p className="font-montserrat text-2xl leading-snug text-foreground lg:text-3xl xl:text-4xl">
              The ultimate platform to unlock your agency’s capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero165 };
