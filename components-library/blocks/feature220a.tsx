import { ArrowRight } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  {
    number: "52%",
    text: "boost in user retention",
  },
  {
    number: "40%",
    text: "decrease in development time",
  },
  {
    number: "2.5x",
    text: "increase in feature adoption",
  },
];

const Feature220a = () => {
  return (
    <section className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat py-24">
      <div className="container max-w-5xl">
        {/* Main Content */}
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            ⚡ Supercharge Your Workflow
          </Badge>
          <h2 className="leading-tighter mb-6 text-5xl font-semibold tracking-tight lg:text-6xl">
            Ship Beautiful UIs
            <span className="text-primary block">In Record Time</span>
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl font-medium leading-relaxed">
            Transform your development process with pre-built components that
            adapt to your design system and accelerate your time-to-market.
          </p>
          <Button size="lg" className="px-8 py-6 text-lg">
            Start Building
            <ArrowRight />
          </Button>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-3xl">
            <video
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-8.mp4"
              className="block size-full object-cover object-center"
              loop
              autoPlay
              muted
              controls={false}
            />
          </AspectRatio>
        </div>

        {/* Stats */}
        <div className="bg-card rounded-2xl p-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((item, i) => (
              <div className="text-center" key={`stats-${i}`}>
                <div className="text-primary mb-2 text-4xl font-bold">
                  {item.number}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature220a };
