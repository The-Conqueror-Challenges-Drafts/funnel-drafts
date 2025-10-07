"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_QUESTIONS = [
  {
    question: "What is a FAQ?",
    answer:
      "A FAQ is a list of frequently asked questions and answers on a particular topic.",
  },
  {
    question: "What is the purpose of a FAQ?",
    answer:
      "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
  },
  {
    question: "How do I create a FAQ?",
    answer:
      "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
  },
  {
    question: "What are the benefits of a FAQ?",
    answer:
      "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
  },
  {
    question: "What is a FAQ?",
    answer:
      "A FAQ is a list of frequently asked questions and answers on a particular topic.",
  },
  {
    question: "What is the purpose of a FAQ?",
    answer:
      "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
  },
  {
    question: "How do I create a FAQ?",
    answer:
      "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
  },
  {
    question: "What are the benefits of a FAQ?",
    answer:
      "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
  },
];

const Faq16 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <h1 className="text-foreground mb-10 text-center text-6xl font-bold tracking-tighter">
          FAQs
        </h1>
        <div className="border-border bg-background z-20 mx-auto max-w-2xl rounded-2xl border p-3">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col items-center justify-center gap-3"
          >
            {FAQ_QUESTIONS.map((item, index) => (
              <AccordionItem
                value={index.toString()}
                key={index}
                className="bg-muted m-0 w-full rounded-xl px-4 py-2"
              >
                <AccordionTrigger className="flex flex-1 justify-between text-left font-semibold transition-all hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground mt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq16 };
