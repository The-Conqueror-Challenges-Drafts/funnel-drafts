import { ArrowRight, DollarSign, Medal, Sparkle, Zap } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero68 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="border-x border-t border-dashed px-4 py-20 md:px-16">
          <div className="mx-auto max-w-3xl">
            <a
              href="#"
              className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm"
            >
              <Badge>New</Badge>
              v2.2 is out now!
              <ArrowRight className="inline size-4" />
            </a>
            <h1 className="my-4 mb-6 text-center text-3xl font-semibold lg:text-8xl">
              Fast websites for startups
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground lg:text-xl">
              We craft powerful websites to accelerate your startup&apos;s
              growth.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg" className="w-full gap-2 sm:w-auto lg:mt-10">
                <div className="size-2 rounded-full bg-green-400"></div>
                Start your free trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full gap-2 sm:w-auto lg:mt-10"
              >
                <Avatar className="size-8 rounded-full ring-1 ring-input">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt="placeholder"
                  />
                </Avatar>
                Schedule a demo
              </Button>
            </div>
          </div>
        </div>
        <div className="relative grid border-x border-dashed md:grid-cols-3">
          <Sparkle className="absolute top-0 right-0 h-auto w-5 translate-x-2.5 -translate-y-2.5 fill-primary" />
          <Sparkle className="absolute top-0 left-0 h-auto w-5 -translate-x-2.5 -translate-y-2.5 fill-primary" />
          <div className="flex items-center gap-6 border-t border-dashed p-4 font-medium md:justify-center lg:p-10 lg:text-lg">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base">
              <Zap className="w-5 lg:w-6" />
            </span>
            2-4 week delivery
          </div>
          <div className="flex items-center gap-6 border-x border-t border-dashed p-4 font-medium md:justify-center lg:p-10 lg:text-lg">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base">
              <DollarSign className="w-5 lg:w-6" />
            </span>
            Upfront, no hidden fees
          </div>
          <div className="flex items-center gap-6 border-t border-dashed p-4 font-medium md:justify-center lg:p-10 lg:text-lg">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base">
              <Medal className="w-5 lg:w-6" />
            </span>
            Full refund if not satisfied
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero68 };
