'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

interface MultiCtaButtonProps {
  tldrText?: string;
  buttonText: string;
}

const MultiCtaButton: React.FC<MultiCtaButtonProps> = ({ tldrText, buttonText }) => {
  const scrollToForm = () => {
    const formSection = document.getElementById('conversion-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-muted/30 py-3 md:py-4">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-sm space-y-2"
        >
          <Button
            size="lg"
            onClick={scrollToForm}
            className="w-full h-11 text-base font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            {buttonText}
          </Button>
          {tldrText && (
            <p className="text-left text-xs md:text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">TLDR:</span> {tldrText}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default MultiCtaButton;

