import { Button } from "@/components/ui/button";

const Hero27 = () => {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Decorative background element */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-background to-background/80" />
      <div className="absolute top-1/2 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative container">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:gap-20 lg:flex-row lg:items-end">
          <h1 className="relative text-6xl font-bold tracking-tighter md:text-[8vw] lg:w-3/5 2xl:text-9xl">
            <span className="relative inline-block transition-transform duration-300 hover:translate-x-1">
              High
            </span>
            <br />
            <span className="relative inline-block transition-transform duration-300 hover:translate-x-1">
              Scale
            </span>
            <br />
            <span className="relative inline-block transition-transform duration-300 hover:translate-x-1">
              Heading.
            </span>
          </h1>
          <div className="lg:max-w-auto max-w-lg space-y-5 lg:mb-4 lg:w-2/5">
            <p className="text-xl font-bold md:text-4xl">
              Small
              <br />
              Subheading
              <br />
            </p>
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              optio quis? Veniam accusamus quaerat illum dolorem eos atque
              reiciendis numquam. Veniam accusamus quaerat illum
            </p>
            <Button className="group relative mt-8 overflow-hidden" size="lg">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 translate-y-full bg-primary/10 transition-transform duration-300 group-hover:translate-y-0" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero27 };
