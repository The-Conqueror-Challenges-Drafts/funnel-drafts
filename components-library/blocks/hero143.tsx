import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero143 = () => {
  return (
    <section className="dark relative overflow-hidden bg-background py-12 font-sans md:py-20">
      <div className="relative z-20 container max-w-[51.125rem]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-8 px-4 pt-52 pb-32 md:pb-52">
            <div className="max-w-[25rem] sm:max-w-[33.75rem]">
              <h1 className="text-center text-4xl leading-tight font-semibold text-foreground [text-shadow:0_4px_4px_rgba(0,0,0,0.15)] sm:text-5xl md:text-[4rem]">
                Your fast track to everything.
              </h1>
            </div>
            <div className="max-w-[22.5rem] md:max-w-full">
              <p className="text-center text-sm leading-normal tracking-tight text-balance text-muted-foreground [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] md:text-lg">
                A suite of robust productivity tools packed into an adaptable
                launcher—quick, intuitive, and dependable.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="inline-flex h-fit w-full items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm leading-snug font-medium tracking-tight text-nowrap sm:w-fit"
              >
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="h-5 w-5 fill-gray-900"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                  </svg>
                  <p>Download for Mac</p>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-linear-to-b from-white/5 to-white/15 px-3 py-2 text-sm leading-snug font-medium tracking-tight text-nowrap text-white transition-colors hover:border-white/40 sm:w-fit"
              >
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="h-5 w-5 fill-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"></path>
                  </svg>
                  <p>Join Windows waitlist</p>
                </a>
              </Button>
            </div>
            <div className="font-geist flex gap-6 text-xs text-muted-foreground">
              <span>v1.87.5</span>
              <span className="relative before:absolute before:-left-3 before:content-['|']">
                macOS 12+
              </span>
              <span className="relative before:absolute before:-left-3 before:content-['|']">
                <button>Install via homebrew</button>
              </span>
            </div>
          </div>
          <div className="group relative mt-10 h-8 overflow-hidden rounded-full p-px shadow-[0_0_25px_0_var(--color-gray-900)] transition-all after:absolute after:top-1/2 after:left-1/2 after:aspect-square after:w-full after:origin-center after:-translate-x-1/2 after:-translate-y-1/2 after:animate-[gradient-spin_2.5s_ease-in-out_infinite] after:transition-all after:content-[''] after:[background:conic-gradient(transparent_0%,var(--color-red-400)_20%,transparent_10%),var(--color-red-950)] hover:shadow-[0_0_25px_0_var(--color-red-950)] hover:after:[background:conic-gradient(transparent_0%,var(--color-red-400)_20%,transparent_10%),var(--color-red-900)]">
            <a
              href="#"
              className="relative z-10 flex h-full w-full items-center gap-3 rounded-full bg-background px-3 py-1 text-sm font-medium text-white"
            >
              <div>Download on iOS</div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <div>Join waitlist</div>
                <ArrowRight className="h-4 w-4 stroke-muted-foreground" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -top-24 z-10 h-full w-full before:absolute before:inset-0 before:size-full before:bg-[radial-gradient(circle_at_center,rgba(10,10,10,.3)_15%,rgba(10,10,10,1)_45%)] before:content-['']">
        <video
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-2.mp4"
          loop
          muted
          autoPlay
          controls={false}
          className="block size-full object-cover object-center bg-blend-saturation"
        />
      </div>
    </section>
  );
};

export { Hero143 };
