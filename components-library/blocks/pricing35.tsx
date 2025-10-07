"use client";

import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Pricing35 = () => {
  const pricingPlans = [
    {
      id: "standard",
      type: "standard",
      prices: {
        quarterly: "$15/mo",
        yearly: "$12/mo",
      },

      isDark: false,
      hasToggle: true,
      badge: "nulldfs",
      ctaText: "Start with standard",
      Description:
        "Ideal for individuals Or Freelancers getting started with our service. No credit card required.",
    },
    {
      id: "premium",
      type: "premium",
      prices: {
        quarterly: "Custom",
        yearly: "Custom",
      },
      isDark: true,
      hasToggle: false,
      badge: "10/300 Spots Availble",
      ctaText: "Become a Vip Member",
      Description:
        "Ideal for individuals Or Freelancers getting started with our service. No credit card required.",
    },
  ];

  const [billingPeriods, setBillingPeriods] = useState({
    standard: "quarterly",
    premium: "quarterly",
  });

  const updateBillingPeriod = (
    planId: string,
    period: "quarterly" | "yearly",
  ) => {
    setBillingPeriods((prev) => ({
      ...prev,
      [planId]: period,
    }));
  };

  return (
    <section className="bg-background">
      <div className="container py-32">
        <header className="mb-10 flex flex-col items-center gap-6 md:mb-20">
          <h1 className="text-foreground text-center text-5xl font-bold tracking-tighter md:text-7xl">
            Flexible Pricing Plans
          </h1>
          <p className="text-muted-foreground w-full max-w-lg px-4 text-center text-base font-normal tracking-tight opacity-70 md:px-0 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipiasicing elit.Lorem ipsum
            dolor sit amet consectetur
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="flex flex-col justify-center gap-8 px-4 md:flex-row">
          {pricingPlans.map((plan) => {
            const currentPeriod = billingPeriods[
              plan.id as keyof typeof billingPeriods
            ] as "quarterly" | "yearly";

            return (
              <Card
                key={plan.id}
                className={`rounded-4xl border-border h-auto w-full overflow-hidden border shadow-sm ${plan.isDark ? "bg-foreground text-background" : "bg-background text-foreground"} md:max-w-md`}
              >
                <CardContent className="p-6">
                  {/* Price Section */}
                  <div className="mb-8 mt-8 md:mb-10 md:mt-10">
                    <div className="flex items-end">
                      <span className="w-full text-center text-5xl font-semibold tracking-tighter md:text-7xl">
                        {plan.prices[currentPeriod]}
                      </span>
                    </div>
                  </div>

                  {/* Divider with text */}
                  <div className="mb-8 flex items-center gap-4 md:mb-10">
                    <div className="bg-muted h-px flex-1" />
                    <span className="whitespace-nowrap text-center text-xs font-normal uppercase opacity-50">
                      {plan.prices.yearly !== "Custom" &&
                      currentPeriod === "quarterly"
                        ? "BILLED QUARTERLY"
                        : plan.prices.yearly !== "Custom" &&
                            currentPeriod === "yearly"
                          ? "BILLED YEARLY"
                          : "Flexible billing"}
                    </span>
                    <div className="bg-muted h-px flex-1" />
                  </div>

                  {/* Toggle or Badge */}
                  <div className="mb-8 flex justify-center md:mb-10">
                    {plan.hasToggle ? (
                      <ToggleGroup
                        type="single"
                        value={currentPeriod}
                        onValueChange={(value) => {
                          if (value)
                            updateBillingPeriod(
                              plan.id,
                              value as "quarterly" | "yearly",
                            );
                        }}
                        className="bg-muted rounded-xl p-1"
                      >
                        <ToggleGroupItem
                          value="quarterly"
                          className="data-[state=on]:bg-background h-8 w-20 rounded-lg"
                        >
                          <span className="text-foreground text-center text-xs font-semibold">
                            Quarterly
                          </span>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="yearly"
                          className="data-[state=on]:bg-background h-8 w-20 rounded-lg"
                        >
                          <span className="text-foreground text-center text-xs font-semibold">
                            Yearly
                          </span>
                        </ToggleGroupItem>
                      </ToggleGroup>
                    ) : plan.badge ? (
                      <Badge
                        className={`bg-muted/20 rounded-xl border ${plan.isDark ? "text-background" : "text-foreground"} px-3 py-2 text-xs font-semibold`}
                      >
                        {plan.badge}
                      </Badge>
                    ) : null}
                  </div>

                  {/* Annual Plan Text */}
                  <div className="mb-8 flex justify-center md:mb-10">
                    <span className="whitespace-nowrap text-center text-xs font-normal opacity-50">
                      {currentPeriod === "yearly"
                        ? "YOU'RE SAVING 20% WITH ANNUAL BILLING"
                        : "SAVE 20% ON AN ANNUAL PLAN"}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mb-8 w-full text-center text-sm font-normal tracking-tight md:mb-10 md:text-base">
                    Ideal for individuals Or Freelancers getting started with
                    our service. No credit card required.
                  </p>

                  {/* CTA Button */}
                  <Button
                    variant={plan.isDark ? "secondary" : "default"}
                    className="h-10 w-full"
                  >
                    <span className="text-center text-sm font-normal md:text-base">
                      {plan.ctaText}
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Pricing35 };
