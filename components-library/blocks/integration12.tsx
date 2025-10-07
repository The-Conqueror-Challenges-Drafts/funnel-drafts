"use client";

import { ArrowLeftRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const permissions = [
  "View analytics and performance metrics",
  "Create and manage project milestones",
  "Assign and update team responsibilities",
  "Receive and respond to customer feedback",
  "Manage notification preferences and alerts",
];

const Integration12 = () => {
  return (
    <section className="bg-muted flex min-h-screen items-center justify-center py-32">
      <div className="container">
        <div className="mx-auto flex w-full max-w-md flex-col items-center gap-6 p-0">
          <div className="flex w-full flex-col items-center gap-2 border-b pb-4">
            <div className="mb-2 mt-2 flex items-center justify-center gap-4">
              <div className="bg-background flex h-12 w-12 items-center justify-center rounded-lg border p-3 shadow">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-icon.svg"
                  alt="shadcn/ui"
                />
              </div>
              <ArrowLeftRight className="size-4" />
              <div className="bg-background flex h-12 w-12 items-center justify-center rounded-lg border p-3 shadow">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                  alt="shadcn/ui"
                />
              </div>
            </div>
            <h1 className="text-center text-2xl font-semibold">
              Link shadcn/ui to Shadcnblocks
            </h1>
            <p className="text-muted-foreground mt-1 text-center text-base">
              Empower your team with seamless project tracking and real-time
              collaboration across platforms.
            </p>
          </div>
          <div className="w-full py-6">
            <ul className="space-y-3">
              {permissions.map((perm, i) => (
                <li
                  key={i}
                  className="text-foreground flex items-center gap-3 text-sm"
                >
                  <Check className="text-primary size-4" />
                  {perm}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full items-center justify-end gap-2 pb-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="button">Connect now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Integration12 };
