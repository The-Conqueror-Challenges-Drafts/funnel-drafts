import React from 'react';
import { CurrencyProvider, CurrencyDisplay } from '@/components/ui/conq/currency';

interface DefaultProps {
  'default-title': string;
  'default-description': string;
  'default-price'?: number;
}

const Default: React.FC<DefaultProps> = ({
  'default-title': title,
  'default-description': description,
  'default-price': price
}) => {
  return (
    <CurrencyProvider>
      <div className="text-center px-6">
        {/* Title */}
        <h1 className="text-4xl -mt-8 md:-mt-40 font-bold mb-4 text-gray-900">
          {title}
        </h1>
        
        {/* Description */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description} <CurrencyDisplay amount={price || 0} />
        </p>
      </div>
    </CurrencyProvider>
  );
};

export default Default;
