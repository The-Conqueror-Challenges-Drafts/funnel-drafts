const sitemap = [
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
      {
        title: "Press",
        href: "#",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        title: "Help Center",
        href: "#",
      },
      {
        title: "Community",
        href: "#",
      },
      {
        title: "Status",
        href: "#",
      },
      {
        title: "API Docs",
        href: "#",
      },
    ],
  },
];

const Footer6 = () => {
  return (
    <section className="py-16">
      <div className="container">
        <footer>
          <div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0">
            <div className="max-w-96">
              <div className="mb-6 flex items-center gap-3">
                <div className="border-border bg-accent flex size-12 items-center justify-center rounded-lg border p-2">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                    alt="placeholder logo"
                    className="size-12 h-full w-full object-contain object-center"
                  />
                </div>
                <h3 className="text-xl font-bold">Shadcnblocks.com</h3>
              </div>
              <p className="text-muted-foreground text-base font-medium">
                Components made easy.
              </p>
            </div>
            <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
              <div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2">
                {sitemap.map((section) => (
                  <div key={section.title} className="h-fit w-min">
                    <h4 className="mb-6 whitespace-nowrap text-base font-semibold">
                      {section.title}
                    </h4>
                    <ul className="text-muted-foreground space-y-3 text-base font-medium">
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="hover:text-accent-foreground whitespace-nowrap text-base"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-border flex flex-col items-baseline justify-between gap-8 border-t pt-8 md:flex-row md:gap-16">
            <div className="text-muted-foreground text-xs sm:text-sm">
              &copy; Shadcnblocks.com 2024
            </div>
            <div className="text-muted-foreground flex flex-col items-start gap-4 text-xs sm:text-sm md:flex-row lg:items-center">
              <a href="#" className="hover:text-accent-foreground">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-accent-foreground">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer6 };
