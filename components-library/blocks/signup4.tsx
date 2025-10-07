import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
interface Signup4Props {
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  signupText?: string;
  googleText?: string;
  facebookText?: string;
  githubText?: string;
  loginText?: string;
  loginUrl?: string;
}

const Signup4 = ({
  heading = "Signup",
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  signupText = "Create an account",
  googleText = "Google",
  facebookText = "Facebook",
  githubText = "Github",
  loginText = "Already a user?",
  loginUrl = "#",
}: Signup4Props) => {
  return (
    <section className="h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full max-w-sm flex-col items-center gap-y-8">
          <div className="flex flex-col items-center gap-y-2">
            {/* Logo */}
            <div className="flex items-center gap-1 lg:justify-start">
              <a href="https://shadcnblocks.com">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-12"
                />
              </a>
            </div>
            <h1 className="text-2xl font-semibold">{heading}</h1>
          </div>
          <div className="border-input bg-background flex w-full flex-col gap-8 rounded-md border px-6 py-12">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-background"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  className="bg-background"
                />
              </div>
              <Button type="submit" className="mt-2 w-full">
                {signupText}
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
                    alt="Google"
                    className="size-5"
                  />
                  {googleText}
                </Button>
                <Button variant="outline" className="w-full">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg"
                    alt="Google"
                    className="size-5"
                  />
                  {githubText}
                </Button>
                <Button variant="outline" className="w-full">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/facebook-icon.svg"
                    alt="Google"
                    className="size-5"
                  />
                  {facebookText}
                </Button>
              </div>
            </div>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{loginText}</p>
            <a
              href={loginUrl}
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

export { Signup4 };
