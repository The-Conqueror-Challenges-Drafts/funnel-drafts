import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero168 = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row xl:gap-20">
          <div className="flex w-full flex-col items-start text-left">
            <h1 className="mb-8 text-pretty text-4xl font-normal md:text-7xl">
              Welcome to Our Website
            </h1>
            <p className="text-muted-foreground mb-12 max-w-[70%] text-xl font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full justify-start md:justify-start">
              <Button className="px-5 py-3" variant="outline">
                Get Started <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
          <div className="relative flex h-[600px] w-full rounded-md sm:h-[750px]">
            <div className="bg-linear-to-b from-muted/50 to-muted absolute flex h-[600px] w-screen rounded-md sm:h-[750px]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt="placeholder"
                className="my-auto ml-20 block h-4/6 w-auto rounded-md object-cover md:w-2/5"
              />
              <div className="absolute -left-5 top-1/2 md:-left-20 lg:-left-44">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                  alt="placeholder"
                  className="mb-6 h-[134px] w-[230px] rounded-lg object-cover shadow-md lg:h-[142px] lg:w-[265px]"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                  alt="placeholder"
                  className="bg-muted h-[115px] w-[230px] rounded-lg shadow-md lg:h-[122px] lg:w-[265px]"
                />
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                alt="placeholder"
                className="bg-muted absolute -left-5 bottom-[70%] h-[146px] w-[230px] rounded-lg shadow-md md:bottom-10 md:left-1/4 lg:h-[156px] lg:w-[265px] 2xl:left-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero168 };
