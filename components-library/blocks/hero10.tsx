import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/*
 * pattern generated at https://www.fffuel.co/ooorganize/
 */

const Hero10 = () => {
  return (
    <section className="relative p-0">
      <div className="absolute h-full w-full bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid1.svg')] [mask-image:linear-gradient(to_right,white,transparent,transparent,white)] bg-contain bg-repeat opacity-100 lg:block"></div>
      <div className="container py-28 md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <Badge
              variant="outline"
              className="transition-colors hover:bg-secondary/20"
            >
              New Release
            </Badge>
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-pretty md:text-5xl lg:text-7xl">
                This is a heading for your new project
              </h1>
              <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 lg:mt-16">
              <p className="text-center text-sm text-muted-foreground">
                Powering the next generation of digital products
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg"
                  alt="ShadCN UI"
                  className="h-7 transition-opacity hover:opacity-100"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg"
                  alt="Vercel"
                  className="h-5 transition-opacity hover:opacity-100"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg"
                  alt="React"
                  className="h-6 transition-opacity hover:opacity-100"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg"
                  alt="Supabase"
                  className="h-6 transition-opacity hover:opacity-100"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg"
                  alt="Tailwind CSS"
                  className="h-5 transition-opacity hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero10 };
