"use client";

import { ShoppingBag, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface Banner3Props {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  defaultVisible?: boolean;
}

const Banner3 = ({
  title = "Black Friday Sale! 🎉",
  description = "Up to 70% off on all components. Limited time only!",
  buttonText = "Shop Now",
  buttonUrl = "https://shadcnblocks.com",
  defaultVisible = true,
}: Banner3Props) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="bg-primary w-full p-4">
      <div className="container">
        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-8 w-8 md:hidden"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="text-primary-foreground flex flex-col items-start gap-3 pt-2 md:flex-row md:items-center md:pt-0">
            <div className="flex flex-col gap-1 md:flex-row md:items-center">
              <p className="text-sm font-medium">{title}</p>
              <p className="text-primary-foreground/80 text-sm">
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="dark w-full md:w-auto"
              variant="secondary"
              asChild
            >
              <a href={buttonUrl} target="_blank">
                {buttonText}
                <ShoppingBag className="mr-2 h-3 w-3" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-8 w-8 invert md:inline-flex"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner3 };
