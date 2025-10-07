"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
  })
  .required({ email: true });

function HeroFrom() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col justify-center gap-3 md:flex-row">
          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      id="emailInput"
                      placeholder="Enter your mail"
                      className="block h-fit w-full rounded-full px-6 py-3 placeholder:text-black/60 focus:outline-none sm:py-5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="shrink-0">
            <Button
              type="submit"
              className="h-fit w-full rounded-full px-6 py-3 text-base font-semibold sm:py-5 md:w-fit"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

const Hero111 = () => {
  return (
    <section className="bg-muted py-12 font-sans md:py-20">
      <div className="container max-w-[80.5rem]">
        <div className="mx-auto flex max-w-[24.375rem] flex-col items-center justify-center gap-8 sm:max-w-[31.25rem] md:max-w-[37.5rem] xl:max-w-[43.125rem]">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="font-outfit text-center text-3xl leading-tight font-medium text-primary sm:text-4xl md:text-5xl xl:text-6xl">
              HR Management with advanced Hiring process
            </h1>
            <p className="text-center text-lg text-primary/80">
              Simplify HR tasks and empower your team with our solution. Easily
              manage employee data and more—all from a single, centralized
              platform.
            </p>
          </div>
          <div className="w-full max-w-[32.5rem]">
            <HeroFrom />
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative h-6 w-6 shrink-0">
                <CircleCheck className="absolute top-1/2 left-1/2 m-auto h-[108%] w-[108%] -translate-x-1/2 -translate-y-1/2 stroke-primary" />
              </div>
              <p className="text-base text-muted-foreground">
                No Credit Card Required
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative h-6 w-6 shrink-0">
                <CircleCheck className="absolute top-1/2 left-1/2 m-auto h-[108%] w-[108%] -translate-x-1/2 -translate-y-1/2 stroke-primary" />
              </div>
              <p className="text-base text-muted-foreground">Cancel Anytime</p>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-20 flex w-full items-start justify-between md:mt-28">
          <div className="border-muted2 w-[41.4%] overflow-hidden rounded-lg">
            <AspectRatio ratio={1.28627451 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt=""
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="border-muted2 w-[23.98%] overflow-hidden rounded-lg">
            <AspectRatio ratio={0.745098039 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                alt=""
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="border-muted2 w-[32.82%] overflow-hidden rounded-lg">
            <AspectRatio ratio={1.019607843 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                alt=""
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="text-center text-lg text-muted-foreground">
            Trusted by 7+ million people at companies like
          </p>
          <div className="grid grid-cols-3 grid-rows-2 flex-wrap justify-between gap-8 md:grid-cols-6 md:grid-rows-1">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <div className="h-9" key={`logos-${i}`}>
                  <img
                    src={`/images/block/logos/company/fictional-company-logo-${++i}.svg`}
                    alt=""
                    className="h-full w-full object-contain object-center"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero111 };
