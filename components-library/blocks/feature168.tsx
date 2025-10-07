import { PocketKnife } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";

const DATA = [
  {
    title: "Unified Scheduling",
    description:
      "Keep all your appointments and events in sync with seamless cross-platform calendar connectivity.",
    icon: "CircleHelp",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  },
  {
    title: "Insightful Performance",
    description:
      "Get clear, real-time analytics tracking your progress, key milestones, focus hours, and completed tasks.",
    icon: "Volume2",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
  },
  {
    title: "Effortless Tool Integrations",
    description:
      "Link your favorite apps and services to streamline work without switching between platforms.",
    icon: "Lightbulb",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
  },
];
const Feature168 = () => {
  return (
    <section className="py-32">
      <div className="border-y">
        <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <PocketKnife className="size-4" />
            <span>Features</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Smart productivity with AI
          </h2>
          <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">
            Unlock smarter productivity with features that help you manage
            tasks, time, and focus—seamlessly.
          </p>
        </div>
      </div>

      <div className="lg:px-0! container border-x">
        <div className="items-center">
          <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
            {DATA.map((item, index) => (
              <div
                key={index}
                className="relative isolate pt-5 text-start lg:pt-20"
              >
                <h3 className="mt-2 px-4 text-lg font-semibold tracking-tight lg:px-8">
                  {item.title}
                </h3>
                <p className="text-muted-foreground pb-6 pt-2 lg:px-8">
                  {item.description}
                </p>
                <div className="border-t">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="bg-muted p-12 dark:invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Feature168 };
