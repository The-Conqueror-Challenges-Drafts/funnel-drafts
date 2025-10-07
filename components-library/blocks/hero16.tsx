import { Button } from "@/components/ui/button";

const Hero16 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-3 text-3xl font-bold text-pretty sm:text-4xl md:my-6 lg:text-6xl">
          Welcome to Our Website
        </h1>
        <p className="mb-6 max-w-xl text-muted-foreground lg:mb-12 lg:text-2xl">
          Elig doloremque mollitia fugiat omnis! Porro facilis quo animi
          consequatur.
        </p>
        <div className="mb-6 flex gap-2 lg:mb-12">
          <Button>Primary</Button>
          <Button variant="outline">Secondary</Button>
        </div>
      </div>
      <div className="container">
        <div className="aspect-video [mask-image:linear-gradient(#000_80%,transparent_100%)]">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder hero"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero16 };
