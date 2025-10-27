'use client';

import React from 'react';
import Image from 'next/image';

interface FooterCdcoProps {
  logo: string;
  alt: string;
  tagline: string;
  copyright: string;
}

const FooterCdco: React.FC<FooterCdcoProps> = ({
  copyright
}) => {
  return (
    <>
      {/* Footer */}
      <footer className="px-4 md:px-12 py-4 bg-primary">
        <div className="mx-auto max-w-2xl text-center">

          <span className="text-md text-primary-foreground opacity-80">
            {copyright}
          </span>
        </div>
      </footer>
    </>
  );
};

export default FooterCdco;