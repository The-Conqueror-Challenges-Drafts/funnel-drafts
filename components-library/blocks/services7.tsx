"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

const Services7 = () => {
  const services = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Product Strategy",
      description:
        "From market research to user personas, we help you build products that matter.",
      items: ["Market Research", "User Personas"],
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Design",
      description:
        "Beautiful, functional designs that create memorable user experiences.",
      items: ["UI/UX Design", "Prototyping", "Interaction Design"],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Robust, scalable applications built with modern technologies and frameworks.",
      items: ["Frontend Dev", "Backend Dev"],
    },
    {
      icon: <Shrub className="h-6 w-6" />,
      title: "Marketing",
      description:
        "Strategic growth initiatives to scale your product and maximize impact.",
      items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Services
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              Comprehensive solutions to bring your digital vision to life.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border flex flex-col items-start gap-6 rounded-lg border p-6 transition-shadow hover:shadow-sm md:flex-row"
              >
                <div className="flex-shrink-0">
                  <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="bg-muted inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services7 };
