import { Sparkles } from "lucide-react";
import React from "react";

import { ThreeDMarquee } from "@/components/aceternity/3d-marquee";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Feature267 = () => {
  const images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img10.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img15.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img16.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img17.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img18.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img19.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img20.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img21.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img22.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img23.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img24.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img26.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img27.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg",
  ];

  return (
    <section className="relative h-full w-screen overflow-hidden py-32">
      <div className="container grid grid-cols-1 items-center gap-5 lg:grid-cols-2">
        <div className="flex h-full flex-col justify-center">
          <div className="flex items-center gap-2">
            <Sparkles className="size-5 fill-foreground  " />
            <p className="w-fit rounded-full py-1 font-medium tracking-tight">
              shadcn Blocks
            </p>
          </div>
          <h1 className="mb-8 mt-3 max-w-xl text-5xl font-medium font-semibold tracking-tighter lg:max-w-3xl lg:text-6xl">
            Drop-In Ready Blocks to Supercharge Your App
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
          <div className="mt-10 gap-4">
            <div className="h-15 flex w-full max-w-md items-center rounded-full border p-1">
              <Input
                className="w-full rounded-full border-none shadow-none ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-0 active:ring-0"
                placeholder="Enter your email"
              />
              <Button className="h-full rounded-full">Subscribe Now</Button>
            </div>
          </div>
        </div>

        <div className="items-center justify-center">
          <ThreeDMarquee className="rounded-none" images={images} />
        </div>
      </div>
    </section>
  );
};

export { Feature267 };
