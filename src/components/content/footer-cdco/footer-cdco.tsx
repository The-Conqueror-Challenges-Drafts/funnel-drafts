'use client';

import React from 'react';

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
      <footer className="px-4 md:px-12 py-2 bg-black">
        <div className="mx-auto max-w-2xl text-center">

          <span className="text-md text-white opacity-80">
            {copyright}
          </span>
        </div>
      </footer>
    </>
  );
};

export default FooterCdco;