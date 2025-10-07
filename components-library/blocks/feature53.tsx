const items = [
  {
    id: "next",
    title: "Next.js",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
  },
  {
    id: "react",
    title: "React",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
  },
  {
    id: "shadcnui",
    title: "Shadcn/ui",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
  },
  {
    id: "supabase",
    title: "Supabase",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
  },
  {
    id: "tailwind",
    title: "Tailwind",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
  },
  {
    id: "vercel",
    title: "Vercel",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
  },
  {
    id: "astro",
    title: "Astro",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
  },
  {
    id: "figma",
    title: "Figma",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
  },
];

const Feature53 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.id}
              className="border-b border-l border-border py-4 even:border-r md:border-b-0 md:even:border-r-0 md:nth-[4n]:border-r"
            >
              <div className="relative flex min-h-[150px] flex-col md:mx-4 lg:min-h-[280px] lg:pl-8">
                <p className="text-center font-mono text-xs md:text-left">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="ml-2">{item.title}</span>
                </p>
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="absolute inset-0 m-auto max-h-12 max-w-[60%] object-contain object-center pt-5 md:max-w-[70%]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature53 };
