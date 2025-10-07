"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

const Services3 = () => {
  const services = [
    {
      icon: <Cog className="h-5 w-5" />,
      title: "Product Strategy",
      items: ["Market Research", "User Personas"],
    },
    {
      icon: <PenTool className="h-5 w-5" />,
      title: "Design",
      items: ["UI/UX Design", "Prototyping", "Interaction Design"],
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Web Development",
      items: ["Frontend Dev", "Backend Dev"],
    },
    {
      icon: <Shrub className="h-5 w-5" />,
      title: "Marketing",
      items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-start text-xl font-semibold tracking-tight md:text-3xl">
              Services
            </h2>
            <p className="text-muted-foreground text-start text-lg tracking-tight md:text-xl">
              We craft digital experiences that captivate and convert.
            </p>
          </div>

          <div className="space-y-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border grid grid-cols-3 border-b pb-6"
              >
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h2 className="text-base font-medium">{service.title}</h2>
                </div>
                <div />
                <div className="text-muted-foreground item-end flex flex-col gap-1 text-sm">
                  {service.items.map((item, itemIndex) => (
                    <p key={itemIndex}>{item}</p>
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

export { Services3 };
