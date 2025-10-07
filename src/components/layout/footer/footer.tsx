import React from 'react';

interface FooterProps {
  'footer-logo': string;
  'footer-logo-link'?: string;
  'footer-description': string;
  'footer-copyright': string;
}

const Footer: React.FC<FooterProps> = ({
  'footer-logo': logo,
  'footer-logo-link': logoLink = '/',
  'footer-description': description,
  'footer-copyright': copyright
}) => {
  return (
    <footer className="w-full py-6 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <a 
          href={logoLink}
          className="text-3xl font-bold mb-4 block text-white"
        >
          {logo}
        </a>
        
        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
          {description}
        </p>
        
        {/* Copyright */}
        <p className="text-xs text-gray-400">
          {copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;