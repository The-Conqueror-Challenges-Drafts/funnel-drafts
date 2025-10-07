'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Types
export type CurrencyCode = 'AUD' | 'NZD' | 'CAD' | 'USD' | 'GBP' | 'EUR';

interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
}

interface IpApiResponse {
  country_code: string;
  [key: string]: unknown;
}

// Currency data
const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound' },
  CAD: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  NZD: { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar' },
};

// Country mapping
const COUNTRY_TO_CURRENCY: Record<string, CurrencyCode> = {
  'US': 'USD', 'GB': 'GBP', 'CA': 'CAD', 'AU': 'AUD', 'NZ': 'NZD'
};

// Context
const CurrencyContext = createContext<{
  currency: CurrencyCode;
  currencyInfo: CurrencyInfo;
  isLoading: boolean;
  formatPrice: (amount: number) => string;
} | undefined>(undefined);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within CurrencyProvider');
  return context;
};

// Provider
export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<CurrencyCode>(() => {
    // Check cache immediately on mount
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem('detected-currency') as CurrencyCode;
      if (cached && CURRENCIES[cached]) {
        return cached;
      }
    }
    return 'EUR';
  });
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading if no cache exists
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('detected-currency');
    }
    return true;
  });

  const currencyInfo = CURRENCIES[currency];

  const formatPrice = (amount: number): string => {
    // Use appropriate locale for each currency
    const localeMap: Record<CurrencyCode, string> = {
      'USD': 'en-US',
      'EUR': 'de-DE', 
      'GBP': 'en-GB',
      'CAD': 'en-CA',
      'AUD': 'en-AU',
      'NZD': 'en-NZ'
    };
    
    const locale = localeMap[currency] || 'en-US';
    
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  useEffect(() => {
    // Skip detection if already cached
    if (typeof window !== 'undefined' && localStorage.getItem('detected-currency')) {
      setIsLoading(false);
      return;
    }

    const detectCurrency = async () => {
      try {
        // Use fastest API with aggressive timeout
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), 500) // 500ms timeout
        );

        const detectionPromise = fetch('https://ipapi.co/json/', {
          method: 'GET',
          headers: { 'Accept': 'application/json' },
          mode: 'cors'
        }).then(response => {
          if (!response.ok) throw new Error('API failed');
          return response.json();
        });

        const data = await Promise.race([detectionPromise, timeoutPromise]) as IpApiResponse;
        const countryCode = data.country_code;
        
        if (countryCode) {
          const detectedCurrency = COUNTRY_TO_CURRENCY[countryCode] || 'EUR';
          setCurrency(detectedCurrency);
          // Cache for instant future loads
          localStorage.setItem('detected-currency', detectedCurrency);
        }
      } catch {
        // Silently fail and use default currency
      } finally {
        setIsLoading(false);
      }
    };

    detectCurrency();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, currencyInfo, isLoading, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Components
export const CurrencyDisplay: React.FC<{ 
  amount: number; 
  className?: string; 
  fallback?: string; 
}> = ({ amount, className, fallback = '€0' }) => {
  const { formatPrice, isLoading } = useCurrency();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Always show fallback during SSR and initial client render
  if (!mounted || isLoading) {
    return <span className={className}>{fallback}</span>;
  }

  return <span className={className}>{formatPrice(amount)}</span>;
};

export const CurrencySymbol: React.FC<{ 
  className?: string; 
  fallback?: string; 
}> = ({ className, fallback = '€' }) => {
  const { currencyInfo, isLoading } = useCurrency();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Always show fallback during SSR and initial client render
  if (!mounted || isLoading) {
    return <span className={className}>{fallback}</span>;
  }

  return <span className={className}>{currencyInfo.symbol}</span>;
};

