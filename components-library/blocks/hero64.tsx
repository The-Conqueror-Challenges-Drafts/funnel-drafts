import { FaStar } from "react-icons/fa";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface TestimonialCardProps {
  name: string;
  title: string;
  imageSrc: string;
  className?: string;
  style?: React.CSSProperties;
}

interface RatingDisplayProps {
  rating?: number;
  userCount?: number;
  className?: string;
  style?: React.CSSProperties;
  showAvatars?: boolean;
}

function TestimonialCard({
  name = "Jane Doe",
  title = "Job Title",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  className,
  style,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-card flex w-[320px] flex-col gap-4 rounded-lg p-6 shadow-sm",
        className,
      )}
      style={style}
    >
      <img
        src={imageSrc}
        alt={name}
        className="h-24 w-24 rounded-md object-cover"
      />
      <div className="flex gap-0.5">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <FaStar key={i} className="h-5 w-5 fill-yellow-400" />
          ))}
      </div>
      <div className="space-y-2">
        <div className="bg-muted h-2 w-[80%] rounded"></div>
        <div className="bg-muted h-2 w-[90%] rounded"></div>
        <div className="bg-muted h-2 w-[60%] rounded"></div>
      </div>
      <div className="space-y-1">
        <p className="text-foreground font-semibold">{name}</p>
        <p className="text-muted-foreground text-sm">{title}</p>
      </div>
    </div>
  );
}

function RatingDisplay({
  rating = 4.9,
  userCount = 500,
  className,
  style,
}: RatingDisplayProps) {
  return (
    <div className={cn("space-y-0.5", className)} style={style}>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-[14px]">
          {[1, 2, 3, 4, 5].map((i) => (
            <Avatar key={i} className="size-12">
              <AvatarImage src={`/images/block/avatar-${i}.webp`} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div>
          <div className="flex items-end gap-1.5">
            <div className="flex gap-1">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <FaStar key={i} className="h-5 w-5 fill-yellow-400" />
                ))}
            </div>
            <p className="text-foreground text-base font-semibold leading-4">
              {rating}
            </p>
          </div>
          <p className="text-muted-foreground whitespace-nowrap text-sm font-medium">
            Join {userCount}+ happy users
          </p>
        </div>
      </div>
    </div>
  );
}

const Hero64 = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="mx-auto flex items-start md:mx-0 md:w-1/2 md:items-center">
            <div className="text-center md:text-left">
              <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl/tight md:text-6xl/tight">
                Leverage the{" "}
                <span className="bg-linear-to-tr from-gray-600 to-gray-500 bg-clip-text text-transparent">
                  influence of testimonials
                </span>{" "}
                to boost your sales.
              </h1>
              <p className="text-muted-foreground mx-auto mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Gather and display testimonials from happy customers to build
                trust and boost your conversion rate.
              </p>
              <div className="mt-6 flex justify-center md:hidden">
                <RatingDisplay />
              </div>
              <div className="mx-auto mt-8 w-fit md:ml-0">
                <Button size="lg" className="px-6">
                  Start now – completely free!
                </Button>
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-[400px] w-full max-w-xl md:h-[540px] md:w-1/2">
            <div className="relative h-full">
              <TestimonialCard
                name="Sarah Johnson"
                title="Marketing Director"
                imageSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/fabian-centeno-njeVb6E3XB8-unsplash.jpg"
                className="absolute hidden rounded-lg border md:flex"
                style={{
                  left: "0",
                  top: "40%",
                  width: "50%",
                  height: "auto",
                }}
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt=""
                className="absolute hidden rounded-lg md:block"
                style={{
                  right: "0",
                  top: "0",
                  width: "45%",
                  height: "42%",
                  objectFit: "cover",
                }}
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                alt=""
                className="absolute rounded-lg shadow-md"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "min(100%, 235.625px)",
                  height: "min(90%, 355.945px)",
                  objectFit: "cover",
                }}
              />
              <RatingDisplay className="bg-background absolute bottom-4 left-1/2 hidden w-[90%] -translate-x-1/2 rounded-md border px-3 py-2 shadow-lg md:bottom-auto md:left-auto md:right-0 md:top-[54%] md:flex md:w-auto md:translate-x-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero64 };
