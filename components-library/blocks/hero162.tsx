import { Button } from "@/components/ui/button";

const Hero162 = () => {
  return (
    <section className="bg-background dark relative font-sans lg:h-[62.5rem]">
      <div className="container flex h-full w-full items-center py-20 lg:py-0">
        <div className="mx-auto grid h-full w-full max-w-[87.5rem] grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div>
            <h1 className="text-foreground mb-4 text-6xl font-medium leading-tight">
              Setting New Industry Standards Through Excellence
            </h1>
            <p className="text-foreground text-2xl">
              Professional Support for Mental Wellness. Personalized Care for
              Emotional Balance.
            </p>
            <div className="mt-10">
              <Button
                asChild
                variant="outline"
                className="hover:bg-background block h-fit w-fit rounded-lg border-2 border-white bg-transparent px-8 py-5 text-lg font-medium leading-tight text-white transition duration-500 hover:scale-105 hover:text-black"
              >
                <a href="#">Our services</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 left-auto right-0 top-0 m-5 ml-0 w-full px-8 pb-5 lg:absolute lg:max-w-[50%] lg:px-0">
        <div className="grid h-full w-full grid-cols-1 grid-rows-[18.75rem_13.125rem_10rem] gap-5 md:grid-cols-[3fr_2fr] md:grid-rows-[80%_minmax(20%,9.375rem)]">
          <div className="row-[1/2] overflow-hidden md:col-[1/3]">
            <div className="bg-muted h-full w-full overflow-hidden rounded-3xl">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="col-[1/2] row-[2/3]">
            <div className="bg-muted flex h-full flex-col gap-3 overflow-hidden rounded-3xl p-5 px-5 md:flex-row md:items-center md:gap-7 md:py-8">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl md:h-[7.5rem] md:w-[7.5rem]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex h-full w-full flex-col justify-between gap-2">
                <p className="text-foreground text-lg font-medium">
                  &quot;Since beginning therapy here, I feel more grounded and
                  at ease.&quot;
                </p>
                <p className="text-foreground">John Doe</p>
              </div>
            </div>
          </div>
          <div className="row-[3/4] md:col-[2/3] md:row-[2/3]">
            <div className="bg-muted h-full w-full overflow-hidden rounded-3xl">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero162 };
