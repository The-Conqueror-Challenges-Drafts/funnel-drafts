import React from 'react';
import { getPageData } from './utm';
import defaultContent from './content/c1.json';
import defaultLayout from './layout/l1.json';

// Import your components here - just add/remove as needed
import MultiHeader from '@/components/content/multi-header/multi-header';
import MultiHero from '@/components/content/multi-hero/multi-hero';
import MultiReasons from '@/components/content/multi-reasons/multi-reasons';
import MultiConversion from '@/components/content/multi-conversion/multi-conversion';
import MultiCta from '@/components/content/multi-cta/multi-cta';
import MultiFooter from '@/components/content/multi-footer/multi-footer';

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {

  // Component mapping - just add your components here
  const componentMap = {
    MultiHeader,
    MultiHero,
    MultiReasons,
    MultiConversion,
    MultiCta,
    MultiFooter,
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
    <div className="min-h-screen bg-background">
      {visibleComponents.map(([name]) => {
        const componentName = name.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
        const Component = componentMap[componentName as keyof typeof componentMap];
        if (!Component) return null;
        
        const props = content[name] || {};
        
        return <Component key={name} {...props} />;
      })}
    </div>
  );
}

