import { Button } from "@/components/ui/button";

interface Integration {
  id: string;
  icon: string;
}

interface Hero32Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  integrations?: Integration[][];
}

const Hero32 = ({
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Fully decomposable components, all the images and background patterns are individual images or svgs that can be replaced.",
  button = {
    text: "Discover all components",
    url: "https://www.shadcnblocks.com",
  },
  integrations = [
    [
      {
        id: "integration-1",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
      },
      {
        id: "integration-2",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
      },
      {
        id: "integration-3",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
      },
      {
        id: "integration-4",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
      },
      {
        id: "integration-5",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
      },
    ],
    [
      {
        id: "integration-6",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg",
      },
      {
        id: "integration-7",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
      },
      {
        id: "integration-8",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
      },
      {
        id: "integration-9",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
      },
      {
        id: "integration-10",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
      },
    ],
    [
      {
        id: "integration-11",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
      },
      {
        id: "integration-12",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg",
      },
      {
        id: "integration-13",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
      },
      {
        id: "integration-14",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
      },
      {
        id: "integration-15",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
      },
    ],
  ],
}: Hero32Props) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="opacity-90 [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
        />
      </div>
      <div className="relative">
        <div className="md:-space-x-26 container relative flex flex-col items-start md:flex-row md:items-center">
          <div className="bg-background z-20 w-full shrink-0 pt-32 md:-mx-4 md:w-1/2 md:bg-transparent md:px-4 md:pb-32">
            <div className="flex flex-col items-start text-left">
              <div className="max-w-sm">
                <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                  {heading}
                </h1>
                <p className="text-muted-foreground">{description}</p>
                <Button asChild size="lg" className="mt-10">
                  <a href={button.url}>{button.text}</a>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex -translate-x-10 flex-col gap-8 pb-8 pt-12 sm:-translate-x-0 md:gap-16 md:py-32">
              {integrations.map((line, i) => (
                <div key={i} className="gap-x-22 even:translate-x-22 flex">
                  {line.map((integration) => (
                    <div
                      key={integration.id}
                      className="size-22 border-background bg-background rounded-xl border shadow-xl"
                    >
                      <div className="bg-muted/20 h-full w-full p-4">
                        <img
                          alt="Integration"
                          src={integration.icon}
                          className="size-full dark:invert"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero32 };
