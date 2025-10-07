"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

const Services5 = () => {
  const services = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Product Strategy",
      description:
        "Comprehensive market analysis and strategic planning to position your product for success in competitive markets.",
      items: [
        "Market Research",
        "User Personas",
        "Competitive Analysis",
        "Product Roadmaps",
      ],
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Design",
      description:
        "User-centered design solutions that create intuitive and engaging experiences across all digital touchpoints.",
      items: ["UI/UX Design", "Prototyping", "Design Systems", "User Testing"],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Modern, scalable web applications built with cutting-edge technologies and development best practices.",
      items: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: <Shrub className="h-6 w-6" />,
      title: "Marketing",
      description:
        "Strategic marketing and optimization services to successfully launch and scale your digital products.",
      items: [
        "SEO Strategy",
        "Analytics Setup",
        "A/B Testing",
        "Growth Marketing",
      ],
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
              End-to-end digital solutions designed to help your business thrive
              in the modern marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-muted space-y-6 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-background border-border rounded-lg border p-2">
                    {service.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-muted-foreground text-sm font-semibold uppercase tracking-wide">
                    What's Included
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <div className="bg-foreground h-1 w-1 rounded-full" />
                        <span className="text-sm">{item}</span>
                      </div>
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

export { Services5 };
