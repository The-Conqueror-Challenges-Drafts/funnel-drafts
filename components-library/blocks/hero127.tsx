import { ChevronRight, Mail, MoveRight, Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type avatar = {
  avatar: string;
  alt: string;
  avatarFallback: string;
};

interface AvatarsProps {
  avatars?: Array<avatar>;
}

function Avatars({ avatars }: AvatarsProps) {
  return (
    <div className="flex items-center gap-2">
      {avatars &&
        avatars.map(({ avatar, alt, avatarFallback }, i) => (
          <Avatar
            key={`avatar-hero-${i}`}
            className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border before:absolute before:top-1/2 before:left-1/2 before:block before:h-[85%] before:w-[85%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border-2 before:border-black before:bg-transparent before:content-['']"
          >
            <AvatarImage
              src={avatar}
              alt={alt}
              className="h-full w-full object-cover object-center"
            />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
        ))}
      <div className="relative flex h-14 w-14 overflow-hidden rounded-full bg-primary before:absolute before:top-1/2 before:left-1/2 before:block before:h-[85%] before:w-[85%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border-2 before:border-white before:bg-transparent before:content-['']">
        <Plus className="m-auto h-4 w-4 stroke-white" />
      </div>
    </div>
  );
}

const Hero127 = () => {
  const avatars: Array<avatar> = [
    {
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "",
      avatarFallback: "",
    },
    {
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      alt: "",
      avatarFallback: "",
    },
    {
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      alt: "",
      avatarFallback: "",
    },
    {
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      alt: "",
      avatarFallback: "",
    },
  ];

  return (
    <section className="font-dm_sans py-12 md:py-20">
      <div className="container max-w-[56.25rem] xl:max-w-[66.875rem]">
        <div className="flex flex-col justify-between gap-12 xl:flex-row">
          <div className="flex w-full flex-col gap-12 xl:max-w-[37.5rem]">
            <Button
              asChild
              variant="ghost"
              className="flex w-fit gap-3 rounded-full border p-1 pr-3 hover:bg-transparent"
            >
              <a href="#">
                <Badge className="hover:bg-bg-primary/10 flex items-center gap-[0.375rem] rounded-full bg-primary/10 px-3 py-1">
                  <Mail className="h-[0.875rem] w-[0.875rem] stroke-primary" />
                  <div className="text-sm leading-normal font-medium text-primary">
                    News
                  </div>
                </Badge>
                <div className="flex items-center gap-3 text-sm leading-normal font-medium">
                  Check our new features
                  <MoveRight className="h-4 w-4 stroke-muted-foreground" />
                </div>
              </a>
            </Button>
            <h1 className="w-[80%] text-5xl leading-[1.2] font-bold text-black md:text-6xl xl:w-full xl:text-7xl">
              Introducing the{" "}
              <span className="text-primary/50">world's best</span>{" "}
              <span className="text-primary">marketing</span> degree.
            </h1>
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <Button
                asChild
                className="flex h-fit w-full items-center justify-center gap-3 rounded-full border px-8 py-4 text-base font-medium md:w-fit"
              >
                <a href="#">
                  <div>Get started now</div>
                  <ChevronRight className="h-4 w-4 stroke-white" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex h-fit w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-medium hover:border-black/40 md:w-fit"
              >
                <a href="#">
                  <Mail className="h-4 w-4" />
                  <div>Request Access</div>
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full xl:max-w-[20rem] xl:self-end">
            <div className="flex flex-col gap-12">
              <p className="max-w-[39rem] text-lg">
                Grow your audience with the top podcasting tool on the
                market—create, distribute, and monetize your show effortlessly.
              </p>
              <div className="flex flex-col justify-between gap-12 md:flex-row xl:flex-col xl:justify-normal">
                <div className="flex items-center gap-12">
                  <div>
                    <p className="text-sm font-medium">Active Users</p>
                    <div className="text-3xl font-bold">24 K+</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Episodes</p>
                    <div className="text-3xl font-bold">43 K+</div>
                  </div>
                </div>
                <Avatars avatars={avatars} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero127 };
