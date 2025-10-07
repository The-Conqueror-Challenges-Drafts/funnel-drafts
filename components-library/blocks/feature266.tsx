"use client";

import { motion, Variants } from "framer-motion";

import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const services = [
  {
    id: "01",
    title: "MOTION & SILHOUETTE",
    description:
      "Shadows in motion. A glance caught between frames, forever paused.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg?height=200&width=150",
  },
  {
    id: "02",
    title: "STILL STREETS",
    description:
      "Steps echo down quiet halls. Light wraps around the unseen moment.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg?height=200&width=150",
  },
  {
    id: "03",
    title: "FOCUSED CHAOS",
    description:
      "Stillness before the leap. Motion drawn in grayscale whispers.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg?height=200&width=150",
  },
  {
    id: "04",
    title: "BLURRED FIGURES",
    description:
      "Blurred edges and silent focus. A portrait of almost-seen things.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg?height=200&width=150",
  },
  {
    id: "05",
    title: "AFTERLIGHT TRAILS",
    description:
      "Headlights trail into the distance. Stories unfold in fragments.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg?height=200&width=150",
  },
  {
    id: "06",
    title: "WEIGHTLESS ASCENT",
    description:
      "Upward glance. A quiet climb. Clouds drift through open frames.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person5.jpeg?height=200&width=150",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Feature266 = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <section className="py-32">
        <div className="container">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-muted-foreground mb-4 text-sm tracking-widest">
              COLLECTION
            </p>
            <h1 className="text-4xl font-light tracking-wide md:text-6xl">
              FRAGMENTS OF
              <br />
              LIGHT & STILLNESS
            </h1>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group cursor-pointer"
              >
                <Card className="bg-card/5 border-border/20 hover:bg-card/10 p-8 backdrop-blur-sm transition-colors duration-300">
                  <p className="text-muted-foreground mb-8 text-xs tracking-widest">
                    {service.id}
                  </p>

                  <div className="relative mb-8 flex h-40 items-center justify-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="border-border/30 from-primary/30 to-secondary/30 h-32 w-24 overflow-hidden rounded-lg border bg-gradient-to-br shadow-lg">
                          <img
                            src={service.image}
                            alt={`${service.title} preview`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" align="center" className="p-2">
                        <img
                          src={service.image}
                          alt={`${service.title} preview big`}
                          className="h-[240px] w-[160px] rounded-md object-cover"
                        />
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <h3 className="group-hover:text-primary mb-2 text-center text-lg font-light tracking-wide transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 text-center text-sm transition-colors duration-300">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export { Feature266 };
