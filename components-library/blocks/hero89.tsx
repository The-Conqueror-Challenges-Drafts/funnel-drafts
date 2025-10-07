import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero89 = () => {
  return (
    <section className="relative flex flex-col items-center justify-between gap-10 bg-background p-5 py-20 md:flex-row md:gap-0 md:pr-0 md:pl-9">
      <div className="md:w-1/2">
        <div className="mx-auto flex max-w-xl flex-col items-start">
          <h1 className="mb-4 text-4xl leading-tight font-semibold tracking-tighter text-foreground lg:text-[64px]">
            Centered approach to recruiting
          </h1>
          <p className="mb-12 text-sm text-foreground lg:text-xl">
            Share your company's culture and build genuine applicant connections
            with TalentLink
          </p>
          <Button className="h-fit rounded-full px-7 py-4 text-sm font-semibold lg:text-base">
            Begin your first position
          </Button>
        </div>
      </div>
      <div className="relative w-full md:w-[45%]">
        <div className="w-full overflow-hidden rounded-2xl border md:rounded-r-none">
          <AspectRatio ratio={1.646601942 / 1}>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt=""
              className="size-full object-cover"
            />
          </AspectRatio>
        </div>
        {/* Arrow svg */}
        <svg
          width="176"
          height="101"
          viewBox="0 0 176 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 hidden w-[25%] -translate-x-1/2 -translate-y-1/2 stroke-foreground lg:inline-block"
        >
          <path
            d="M1.99999 50.8332C1.99999 50.8332 8.48154 49.5711 9.14573 49.4947C14.2898 49.213 19.4694 49.4695 24.6043 50.0152C37.6066 51.4638 48.999 56.0419 58.643 65.0309C64.3875 70.4653 67.8497 76.0847 63.3772 83.1592C58.6951 90.4386 47.0166 89.2509 42.7034 81.844C38.6754 74.895 40.4347 61.96 43.414 54.954C47.2004 46.1763 57.4275 39.8604 64.9887 34.6776C87.3379 19.3741 124.604 16.1723 149.791 25.5171C156.851 28.1916 165.814 31.2154 171.185 36.7703"
            strokeWidth="3"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
          />
          <path
            d="M145.52 9.53769C145.644 9.4975 145.849 9.70635 145.89 9.83088C148.559 12.1323 150.894 14.6789 153.354 17.1852C157.864 21.7802 162 26.4957 166.175 31.3357C167.855 33.1311 169.535 34.9266 171.256 36.8465C171.718 37.3175 171.294 37.8589 170.582 37.7504C167.73 37.0196 164.837 36.1643 161.984 35.4336C154.376 33.6227 144.231 32.4911 137.824 38.2643"
            strokeWidth="3"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export { Hero89 };
