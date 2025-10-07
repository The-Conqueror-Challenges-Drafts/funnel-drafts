import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Signup5Props {
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  githubText?: string;
  facebookText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Signup5 = ({
  heading = "Signup",
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  buttonText = "Create Account",
  facebookText = "Facebook",
  googleText = "Google",
  githubText = "GitHub",
  signupText = "Already a user?",
  signupUrl = "https://shadcnblocks.com",
}: Signup5Props) => {
  return (
    <section className="bg-background h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          {/* Logo */}
          <a href={logo.url}>
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="h-10 dark:invert"
            />
          </a>
          {heading && <h1 className="text-2xl font-semibold">{heading}</h1>}
          <div className="min-w-sm bg-muted flex w-full max-w-sm flex-col items-center gap-y-4 rounded-lg px-6 py-12">
            <div className="flex w-full flex-col gap-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Email"
                className="bg-background text-sm"
                required
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Password"
                className="bg-background text-sm"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {buttonText}
            </Button>
            <div className="flex w-full flex-col gap-2">
              <Button type="submit" className="w-full" variant="outline">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
                  className="size-5"
                  alt="Google"
                />
                {googleText}
              </Button>
              <Button type="submit" className="w-full" variant="outline">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/facebook-icon.svg"
                  className="size-5"
                  alt="Facebook"
                />
                {facebookText}
              </Button>
              <Button type="submit" className="w-full" variant="outline">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg"
                  className="size-5"
                  alt="GitHub"
                />
                {githubText}
              </Button>
            </div>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{signupText}</p>
            <a
              href={signupUrl}
              className="text-primary font-medium hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup5 };
