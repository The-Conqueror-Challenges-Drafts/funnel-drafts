import { CornerDownLeft, ShoppingCart } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Hero129 = () => {
  return (
    <section className="font-manrope px-8 py-12 md:py-20">
      <div className="relative mx-auto w-full max-w-[77rem]">
        <div className="relative z-10 grid grid-cols-1 items-center gap-20 xl:grid-cols-2 xl:grid-rows-[48.875rem] xl:gap-0">
          <div className="flex flex-col gap-12 lg:gap-20 xl:pr-20">
            <h1 className="text-[3.375rem] font-extrabold leading-none md:text-6xl lg:text-[5rem]">
              Transform your{" "}
              <span className="after:bg-muted relative after:absolute after:left-0 after:top-[15%] after:z-[-1] after:inline-block after:h-[70%] after:w-[100%] after:content-['']">
                online
              </span>
              presence.
            </h1>
            <div className="flex flex-col gap-6">
              <p className="text-xl">
                Seamlessly create engaging pages that leave an impact.
              </p>
              <div className="flex flex-col items-center gap-2 md:flex-row">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <a href="#">
                    <ShoppingCart className="h-6 w-6 fill-white" />
                    <div>Buy now</div>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <a href="#">More Templates</a>
                </Button>
              </div>
              <div>
                <div className="relative flex -space-x-[0.875rem]">
                  <Avatar className="relative z-10 flex h-12 w-12 shrink-0 rounded-full border border-4 border-black/20 border-white object-cover">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" alt="" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="relative z-20 flex h-12 w-12 shrink-0 rounded-full border border-4 border-black/20 border-white object-cover">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" alt="" />
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <Avatar className="relative z-30 flex h-12 w-12 shrink-0 rounded-full border border-4 border-black/20 border-white object-cover">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" alt="" />
                    <AvatarFallback>EF</AvatarFallback>
                  </Avatar>
                </div>
                <div className="relative mt-2 w-fit pr-28">
                  <p className="w-fit text-base font-medium">
                    Trusted by over 3200+ users
                  </p>
                  <div className="absolute right-[10%] top-0 flex w-fit -translate-y-2/3 flex-col items-center gap-1">
                    <p className="font-caveat text-2xl">Many More</p>
                    <CornerDownLeft className="h-6 w-6 stroke-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-accent relative aspect-[0.782051282/1] self-stretch justify-self-stretch overflow-hidden sm:aspect-auto sm:min-h-[48.875rem] xl:min-h-fit">
            <div className="absolute bottom-0 top-auto aspect-[0.855555556/1] w-full max-w-[38.5rem] overflow-hidden">
              <div className="absolute -bottom-[30%] -left-[30%] z-20 w-full max-w-[616px]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero129/phone.png"
                  alt=""
                  className="relative z-10"
                />
                <div className="absolute left-[12%] top-[15%] z-40 aspect-[0.46182266/1] w-[60%] [perspective:4000px]">
                  <div className="h-full w-full overflow-hidden rounded-3xl [transform:rotate(48.5deg)_rotateY(40deg)_rotateX(16deg)_skew(19.2deg)]">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-[27%] left-[10%] z-10 w-full max-w-[616px]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero129/phone.png"
                  alt=""
                  className="relative z-10"
                />
                <div className="absolute left-[12%] top-[15%] z-40 aspect-[0.46182266/1] w-[60%] [perspective:4000px]">
                  <div className="h-full w-full overflow-hidden rounded-3xl [transform:rotate(48.5deg)_rotateY(40deg)_rotateX(16deg)_skew(19.2deg)]">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 flex h-full w-full justify-between">
          <div className="h-full w-[1px] border-r border-dashed border-black/20" />
          <div className="h-full w-[1px] border-r border-dashed border-black/20" />
          <div className="h-full w-[1px] border-r border-dashed border-black/20" />
          <div className="h-full w-[1px] border-r border-dashed border-black/20" />
          <div className="h-full w-[1px] border-r border-dashed border-black/20" />
        </div>
      </div>
    </section>
  );
};

export { Hero129 };
