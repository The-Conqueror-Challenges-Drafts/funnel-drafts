"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

const Services6 = () => {
  const services = [
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Product Strategy",
      description:
        "From market research to user personas, we help you build products that matter.",
      items: ["Market Research", "User Personas"],
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Design",
      description:
        "Beautiful, functional designs that create memorable user experiences.",
      items: ["UI/UX Design", "Prototyping", "Interaction Design"],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Robust, scalable applications built with modern technologies and frameworks.",
      items: ["Frontend Dev", "Backend Dev"],
    },
    {
      icon: <Shrub className="h-8 w-8" />,
      title: "Marketing",
      description:
        "Strategic growth initiatives to scale your product and maximize impact.",
      items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Services
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              We deliver end-to-end digital solutions that drive results and
              exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="group space-y-6 text-center">
                <div className="bg-muted group-hover:bg-foreground group-hover:text-background mx-auto flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-muted-foreground text-xs font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services6 };
