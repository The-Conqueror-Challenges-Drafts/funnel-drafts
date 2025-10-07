import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: "testimonial-1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt urna ac tortor molestie, sit amet lobortis massa cursus. Ut rutrum nunc sit amet tellus cursus congue.",
    name: "Customer Name",
    company: "Company Name",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-2",
    text: "Sed sodales ligula non neque molestie.",
    name: "Customer Name",
    company: "Company Name",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-3",
    text: "Sed sodales ligula non neque molestie, et auctor quam fringilla. Donec placerat justo et vehicula interdum.",
    name: "Customer Name",
    company: "Company Name",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Customer Name",
    company: "Company Name",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Customer Name",
    company: "Company Name",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-6",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt urna ac tortor molestie, sit amet lobortis massa cursus. Ut rutrum nunc sit amet tellus cursus congue.",
    name: "Customer Name",
    company: "Company Name",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-7",
    text: "Sed sodales ligula non neque molestie, et auctor quam fringilla. Donec placerat justo et vehicula interdum.",
    name: "Customer Name",
    company: "Company Name",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-8",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt urna ac tortor molestie, sit amet lobortis massa cursus. Ut rutrum nunc sit amet tellus cursus congue.",
    name: "Customer Name",
    company: "Company Name",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-9",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Customer Name",
    company: "Company Name",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
];

const Testimonial11 = () => {
  return (
    <section className="relative bg-accent bg-[linear-gradient(var(--color-accent)_0%,var(--color-background)_100%)] py-32">
      <div className="container pb-16">
        <div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-32">
          <div className="flex flex-1 flex-col items-start text-left">
            <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
              Testimonials
            </h2>
            <p className="max-w-3xl text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
          </div>
          <div className="block shrink-0 flex-row gap-12 sm:flex sm:flex-col lg:flex-row lg:gap-24">
            <div className="mr-8 mb-8 inline-block sm:mr-0 sm:mb-0">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg"
                alt="placeholder logo"
                className="mb-4 h-6"
              />
              <div className="flex items-center">
                <div className="mr-4 shrink-0 text-sm font-semibold">
                  4.8 / 5
                </div>
                <div className="flex items-center gap-0.5">
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                </div>
              </div>
            </div>
            <div className="mr-8 mb-8 inline-block sm:mr-0 sm:mb-0">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg"
                alt="placeholder logo"
                className="mb-4 h-6"
              />
              <div className="flex items-center">
                <div className="mr-4 shrink-0 text-sm font-semibold">
                  4.8 / 5
                </div>
                <div className="flex items-center gap-0.5">
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-16 sm:mt-0">
        <div className="w-full columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6 [&>div:nth-child(n+5)]:hidden sm:[&>div:nth-child(n+5)]:inline-block sm:[&>div:nth-child(n+9)]:hidden lg:[&>div:nth-child(n+9)]:inline-block">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mb-4 inline-block w-full rounded-lg border border-border bg-background p-6 lg:mb-6"
            >
              <div className="flex flex-col">
                <p className="mb-4 text-xs">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-1 md:gap-2">
                  <Avatar className="size-8 md:size-10">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
                    <AvatarFallback>{testimonial.name}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-xs font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 hidden w-full sm:block sm:h-[16.875rem] sm:bg-[linear-gradient(transparent_0%,hsl(var(--accent))_100%)] lg:h-56"></div>
    </section>
  );
};

export { Testimonial11 };
