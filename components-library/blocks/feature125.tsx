"use client";

import { Check, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const checkedItems: string[] = [
  "Responsive Design and Layout",
  "Clean and Modern Design",
  "Easy to Customize",
];

const Feature125 = () => {
  return (
    <section className="m-x-auto container flex flex-col items-start gap-20 py-32 md:flex-row md:items-center">
      <div className="w-full lg:w-[40%]">
        <h2 className="mb-8 text-3xl font-bold">
          Build faster with our blocks built for shadcn/ui
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
          laboriosam voluptatibus temporibus doloremque laudantium.
        </p>
        <ul className="text-muted-foreground mb-8 flex flex-col gap-2">
          {checkedItems.map((item) => (
            <li className="flex items-center gap-2" key={item}>
              <Check className="size-5" /> {item}
            </li>
          ))}
        </ul>
        <Button variant="outline">
          See all blocks
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="before:bg-primary/10 relative flex h-[430px] w-full pr-4 pt-4 before:absolute before:inset-0 before:[mask-image:url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/cross-pattern.svg')] before:[mask-repeat:repeat] before:[mask-size:32px_32px]">
        <div className="z-1 to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent opacity-70"></div>
        <div className="relative mr-auto mt-auto w-[80%]">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder hero"
            className="z-40 max-h-[350px] w-full rounded-md object-cover"
          ></img>
        </div>
        <div className="bg-linear-to-r from-background absolute inset-0 z-50 via-transparent via-15%"></div>
        <div className="bg-linear-to-t from-background absolute inset-0 z-50 via-transparent via-15%"></div>
      </div>
    </section>
  );
};

export { Feature125 };
