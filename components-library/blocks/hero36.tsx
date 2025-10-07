import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

// Move card data outside the component
const heroCards = [
  {
    title: "Product Design",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    title: "Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    title: "Marketing",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
];

const Hero36 = () => {
  return (
    <section className="relative overflow-hidden bg-accent py-24 md:py-32">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]"></div>
      </div>
      <div className="relative container flex flex-col items-center text-center">
        <Badge
          variant="outline"
          className="px-4 py-1.5 text-xs font-medium uppercase"
        >
          New Release
        </Badge>
        <h1 className="my-4 max-w-3xl text-2xl font-bold text-pretty sm:text-4xl md:my-6 lg:text-5xl">
          Our blocks help global companies expand into new markets
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Discover how our powerful building blocks can transform your business
          and drive growth
        </p>
      </div>
      <div className="container mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        {heroCards.map((item, index) => (
          <a
            key={index}
            href="#"
            className={cn(
              "relative flex flex-col items-center rounded-xl border bg-background/70 px-6 py-10 text-center backdrop-blur-sm lg:px-8 lg:py-12",
              index === 1 && "md:translate-y-4",
            )}
          >
            <div className="mb-6 flex aspect-square w-16 items-center justify-center md:w-20 lg:mb-8">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain object-center"
              />
            </div>
            <h3 className="mb-3 text-lg font-semibold md:text-xl">
              {item.title}
            </h3>
            <p className="mb-auto text-sm text-muted-foreground">
              {item.description}
            </p>
            <div className="mt-8 flex items-center text-primary md:mt-10">
              <span className="font-medium">See more</span>
              <ArrowRight className="ml-2 size-4" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { Hero36 };
