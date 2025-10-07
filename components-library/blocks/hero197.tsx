import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero197 = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container">
        {/* Background pattern with dots */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--primary)_1px,transparent_1px)] opacity-25 [background-size:20px_20px]"></div>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="bg-background mb-6 px-4 py-1.5 text-sm"
            >
              Launching Soon <Sparkles className="ml-1 size-3.5" />
            </Badge>

            <h1 className="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
              Accelerate your development workflow
            </h1>

            <p className="text-muted-foreground mt-6 max-w-xl text-xl">
              Our intelligent platform helps teams automate routine tasks,
              streamline collaboration, and deliver higher quality code faster.
            </p>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <Button size="lg" className="w-full sm:w-auto">
                Get started for free
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero197 };
