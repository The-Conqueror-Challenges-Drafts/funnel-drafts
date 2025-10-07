import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero123 = () => {
  return (
    <section className="bg-muted">
      <div className="container py-12 sm:py-32">
        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="">
            <span className="mb-4 block font-mono text-lg font-medium">
              Library / Playlist
            </span>
            <h1 className="text-7xl font-medium tracking-tight text-foreground">
              Unlock your next big opportunity
            </h1>
            <p className="pt-10 text-lg leading-8 text-foreground">
              Discover innovative solutions tailored to transform your vision
              into reality. Explore new ways to elevate your projects with
              creativity and precision.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button
                asChild
                className="h-fit rounded-full px-8 py-4 text-lg font-semibold shadow-sm"
              >
                <a href="#">Get a demo</a>
              </Button>
            </div>
          </div>
          <div>
            {/* images from Figma Apple Widgets UI Kit https://www.figma.com/community/file/857332868558500566 */}
            <div className="relative mx-auto max-w-[596px] overflow-hidden rounded-lg bg-primary pt-6 pl-6 lg:mx-0">
              <AspectRatio
                ratio={0.9104 / 1}
                className="overflow-hidden rounded-tl-md"
              >
                <img
                  alt=""
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  className="block size-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero123 };
