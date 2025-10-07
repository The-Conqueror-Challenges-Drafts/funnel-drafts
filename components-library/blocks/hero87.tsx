import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero87 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h1 className="text-5xl lg:text-7xl">
          The Perfectly Adaptable Product for Your Business
        </h1>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-lg text-muted-foreground lg:text-xl">
              It delivers unique and customizable products designed for your
              business. Say farewell to rigid options, lengthy launch times, and
              branding limitations. Embrace a product that evolves with your
              needs and fuels your innovation. Highnote is the adaptable
              solution for your business.
            </p>
            <Button size="lg" className="mt-12">
              Consult with an Expert
              <ArrowRight className="ml-2 h-auto w-4" />
            </Button>
          </div>
          <div className="relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 -top-1 -z-10 mx-auto h-full w-full max-w-3xl bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:56px_56px] opacity-15"></div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
              alt="placeholder"
              className="max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero87 };
