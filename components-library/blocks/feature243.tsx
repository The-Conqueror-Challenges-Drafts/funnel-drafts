import { Cog, Gem, Landmark, LocateFixed } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Feature243 = () => {
  const steps: Step[] = [
    {
      title: "Initialization",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: (
        <LocateFixed className="size-10 stroke-white transition-all ease-in-out group-hover:rotate-90" />
      ),
    },
    {
      title: "Optimization",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: (
        <Cog className="size-10 stroke-white transition-all ease-in-out group-hover:rotate-90" />
      ),
    },
    {
      title: "Efficiency",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: (
        <Gem className="size-10 stroke-white transition-all ease-in-out group-hover:size-12" />
      ),
    },
    {
      title: "Finalization",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: (
        <Landmark className="size-10 stroke-white transition-all ease-in-out group-hover:size-12" />
      ),
    },
  ];

  return (
    <section className="bg-background">
      <div className="container py-32">
        <header className="bg-background relative z-10 flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-foreground text-5xl font-bold tracking-tighter lg:text-6xl">
            From Input to Outcome
          </h1>

          <p className="text-muted-foreground mb-4 mt-2 max-w-xl text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipiasicing elit.Lorem ipsum
            dolor sit amet consectetur
          </p>
        </header>

        <div className="gap-18 sm:mt-68 mt-24 flex flex-wrap items-center justify-center sm:gap-6">
          <div className="h-55 bg-muted lg:h-58 absolute left-1/2 top-40 w-0.5 rounded-full" />
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex w-fit flex-col items-center"
            >
              <div
                className={cn(
                  "bg-muted absolute -top-[174px] left-1/2 h-0.5 w-[109%] rounded-full",
                  index == 3 ? "hidden" : "",
                  index == 2 ? "hidden 2xl:block" : "",
                  index == 1 ? "hidden lg:block" : "",
                  index == 0 ? "hidden sm:block" : "",
                )}
              />
              <div className="bg-muted absolute -top-[174px] left-1/2 h-full w-0.5 rounded-full" />
              <div className="bg-background relative z-10 flex h-8 w-5 items-center justify-center rounded-full p-1 pb-5">
                <div className="bg-foreground relative z-10 size-3 rounded-full" />
              </div>

              <Card className="rounded-4xl bg-muted group relative z-10 h-full w-full overflow-hidden border-none shadow-none sm:w-64 md:w-72">
                <CardContent className="flex h-full flex-col items-center gap-5 p-0 pb-5 pt-10">
                  <div className="bg-foreground flex size-20 items-center justify-center rounded-3xl">
                    {step.icon}
                  </div>

                  <div className="flex w-full flex-col items-center gap-4 px-4 pb-3 pt-5">
                    <h3 className="text-foreground w-full text-center text-3xl font-semibold tracking-tighter">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground/70 w-full max-w-sm text-center font-medium">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature243 };
