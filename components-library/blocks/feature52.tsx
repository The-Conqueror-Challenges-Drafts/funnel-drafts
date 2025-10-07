import {
  Blocks,
  Fingerprint,
  LayoutPanelTop,
  MessageCircleMore,
  Users,
  Workflow,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    title: "Communication",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    icon: (
      <MessageCircleMore
        className="text-primary size-6 lg:size-8"
        strokeWidth={1.5}
      />
    ),
  },
  {
    title: "Integrations",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    icon: (
      <Blocks className="text-primary size-6 lg:size-8" strokeWidth={1.5} />
    ),
  },
  {
    title: "Collaboration",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    icon: <Users className="text-primary size-6 lg:size-8" strokeWidth={1.5} />,
  },
  {
    title: "Automation",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    icon: (
      <Workflow className="text-primary size-6 lg:size-8" strokeWidth={1.5} />
    ),
  },
  {
    title: "Customization",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    icon: (
      <LayoutPanelTop
        className="text-primary size-6 lg:size-8"
        strokeWidth={1.5}
      />
    ),
  },
  {
    title: "Security",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    icon: (
      <Fingerprint
        className="text-primary size-6 lg:size-8"
        strokeWidth={1.5}
      />
    ),
  },
];

const Feature52 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <Tabs defaultValue="feature-1">
          <TabsList className="bg-background flex h-full w-full flex-wrap justify-between gap-2 p-0">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={`feature-${index + 1}`}
                className="border-muted-2 bg-muted text-primary hover:border-primary/40 hover:ring-input data-[state=active]:border-primary/60 data-[state=active]:bg-background flex flex-1 flex-col items-start justify-start gap-2 whitespace-normal rounded-md border px-2 py-4 text-left hover:ring-1 data-[state=active]:border lg:py-6"
              >
                <div className="flex w-full flex-col items-center gap-4">
                  {tab.icon}
                  <p className="text-sm font-semibold lg:text-base">
                    {tab.title}
                  </p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab, index) => (
            <TabsContent key={index} value={`feature-${index + 1}`}>
              <img
                src={tab.image}
                alt=""
                className="aspect-video w-full rounded-md object-cover"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { Feature52 };
