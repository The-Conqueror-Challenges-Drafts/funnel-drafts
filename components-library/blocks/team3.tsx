import { Github, Linkedin, Twitter } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
}

interface Team1Props {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

const Team3 = ({
  heading = "Team",
  description = "Our diverse team of experts brings together decades of experience in design, engineering, and product development.",
  members = [
    {
      id: "member-1",
      name: "Sarah Chen",
      role: "CEO & Founder",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-2",
      name: "Marcus Rodriguez",
      role: "CTO",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-3",
      name: "Emily Watson",
      role: "Head of Design",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-4",
      name: "David Kim",
      role: "Lead Engineer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-5",
      name: "Lisa Thompson",
      role: "Product Manager",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-6",
      name: "Alex Johnson",
      role: "UX Designer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  ],
}: Team1Props) => {
  return (
    <section className="from-background to-muted/20 bg-gradient-to-b py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="from-foreground to-muted-foreground mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent lg:text-6xl">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-card border-border/50 hover:shadow-primary/10 hover:border-primary/20 group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="from-primary/20 to-primary/10 absolute inset-0 rounded-full bg-gradient-to-r blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <Avatar className="ring-background group-hover:ring-primary/20 relative size-24 shadow-lg ring-4 transition-all duration-300 lg:size-28">
                    <AvatarImage src={member.avatar} className="object-cover" />
                    <AvatarFallback className="from-primary/10 to-primary/5 bg-gradient-to-br text-xl font-semibold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="mb-6">
                  <h3 className="group-hover:text-primary mb-2 text-xl font-bold transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground bg-muted/50 inline-block rounded-full px-4 py-1.5 text-sm font-medium">
                    {member.role}
                  </p>
                </div>

                <div className="flex gap-3">
                  {member.github && (
                    <a
                      href={member.github}
                      className="bg-muted/80 hover:bg-primary/10 rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="text-muted-foreground hover:text-primary size-5 transition-colors duration-300" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      className="bg-muted/80 hover:bg-primary/10 rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={`${member.name}'s twitter`}
                    >
                      <Twitter className="text-muted-foreground hover:text-primary size-5 transition-colors duration-300" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="bg-muted/80 hover:bg-primary/10 rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={`${member.name}'s linkedin`}
                    >
                      <Linkedin className="text-muted-foreground hover:text-primary size-5 transition-colors duration-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team3 };
