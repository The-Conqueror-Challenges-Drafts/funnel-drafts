import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
const Hero58 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-8 lg:gap-12">
            <h1 className="text-5xl font-semibold lg:text-7xl">
              Your workspace <br />
              <span className="mx-1 inline-block whitespace-nowrap">
                anywhere.
              </span>
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              Set up your environment with everything you need and share it
              effortlessly. Stay productive throughout your workflow, no matter
              where you are.
            </p>
            <Button size="lg" className="w-fit">
              Get Started
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,var(--muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--muted)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:64px_64px]"></div>
            {/* illustrations available from https://icons8.com/illustrations/style--tokyo */}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-selecting-the-elements-of-the-horizontal-graph-chart.svg"
              alt="placeholder"
              className="mx-auto max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero58 };
