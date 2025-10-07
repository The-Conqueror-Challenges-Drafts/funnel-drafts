import { ArrowRight, CirclePlay } from "lucide-react";

import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero175 = () => {
  return (
    <section className="dark font-public_sans relative bg-background py-12 before:absolute before:top-0 before:left-0 before:z-10 before:block before:h-[15rem] before:w-full before:bg-linear-to-b before:from-muted before:to-transparent before:content-[''] md:py-32">
      <div className="relative z-20 container">
        <div className="relative z-20 mx-auto flex max-w-[56.25rem] flex-col items-center gap-6">
          <a
            href="#"
            className={`${badgeVariants({ variant: "outline" })} border-muted2 mb-4 flex w-fit items-center gap-1 rounded-full border bg-muted px-2.5 py-1.5 hover:border-primary`}
          >
            <p className="text-sm font-semibold text-primary">
              Check out our new features
            </p>
            <ArrowRight className="h-4 w-4 stroke-primary" />
          </a>
          <h1 className="w-full text-center text-5xl font-bold text-foreground md:text-7xl">
            The Best Developer Friendly{" "}
            <span className="text-primary">Framework</span>
          </h1>
          <p className="text-center text-lg text-muted-foreground">
            This is an open-source framework that simplifies web development
            while packing a punch. Build high-performance, production-ready
            full-stack web apps and websites with ease and confidence.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Button
              asChild
              className="flex h-fit items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium"
            >
              <a href="#">
                <div>Get Started</div>
                <ArrowRight className="size-5!" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="flex h-fit items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium text-white"
            >
              <a href="#">
                <div>Watch Demo</div>
                <CirclePlay className="size-5! stroke-white" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero175 };
