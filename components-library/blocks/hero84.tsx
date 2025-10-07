import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const Hero84 = () => {
  return (
    <section className="h-svg bg-background dark overflow-hidden pt-12 font-sans md:pt-20">
      <div className="container">
        <div className="mb-24 flex flex-col items-center gap-8">
          <Badge className="text-foreground w-fit rounded-full border border-white bg-transparent px-8 py-2.5 text-center text-sm font-semibold hover:bg-transparent">
            Uniqueness
          </Badge>
          <div>
            <h1 className="text-foreground mb-5 text-center text-5xl font-bold">
              Unify everything in one space
            </h1>
            <p className="text-foreground max-w-[820px] text-center text-xl font-medium">
              An all-in-one platform for seamless collaboration, our app merges
              client-facing portals with internal project management tools to
              streamline every phase of client projects.
            </p>
          </div>
        </div>
        <div className="relative mx-auto aspect-[2.488709677/1] max-w-[87.5rem]">
          <div className="absolute bottom-0 right-0 z-10 w-[27%] overflow-hidden">
            <AspectRatio ratio={0.924193548 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt=""
                className="object-top-left block size-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="absolute bottom-0 right-[14%] z-20 w-[32%] overflow-hidden shadow-xl">
            <AspectRatio ratio={0.924193548 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt=""
                className="object-top-left block size-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="absolute bottom-0 left-1/2 z-30 w-[37%] -translate-x-1/2 overflow-hidden shadow-xl">
            <AspectRatio ratio={0.924193548 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt=""
                className="object-top-left block size-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="absolute bottom-0 left-[14%] z-20 w-[32%] overflow-hidden shadow-xl">
            <AspectRatio ratio={0.924193548 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                alt=""
                className="object-top-left block size-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="absolute bottom-0 left-0 z-10 w-[27%] overflow-hidden">
            <AspectRatio ratio={0.924193548 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
                alt=""
                className="object-top-left block size-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero84 };
