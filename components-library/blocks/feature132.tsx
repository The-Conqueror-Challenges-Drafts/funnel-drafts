"use client";

const itemsData = [
  {
    id: 1,
    title: "Performance",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
  },
  {
    id: 2,
    title: "Innovation",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
  },
  {
    id: 3,
    title: "Quality",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
  },
  {
    id: 4,
    title: "Accessibility",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
  },
];

const Feature132 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="mb-6 text-center text-5xl font-semibold">
          Welcome to Our Website
        </h2>
        <p className="text-muted-foreground m-auto max-w-3xl text-center text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
          doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur.
          Explicabo.
        </p>
        <a
          className="border-muted bg-background hover:border-muted-foreground mx-auto mt-8 block w-fit rounded-full border-2 px-6 py-4 text-sm font-semibold transition"
          href="#"
        >
          Get Started
        </a>
        <div className="mx-auto mt-16 flex flex-col gap-6 md:flex-row">
          {itemsData.map((item) => (
            <a className="block" href="#" key={item.id}>
              <img
                src={item.imageSrc}
                alt="placeholder"
                className="mb-6 h-full max-h-72 w-full rounded-2xl object-cover transition hover:brightness-90 lg:max-h-96"
              />
              <h6 className="mb-3 text-lg font-semibold">{item.title}</h6>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature132 };
