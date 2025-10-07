"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ServiceProps = {
  title: string;
  image: string;
  url: string;
  size?: "large" | "medium" | "small";
};

const services: ServiceProps[] = [
  {
    title: "Web Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-6jEVl7xPH3E-unsplash.jpg",
    url: "",
    size: "large",
  },
  {
    title: "Mobile App Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-gDmVqxZt1hg-unsplash.jpg",
    url: "",
    size: "medium",
  },
  {
    title: "UI/UX Design",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
    url: "",
    size: "small",
  },
  {
    title: "Digital Marketing",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
    url: "",
    size: "medium",
  },
  {
    title: "Cloud Solutions",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
    url: "",
    size: "small",
  },
];

const Services13 = () => {
  return (
    <section className="py-32">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:col-span-1">
          <div>
            <h2 className="text-foreground mb-4 text-4xl font-medium md:text-6xl">
              Featured Services
            </h2>
            <p className="text-muted-foreground w-72 text-base tracking-tight">
              We offer comprehensive digital solutions to help your business
              grow. From web development to mobile apps, we deliver quality
              results that exceed expectations.
            </p>
          </div>
          <Button variant="outline" className="mt-8 w-fit">
            View all services <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {/* Web Development - Hero card */}
          <motion.a
            href={services[0].url}
            whileHover={{ opacity: 0.8, scale: 1.02 }}
            className="group col-span-1 block overflow-hidden rounded-xl sm:col-span-2"
          >
            <Card className="relative aspect-[16/9] overflow-hidden p-0">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <CardContent className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="pr-4 text-2xl font-bold text-white">
                  {services[0].title}
                </div>
              </CardContent>
              <ArrowUpRight className="absolute right-8 top-8 h-8 w-8 text-white transition-transform group-hover:scale-110" />
            </Card>
          </motion.a>

          {/* Mobile App Development */}
          <motion.a
            href={services[1].url}
            whileHover={{ opacity: 0.8, scale: 1.02 }}
            className="group block overflow-hidden rounded-xl"
          >
            <Card className="relative aspect-[4/5] overflow-hidden p-0">
              <img
                src={services[1].image}
                alt={services[1].title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <CardContent className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="pr-4 text-lg font-semibold text-white">
                  {services[1].title}
                </div>
              </CardContent>
              <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-transform group-hover:scale-110" />
            </Card>
          </motion.a>

          {/* UI/UX Design */}
          <motion.a
            href={services[2].url}
            whileHover={{ opacity: 0.8, scale: 1.02 }}
            className="group block overflow-hidden rounded-xl"
          >
            <Card className="relative aspect-[4/5] overflow-hidden p-0">
              <img
                src={services[2].image}
                alt={services[2].title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <CardContent className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="pr-4 text-lg font-semibold text-white">
                  {services[2].title}
                </div>
              </CardContent>
              <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-transform group-hover:scale-110" />
            </Card>
          </motion.a>

          {/* Digital Marketing */}
          <motion.a
            href={services[3].url}
            whileHover={{ opacity: 0.8, scale: 1.02 }}
            className="group block overflow-hidden rounded-xl"
          >
            <Card className="relative aspect-[4/5] overflow-hidden p-0">
              <img
                src={services[3].image}
                alt={services[3].title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <CardContent className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="pr-4 text-lg font-semibold text-white">
                  {services[3].title}
                </div>
              </CardContent>
              <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-transform group-hover:scale-110" />
            </Card>
          </motion.a>

          {/* Cloud Solutions */}
          <motion.a
            href={services[4].url}
            whileHover={{ opacity: 0.8, scale: 1.02 }}
            className="group block overflow-hidden rounded-xl"
          >
            <Card className="relative aspect-[4/5] overflow-hidden p-0">
              <img
                src={services[4].image}
                alt={services[4].title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <CardContent className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="pr-4 text-lg font-semibold text-white">
                  {services[4].title}
                </div>
              </CardContent>
              <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-transform group-hover:scale-110" />
            </Card>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export { Services13 };
