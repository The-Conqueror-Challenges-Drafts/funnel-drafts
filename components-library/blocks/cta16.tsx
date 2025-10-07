import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

const Cta16 = () => {
  return (
    <section className="py-32">
      <div className="flex h-[620px] items-center justify-center bg-[linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-xOLhD-qfoRI-unsplash.jpg')] bg-cover bg-center">
        <div className="container">
          <div className="text-primary-foreground flex flex-col gap-8 p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-medium">
              <Zap className="h-full w-7" /> Faster
            </div>
            <h2 className="text-5xl font-bold">Build your website faster.</h2>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 hover:bg-background/30 hover:text-primary-foreground border-0 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta16 };
