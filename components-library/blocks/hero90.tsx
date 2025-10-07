import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero90 = () => {
  return (
    <section className="font-dm_sans bg-background py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:gap-20 xl:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="text-foreground text-2xl font-medium">Share Videos</p>
            <h1 className="text-foreground max-w-[37.5rem] text-4xl font-semibold sm:text-5xl md:max-w-[51.25rem] md:text-7xl">
              Share Moments that Matter
            </h1>
            <p className="text-muted-foreground text-2xl font-medium">
              Highlight moments from your team’s clips with shareable videos
            </p>
          </div>
          <div>
            <div className="relative mx-auto aspect-[1.723502304/1] max-w-[46.75rem]">
              <div className="bg-muted absolute left-0 top-0 z-30 flex aspect-square w-[42%] rounded-2xl sm:rounded-3xl md:rounded-[2.25rem]">
                <div className="m-auto flex w-[85%] flex-col gap-2 md:gap-4">
                  <div className="flex items-center justify-center gap-[2%]">
                    <Avatar className="size-[68%]">
                      <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                  </div>
                  <p className="text-muted-foreground line-clamp-2 text-center text-[clamp(0.5rem,2.5vw,1.125rem)] font-semibold">
                    From my experience, it was truly the people who made the
                    difference in our success
                  </p>
                </div>
              </div>
              <div className="bg-muted absolute bottom-0 left-1/3 z-20 flex aspect-square w-[42%] rounded-2xl sm:rounded-3xl md:rounded-[2.25rem]">
                <div className="m-auto flex w-[85%] flex-col gap-2 md:gap-4">
                  <Avatar className="mx-auto size-[68%]">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                  <p className="text-muted-foreground line-clamp-2 text-center text-[clamp(0.5rem,2.5vw,1.125rem)] font-semibold">
                    <span className="text-foreground">
                      People who are passionate
                    </span>{" "}
                    about creating meaningful connections and driving innovation
                    forward
                  </p>
                </div>
              </div>
              <div className="bg-muted absolute bottom-[15%] right-0 z-10 flex aspect-square w-[42%] rounded-2xl sm:rounded-3xl md:rounded-[2.25rem]">
                <div className="m-auto w-[85%]">
                  <Avatar className="absolute bottom-[5%] right-[5%] z-20 size-[26%]">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                  <p className="text-muted-2-foreground line-clamp-4 text-[clamp(0.5rem,2.5vw,1.25rem)] font-semibold">
                    Technology drives progress, enhances communication, solves
                    problems, and opens new possibilities, shaping the future of
                    how we work and connect with each other
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero90 };
