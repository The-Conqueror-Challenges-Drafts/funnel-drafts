import React from 'react';
import { getPageData } from './utm';
import defaultContent from './content/c1.json';
import defaultLayout from './layout/l1.json';

// Import your components here - just add/remove as needed
import Topbar from '@/components/layout/topbar/topbar';
import Navbar from '@/components/layout/navbar/navbar';
import Default from '@/components/content/default/default';
import Footer from '@/components/layout/footer/footer';

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {

  // Component mapping - just add your components here
  const componentMap = {
    Topbar,
    Navbar,
    Default,
    Footer,
  };

  // Get page data from utm
  const { contentConfig, layoutConfig } = await getPageData(searchParams);
  
  // Use defaults if no config found
  const content = contentConfig || defaultContent;
  const layout = layoutConfig || defaultLayout;

  // Get visible components in order
  const visibleComponents = Object.entries(layout.components || {})
    .filter(([, config]) => (config as { show: boolean }).show)
    .sort(([, a], [, b]) => (a as { order: number }).order - (b as { order: number }).order);

  return (
    <div className="min-h-screen flex flex-col">
      {visibleComponents.map(([name]) => {
        const componentName = name.charAt(0).toUpperCase() + name.slice(1);
        const Component = componentMap[componentName as keyof typeof componentMap];
        if (!Component) return null;
        
        const props = content[name] || {};
        
        if (name === 'default') {
          return (
            <main key={name} className="flex-1 flex items-center justify-center">
              <Component {...props} />
            </main>
          );
        }
        
        return <Component key={name} {...props} />;
      })}
    </div>
  );
}