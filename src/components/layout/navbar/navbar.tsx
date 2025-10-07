import React from 'react';

interface NavbarProps {
  'navbar-logo': string;
  'navbar-logo-link'?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  'navbar-logo': logo,
  'navbar-logo-link': logoLink = '/'
}) => {
  return (
    <nav className="w-full py-4 px-6 border-b bg-white text-gray-900">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <a 
          href={logoLink}
          className="text-2xl font-bold text-gray-900"
        >
          {logo}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;