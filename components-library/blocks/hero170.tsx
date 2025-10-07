import { FaGithub } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

const Hero170 = () => {
  return (
    <section className="dark overflow-hidden bg-background pt-12 font-sans md:pt-20">
      <div className="container">
        <div className="mx-auto max-w-[48.75rem]">
          <h1 className="mb-6 text-center text-3xl leading-tight font-bold text-foreground md:text-4xl lg:text-5xl">
            Unlock the potential of your startup with our app.
          </h1>
          <p className="mx-auto mb-9 max-w-[37.5rem] text-center text-base font-medium text-foreground md:text-lg">
            Experience a revolutionary dashboard that empowers your team with
            real-time data, efficient project management, and enhanced
            collaboration tools.
          </p>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-5">
            <Button
              asChild
              className="block h-fit w-fit rounded-md px-7 py-[0.875rem] font-medium"
            >
              <a href="#">Download</a>
            </Button>
            <Button
              variant="secondary"
              asChild
              className="flex h-fit w-fit items-center gap-4 rounded-md px-7 py-[0.875rem] font-medium"
            >
              <a href="#">
                <FaGithub className="size-6!" />
                <div>Star on Github</div>
              </a>
            </Button>
          </div>
          <p className="mb-4 text-center text-muted-foreground">
            Explore our integration options.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="icon" variant="ghost" className="block w-fit">
              <a href="#">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                  alt=""
                  className="size-10 invert"
                />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" className="block w-fit">
              <a href="#">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
                  alt=""
                  className="size-10 invert"
                />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" className="block w-fit">
              <a href="#">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
                  alt=""
                  className="size-10 invert"
                />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" className="block w-fit">
              <a href="#">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg"
                  alt=""
                  className="size-10 invert"
                />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" className="block w-fit">
              <a href="#">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg"
                  alt=""
                  className="size-10 invert"
                />
              </a>
            </Button>
          </div>
        </div>
        <div>
          <div className="relative mx-auto mt-16 w-full max-w-[52.8rem]">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-aspect-video-1.svg"
              alt=""
              className="relative z-20 -mb-[2px] block w-full rounded-tl-lg rounded-tr-lg"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dots.svg"
              alt=""
              className="absolute top-0 right-0 z-10 h-20 w-20 translate-x-[20%] -translate-y-[30%] sm:h-32 sm:w-32 md:h-40 md:w-40"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dots.svg"
              alt=""
              className="absolute bottom-0 left-0 z-10 h-20 w-20 -translate-x-[30%] translate-y-[30%] sm:h-32 sm:w-32 md:h-40 md:w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero170 };
