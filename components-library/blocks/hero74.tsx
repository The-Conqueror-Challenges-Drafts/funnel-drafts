import {
  AlignCenter,
  Brain,
  Package,
  ReceiptText,
  Timer,
  Vault,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero74 = () => {
  return (
    <section className="py-32">
      <div>
        <div className="container text-center">
          <h1 className="mb-4 text-5xl font-medium">
            The ultimate OS to supercharge your business.
          </h1>
          <p className="text-muted-foreground">
            Simplified file management, live profit/loss insights, and
            effortless financial prep—all enhanced by intelligent filters and
            search.
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Enter you email" />
            <Button>Join waitlist</Button>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <Package />
              </div>
              <span className="text-sm text-muted-foreground">
                Fully customizable
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <AlignCenter />
              </div>
              <span className="text-sm text-muted-foreground">
                Real-time insights
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <Vault />
              </div>
              <span className="text-sm text-muted-foreground">
                Secure vault
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <ReceiptText />
              </div>
              <span className="text-sm text-muted-foreground">
                Smart receipts
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <Timer />
              </div>
              <span className="text-sm text-muted-foreground">
                Effortless tracking
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <Brain />
              </div>
              <span className="text-sm text-muted-foreground">
                AI-driven search
              </span>
            </div>
          </div>
        </div>
        <div className="relative mt-20 hidden justify-between gap-10 lg:flex">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="max-h-[500px] w-full rounded-tr-xl rounded-br-md object-cover"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="max-h-[500px] w-full rounded-tl-xl rounded-bl-md object-cover"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
            alt="placeholder"
            className="absolute top-1/2 left-1/2 max-h-80 -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero74 };
