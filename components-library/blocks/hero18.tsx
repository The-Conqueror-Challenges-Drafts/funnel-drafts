import { Button } from "@/components/ui/button";

const Hero18 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
          Welcome to Our Website
        </h1>
        <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
          doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur.
          Explicabo.
        </p>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
          <Button className="w-full sm:w-auto">Primary</Button>
          <Button variant="outline" className="w-full sm:w-auto">
            Secondary
          </Button>
        </div>
      </div>
      <div className="border-border mt-12 aspect-video overflow-clip border-b sm:mt-32 md:aspect-auto md:h-[420px]">
        <div className="relative mx-auto flex max-w-3xl flex-col">
          {/* Left icons */}
          <div className="bg-accent ring-accent-foreground/10 absolute right-[calc(100%+63px)] top-0 hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              alt="placeholder hero"
              className="h-full w-full object-cover object-center p-3 sm:rounded-md dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute right-[calc(100%+195px)] top-[52px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute right-[calc(100%+34px)] top-[144px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute right-[calc(100%+268px)] top-[164px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute right-[calc(100%+156px)] top-[240px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute right-[calc(100%+242px)] top-[340px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute right-[calc(100%+66px)] top-[366px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          {/* Right icons */}
          <div className="bg-accent ring-accent-foreground/10 absolute left-[calc(100%+53px)] top-0 hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute left-[calc(100%+202px)] top-[34px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute left-[calc(100%+97px)] top-[141px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute left-[calc(100%+282px)] top-[138px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute left-[calc(100%+42px)] top-[262px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute left-[calc(100%+234px)] top-[282px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          <div className="bg-accent ring-accent-foreground/10 absolute left-[calc(100%+112px)] top-[365px] hidden size-[64px] rounded-2xl ring-1 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3 dark:invert"
            />
          </div>
          {/* Hero images */}
          <div className="container mx-auto">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder hero"
              className="border-border bg-accent mt-6 flex aspect-square w-full flex-col items-center overflow-clip rounded-t-xl border sm:rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero18 };
