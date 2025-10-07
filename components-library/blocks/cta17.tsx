import { Button } from "@/components/ui/button";

const Cta17 = () => {
  return (
    <section className="py-32">
      <div className="flex items-center justify-center border bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/circles.svg')] bg-cover bg-center py-20 text-center md:p-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Start building your websites faster
            </h1>
            <p className="md:text-lg">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta17 };
