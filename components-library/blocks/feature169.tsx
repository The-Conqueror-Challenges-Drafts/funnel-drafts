import { CircleHelp, Eye, Lightbulb, Volume2 } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DATA = [
  {
    title: "Unified Scheduling",
    description:
      "Keep all your appointments and events in sync with seamless cross-platform calendar connectivity.",
    icon: CircleHelp,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    title: "Insightful Performance",
    description:
      "Get clear, real-time analytics tracking your progress, key milestones, focus hours, and completed tasks.",
    icon: Volume2,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    title: "Effortless Tool Integrations",
    description:
      "Link your favorite apps and services to streamline work without switching between platforms.",
    icon: Lightbulb,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
];

const Feature169 = () => {
  return (
    <section id="optimized-scheduling" className="py-32">
      <div className="border-y">
        <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Eye className="size-4" />
            <span>Optimize</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Optimize every aspect of your day
          </h2>
          <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">
            Achieve seamless productivity with intelligent scheduling,
            insightful analytics, and effortless integrations.
          </p>
        </div>
      </div>

      <div className="lg:px-0! container border-x">
        <Tabs defaultValue={DATA[0].title} className="">
          <TabsList className="h-auto w-full bg-transparent p-0 max-lg:flex-col max-lg:divide-y lg:grid lg:grid-cols-3 lg:divide-x">
            {DATA.map((item, index) => (
              <TabsTrigger
                key={item.title}
                value={item.title}
                className="last:max-lg:border-b! group relative isolate inline-block h-full w-full whitespace-normal rounded-none px-1 py-5 text-start data-[state=active]:shadow-none max-lg:border-x lg:border-b lg:px-8"
              >
                <div className="bg-linear-to-r absolute bottom-[-1px] left-0 h-[1px] w-0 from-blue-600 via-sky-300 to-transparent transition-all duration-300 group-data-[state=active]:w-1/2" />
                <Accessory className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
                <Accessory className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                {index === DATA.length - 1 && (
                  <>
                    <Accessory className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2" />
                    <Accessory className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                  </>
                )}
                <div className="flex items-center gap-2 p-4">
                  <div className="relative size-6">
                    <div className="bg-linear-to-l to-border absolute inset-0 -rotate-45 rounded-full from-blue-600 via-sky-300 to-50% transition-all duration-1000 group-data-[state=inactive]:opacity-0" />
                    <div className="absolute inset-[0.75px] rounded-full bg-gray-100"></div>
                    <div className="bg-border absolute inset-[1.25px] grid place-items-center rounded-full">
                      <item.icon className="size-4" />
                    </div>
                  </div>
                  <h3 className="text-2xl tracking-[-0.36px]">{item.title}</h3>
                </div>
                <p className="text-muted-foreground p-4 pt-2 text-lg tracking-[-0.32px]">
                  {item.description}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>

          {DATA.map((item) => (
            <TabsContent key={item.title} value={item.title} className="mt-0">
              <div className="flex flex-1 flex-col p-6 max-lg:border-x lg:p-12">
                <div className="bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={1312}
                    height={743.926}
                    className="object-contain dark:invert"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

const Accessory = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(`bg-background size-2 rounded-[1px]`, className)}
      style={{
        boxShadow:
          "0px 0px 0px 0.1px rgba(0, 0, 0, 0.05), 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25)",
      }}
    ></div>
  );
};

export { Feature169 };
