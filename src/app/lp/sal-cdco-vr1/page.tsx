import React from 'react';
import { getPageData } from './utm';
import defaultContent from './content/c1.json';
import defaultLayout from './layout/l1.json';
import { CurrencyProvider } from '@/components/ui/conq/currency';

// Import your components here - just add/remove as needed
import HeaderCdco from '@/components/content/header-cdco/header-cdco';
import HeroCdco from '@/components/content/hero-cdco/hero-cdco';
import TrustedCdco from '@/components/content/trusted-cdco/trusted-cdco';
import ReasonsCdco from '@/components/content/reasons-cdco/reasons-cdco';
import FeaturesCdco from '@/components/content/features-cdco/features-cdco';
import FormCdco from '@/components/content/form-cdco/form-cdco';
import CtaCdco from '@/components/content/cta-cdco/cta-cdco';
import FooterCdco from '@/components/content/footer-cdco/footer-cdco';

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {

  // Component mapping - just add your components here
  const componentMap = {
    HeaderCdco,
    HeroCdco,
    TrustedCdco,
    ReasonsCdco,
    FeaturesCdco,
    FormCdco,
    CtaCdco,
    FooterCdco,
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
    <CurrencyProvider>
      <div className="min-h-screen">
        {visibleComponents.map(([name]) => {
          const componentName = name.charAt(0).toUpperCase() + name.slice(1) + 'Cdco';
          const Component = componentMap[componentName as keyof typeof componentMap];
          if (!Component) return null;
          
          const props = content[name] || {};
          
          return <Component key={name} {...props} />;
        })}
      </div>
    </CurrencyProvider>
  );
}
