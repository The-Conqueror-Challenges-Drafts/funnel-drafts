import { BadgeCheck } from "lucide-react";
import React from "react";

import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d-card";

const Feature269 = () => {
  const features = [
    "Instant Implementation",
    "One-Time Payment",
    "Developer Friendly",
    "Fully Responsive",
    "Production Ready",
    "Premium Support",
    "Regular Updates",
    "Customizable Design",
    "Performance Optimized",
    "Accessibility Compliant",
    "Cross-Browser ",
    "Documentation Included",
  ];

  return (
    <section className="h-full w-screen overflow-hidden py-32">
      <div className="container relative flex h-full flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="brder w-full space-y-5 lg:w-3/5">
          <h1 className="mb-15 mx-auto w-full max-w-lg text-center text-5xl font-medium font-semibold tracking-tighter lg:mx-0 lg:text-left lg:text-6xl">
            Why Choose Shadcn Blocks?
          </h1>
          <div className="mb-18 flex items-center gap-4 px-5 lg:max-w-md">
            <span className="bg-muted-foreground/20 h-px w-full" />
            <p className="text-muted-foreground/50 text-sm">FEATURES</p>
            <span className="bg-muted-foreground/20 h-px w-full" />
          </div>
          <ul className="grid grid-cols-2 gap-3 lg:max-w-md">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2 lg:items-center">
                <BadgeCheck className="text-muted-foreground/80 size-4" />
                <p className="text-muted-foreground/80 tracking-tight">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <CardContainer
          className="w-full"
          containerClassName="h-full   w-full p-0 m-0 lg:w-2/5"
        >
          <CardBody className="group/card bg-muted/70 flex h-full !w-full flex-col items-center justify-center rounded-3xl p-5">
            <CardItem
              translateZ="60"
              className="mb-2 mt-10 max-w-xs text-center text-3xl font-semibold leading-none tracking-tighter"
            >
              #1 Biggest Shadcn Blocks Collection
            </CardItem>
            <CardItem
              as="p"
              translateZ="25"
              className="my-4 flex w-full max-w-sm items-center justify-center text-sm tracking-tight"
            >
              <span className="mr-2 opacity-50">Welcome to</span>
              <span className="font-semibold">SHADCN BLOCKS</span>
            </CardItem>
            <CardItem translateZ="60" className="mt-4 w-full max-w-[1000px]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg"
                height="1000"
                width="1000"
                className="h-70 w-full rounded-3xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export { Feature269 };
