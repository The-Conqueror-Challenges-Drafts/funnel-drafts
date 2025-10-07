"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface Banner5Props {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  defaultVisible?: boolean;
}

const Banner5 = ({
  title = "Version 2.0 is now available!",
  description = "Check out all the new features.",
  buttonText = "Learn More",
  buttonUrl = "https://shadcnblocks.com",
  defaultVisible = true,
}: Banner5Props) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="animate-fade-in absolute left-0 right-0 top-4 z-50 mx-auto max-w-2xl">
      <div className="mx-4">
        <div className="bg-background w-full rounded-lg border p-4 shadow-md">
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-8 w-8 md:hidden"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="flex flex-col items-start gap-3 pt-2 md:flex-row md:items-center md:pt-0">
              <div className="flex flex-col gap-1 md:flex-row md:items-center">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full md:w-auto"
                asChild
              >
                <a href={buttonUrl} target="_blank">
                  {buttonText}
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden h-8 w-8 md:inline-flex"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner5 };
