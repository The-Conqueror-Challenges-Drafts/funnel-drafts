import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Hero190 = () => {
  return (
    <section className="py-32">
      <div className="flex border-t">
        <BorderedSection>
          <DiagonalPattern />
        </BorderedSection>
        <div className="container mx-auto pt-16 pb-12 text-center md:pt-20 lg:pt-28">
          <h1 className="mx-auto max-w-[500px] text-[2.5rem] leading-[1.2] tracking-[-1.6px] text-balance md:text-[4rem] md:leading-[1.15]! md:tracking-[-4.32px] lg:text-7xl">
            Say Goodbye to Task Overload
          </h1>
          <p className="mx-auto mt-5 max-w-[500px] leading-[1.5] tracking-[-0.32px] text-muted-foreground md:mt-6">
            Prioritize, automate, and stay ahead—AI simplifies your tasks so you
            can focus on what matters most.
          </p>
          <Button asChild className="mt-6 gap-1 md:mt-8 lg:mt-10">
            <a href="/dashboard">
              Get started
              <ChevronRight className="size-4" />
            </a>
          </Button>
        </div>
        <BorderedSection className="border-r-0 border-l">
          <DiagonalPattern />
        </BorderedSection>
      </div>
      <div className="flex h-8 gap-1 max-lg:hidden">
        <div className="flex-1 border" />
        <DiagonalPattern className="w-52" />
        <div className="w-24 border" />
        <DiagonalPattern className="w-52" />
        <div className="w-24 border" />
        <DiagonalPattern className="w-52" />
        <div className="flex-1 border" />
      </div>
      <div className="flex">
        <BorderedSection />
        <div className="container pt-0! lg:p-1.5!">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-aspect-video-1.svg"
            alt="Hero"
            className="rounded-xl border object-contain p-1"
            style={{
              boxShadow:
                "0px 8px 8px 0px rgba(0, 0, 0, 0.06), 0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 2px 2px 0px rgba(0, 0, 0, 0.06), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>
        <BorderedSection className="border-r-0 border-l" />
      </div>
      <div className="flex max-lg:hidden">
        <div className="h-8 flex-1 border" />
        <div className="h-[96px] w-[min(753px,55vw)] -translate-y-1.5">
          <DiagonalPattern />
        </div>
        <div className="h-8 flex-1 border" />
      </div>
    </section>
  );
};

export { Hero190 };

const BorderedSection = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn("relative w-[159px] border-r p-1 max-lg:hidden", className)}
  >
    {children}
  </div>
);

const DiagonalPattern = ({
  className,
  patternColor = "hsl(var(--foreground))",
  patternOpacity = 0.15,
}: {
  className?: string;
  patternColor?: string;
  patternOpacity?: number;
}) => {
  const svgPattern = `url("data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${patternColor}' fill-opacity='${patternOpacity}' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <div
      className={cn("h-full w-full border-2 border-dashed", className)}
      style={{
        backgroundImage: svgPattern,
      }}
    />
  );
};
