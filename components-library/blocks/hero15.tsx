import { ArrowRight } from "lucide-react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

import { Button } from "@/components/ui/button";

const Hero15 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <a
          href="#"
          className="group mx-auto mb-4 flex w-fit items-center rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-muted/80"
        >
          <span className="mr-1 font-semibold">What&apos;s new</span>
          <div className="mx-2 h-3.5 w-px bg-muted-foreground/70"></div>
          Read more
          <ArrowRight className="ml-2 inline size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <h1 className="mx-auto my-4 mb-6 max-w-3xl text-center text-3xl font-bold lg:text-5xl">
          Efficient tools that simplify your workflow.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor
          assumenda voluptatem nemo magni a maiores aspernatur.
        </p>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="w-full shadow-sm transition-shadow hover:shadow-md sm:w-auto lg:mt-10"
          >
            Get started for free
          </Button>
        </div>
        <div className="mt-8 lg:mt-12">
          <ul className="flex flex-wrap justify-center gap-6 text-sm lg:text-base">
            <li className="flex items-center gap-2 whitespace-nowrap">
              <BiLogoPlayStore className="size-5" />
              4.7 rating on Play Store
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap">
              <FaApple className="size-5" />
              4.8 rating on App Store
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap">
              <SiTrustpilot className="size-5" />
              4.9 rating on Trustpilot
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Hero15 };
