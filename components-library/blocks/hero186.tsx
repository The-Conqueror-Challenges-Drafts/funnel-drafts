import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Tailored workflows",
    description: "Track progress across custom issue flows for your team.",
    icon: CircleDot,
  },
  {
    title: "Milestones",
    description: "Break projects down into concrete phases.",
    icon: Diamond,
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across teams and departments.",
    icon: Blend,
  },
  {
    title: "Progress insights",
    description: "Track scope, velocity, and progress over time.",
    icon: ChartNoAxesColumn,
  },
];

const Hero186 = () => {
  return (
    <section className="bg-linear-to-b from-background via-background to-background relative mx-2.5 mt-2.5 rounded-b-[36px] rounded-t-2xl lg:mx-4">
      <div className="py-32">
        <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row">
          {/* Left side - Main content */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Shadcnblocks components for your next project
            </h1>

            <p className="text-muted-foreground mt-5 text-2xl">
              Streamline is the fit-for-purpose tool for planning and building
              modern software products.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button>Get started</Button>
              <a href="#">
                <Button variant="outline" className="h-auto">
                  <span className="flex items-center gap-2 whitespace-pre-wrap text-start">
                    Documentation <ArrowRight />
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:ps-10">
            <DashedLine
              orientation="vertical"
              className="absolute left-0 top-0 max-lg:hidden"
            />
            <DashedLine
              orientation="horizontal"
              className="absolute top-0 lg:hidden"
            />
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                  <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-semibold">{feature.title}</h2>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container mt-12 md:mt-20 lg:mt-24">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
            alt="hero"
            className="w-full rounded-2xl object-cover object-center sm:h-[500px] lg:h-[793px]"
          />
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "text-muted-foreground relative",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ],
        )}
      />
    </div>
  );
};

export { Hero186 };
