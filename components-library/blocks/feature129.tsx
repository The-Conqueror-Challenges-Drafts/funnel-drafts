"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    id: 1,
    tabName: "Slack",
    tabDescription:
      "Communicate with your team, share updates, project discussions all in one place",
    link: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  },
  {
    id: 2,
    tabName: "Google Drive",
    tabDescription: "Store, access, and collaborate on files with ease",
    link: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
  },
  {
    id: 3,
    tabName: "Dropbox",
    tabDescription: "A reliable solution for file storage and sharing",
    link: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
  },
  {
    id: 4,
    tabName: "Github",
    tabDescription:
      "Manage your code repositories and collaborate on development projects",
    link: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
  },
];

const Feature129 = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <h2 className="mb-4 text-center text-4xl font-semibold md:text-5xl">
            Unify Your flow with Integrations
          </h2>
          <p className="text-muted-foreground text-center text-lg md:text-xl">
            Streamline your processes and enhance productivity by connecting all
            your favorite apps into one unified platform.
          </p>
        </div>
        <div className="mt-12">
          <Tabs
            defaultValue="1"
            className="mx-auto flex w-full flex-col items-center gap-8"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="flex h-auto flex-wrap rounded-full p-1">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id.toString()}
                  className={`rounded-full border border-solid border-transparent px-4 py-2 text-sm font-semibold transition ${activeTab === tab.id.toString() ? "border-muted-2 border border-solid shadow-sm" : ""}`}
                >
                  {tab.tabName}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent
                value={tab.id.toString()}
                key={tab.id}
                className="bg-accent mt-0 w-full overflow-hidden rounded-2xl px-14 pt-6 md:px-20 md:pt-8"
              >
                <div className="flex flex-col justify-between">
                  <div className="mb-8 flex flex-col items-center justify-center gap-2 md:flex-row">
                    <p className="text-sm">{tab.tabDescription}</p>
                    <a
                      href={tab.link}
                      className="font-sm border-muted-2 whitespace-nowrap border-b-2 border-solid font-semibold"
                    >
                      Learn more
                    </a>
                  </div>

                  <div className="shadow- bg-background flex w-full items-center justify-center rounded-t-2xl">
                    <img
                      src={tab.image}
                      alt={tab.tabName}
                      className="order-first w-full max-w-52 object-contain px-4 py-8 md:order-last md:max-w-64"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature129 };
