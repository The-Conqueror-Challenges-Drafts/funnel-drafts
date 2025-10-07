import {
  ArrowUpRight,
  AudioLines,
  Box,
  Fingerprint,
  LocateFixed,
} from "lucide-react";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const teamFeatures = [
  {
    id: 1,
    icon: LocateFixed,
    title:
      "Moving fast and tackling complexity Building systems that scale at OpenAI",
    description: "Innovative approaches to system design and scalability",
    href: "#",
  },
  {
    id: 2,
    icon: AudioLines,
    title:
      "Collaborative Innovation Driving technological breakthroughs breakthroughs ",
    description: "Teamwork that pushes the boundaries of what's possible",
    href: "#",
  },
  {
    id: 3,
    icon: Box,
    title:
      "Agile Development Rapid iteration and continuous improvement improvement",
    description: "Adapting quickly to changing technological landscapes",
    href: "#",
  },
  {
    id: 4,
    icon: Fingerprint,
    title:
      "Cross-Functional Excellence Breaking down silos, fostering innovation",
    description: "Integrating diverse skills and perspectives",
    href: "#",
  },
];

const Feature241 = () => {
  return (
    <section className="bg-background overflow-hidden py-32">
      <div className="container">
        <div className="relative">
          <header className="mb-15 max-w-2xl">
            <h1 className="text-foreground mb-8 text-5xl font-bold tracking-tighter lg:text-7xl">
              Meet the teams who build the future
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed tracking-tight md:text-xl">
              Finely crafted components built with React, Tailwind and Shadcn
              UI. Developers can copy and adapt.
            </p>
          </header>
          <div className="-top-15 absolute -right-10 hidden transition-all ease-in-out group-hover:-rotate-0 lg:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-browser-window-with-tab-bars.svg"
              className="size-150 md:size-100"
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {teamFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <a
                key={feature.id}
                href={feature.href}
                className="block transition-all duration-500 ease-in-out"
              >
                <Card className="rounded-none! border-border bg-background hover:bg-linear-to-l hover:to-muted group relative border p-6 shadow-none transition-all duration-500 ease-in-out hover:from-transparent">
                  <CardContent className="flex h-full flex-col justify-between p-0">
                    <div className="size-15 border-border bg-muted group-hover:bg-background flex items-center justify-center border transition-colors duration-500 ease-in-out ">
                      <Icon
                        size={30}
                        className="transition-all duration-500 ease-in-out"
                      />
                    </div>

                    <h3 className="text-foreground lg:pr-30 mt-4 text-xl font-semibold leading-tight tracking-tight transition-all duration-500 ease-in-out md:text-2xl lg:text-3xl">
                      {feature.title}
                    </h3>

                    <div className="border-border bg-muted absolute bottom-6 right-6 flex size-12 items-center justify-center border opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                      <ArrowUpRight className="text-foreground h-[27px] w-[27px] transition-all duration-500 ease-in-out group-hover:rotate-45" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Feature241 };
