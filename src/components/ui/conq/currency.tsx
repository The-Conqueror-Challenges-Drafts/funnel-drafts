'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Types
export type CurrencyCode = 'AUD' | 'NZD' | 'CAD' | 'USD' | 'GBP' | 'EUR';

interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
}

interface IpRegistryResponse {
  location: {
    country: {
      code: string;
    };
  };
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

// Country mapping - only specific countries that DON'T use EUR
const COUNTRY_TO_CURRENCY: Record<string, CurrencyCode> = {
  'US': 'USD',    // United States
  'GB': 'GBP',    // Great Britain  
  'CA': 'CAD',    // Canada
  'AU': 'AUD',    // Australia
  'NZ': 'NZD'     // New Zealand
  // All other countries will default to EUR
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
        // Use API with reasonable timeout
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), 2000) // 2 second timeout
        );

        const detectionPromise = fetch('https://api.ipregistry.co/?key=ira_78SZQvRyF7CC4TPc5xZAsJ4NKO1Lfn1VEG2E', {
          method: 'GET',
          headers: { 'Accept': 'application/json' },
          mode: 'cors'
        }).then(response => {
          if (!response.ok) throw new Error('API failed');
          return response.json();
        });

        const data = await Promise.race([detectionPromise, timeoutPromise]) as IpRegistryResponse;
        const countryCode = data.location?.country?.code;
        
        console.log('API Response - Country Code:', countryCode);
        console.log('Available currencies for this country:', COUNTRY_TO_CURRENCY[countryCode]);
        
        if (countryCode) {
          const detectedCurrency = COUNTRY_TO_CURRENCY[countryCode] || 'EUR';
          console.log('Currency detected from API:', countryCode, '->', detectedCurrency);
          setCurrency(detectedCurrency);
          // Cache for instant future loads
          localStorage.setItem('detected-currency', detectedCurrency);
        } else {
          // Fallback: try to detect from timezone if API fails
          try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            let fallbackCurrency: CurrencyCode = 'EUR';
            
            console.log('API failed - using timezone fallback. Timezone:', timezone);
            
            if (timezone === 'Pacific/Auckland') {
              fallbackCurrency = 'NZD';
            } else if (timezone.startsWith('Australia/')) {
              fallbackCurrency = 'AUD';
            } else if (timezone.startsWith('America/')) {
              fallbackCurrency = 'USD';
            } else if (timezone.startsWith('Europe/')) {
              fallbackCurrency = 'EUR';
            }
            
            console.log('Currency detected from timezone fallback:', timezone, '->', fallbackCurrency);
            setCurrency(fallbackCurrency);
            localStorage.setItem('detected-currency', fallbackCurrency);
          } catch {
            // Keep default EUR
          }
        }
      } catch (error) {
        console.log('Currency detection API failed:', error);
        // API failed, try timezone-based fallback
        try {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          let fallbackCurrency: CurrencyCode = 'EUR';
          
          console.log('API completely failed - using timezone fallback. Timezone:', timezone);
          
          if (timezone === 'Pacific/Auckland') {
            fallbackCurrency = 'NZD';
          } else if (timezone.startsWith('Australia/')) {
            fallbackCurrency = 'AUD';
          } else if (timezone.startsWith('America/')) {
            fallbackCurrency = 'USD';
          } else if (timezone.startsWith('Europe/')) {
            fallbackCurrency = 'EUR';
          }
          
          console.log('Currency detected from timezone fallback (API failed):', timezone, '->', fallbackCurrency);
          setCurrency(fallbackCurrency);
          localStorage.setItem('detected-currency', fallbackCurrency);
        } catch {
          // Keep default EUR
        }
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
  showLoading?: boolean;
}> = ({ amount, className, fallback = '€0', showLoading = true }) => {
  const { formatPrice, isLoading } = useCurrency();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Always show fallback during SSR and initial client render
  if (!mounted || (isLoading && showLoading)) {
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

