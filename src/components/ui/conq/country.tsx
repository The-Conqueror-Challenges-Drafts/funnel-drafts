'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Types
export type CountryCode = string;
export type CountryNameFormat = 'default' | 'with-article' | 'short';

interface CountryInfo {
  code: CountryCode;
  name: string;
  flag: string;
}

// Timezone to country mapping (most common timezones)
const TIMEZONE_TO_COUNTRY: Record<string, { code: string; name: string; short: string }> = {
  'America/New_York': { code: 'US', name: 'United States', short: 'USA' },
  'America/Chicago': { code: 'US', name: 'United States', short: 'USA' },
  'America/Denver': { code: 'US', name: 'United States', short: 'USA' },
  'America/Los_Angeles': { code: 'US', name: 'United States', short: 'USA' },
  'America/Phoenix': { code: 'US', name: 'United States', short: 'USA' },
  'America/Anchorage': { code: 'US', name: 'United States', short: 'USA' },
  'Pacific/Honolulu': { code: 'US', name: 'United States', short: 'USA' },
  'America/Toronto': { code: 'CA', name: 'Canada', short: 'CAN' },
  'America/Vancouver': { code: 'CA', name: 'Canada', short: 'CAN' },
  'America/Edmonton': { code: 'CA', name: 'Canada', short: 'CAN' },
  'America/Winnipeg': { code: 'CA', name: 'Canada', short: 'CAN' },
  'America/Halifax': { code: 'CA', name: 'Canada', short: 'CAN' },
  'Europe/London': { code: 'GB', name: 'United Kingdom', short: 'UK' },
  'Europe/Paris': { code: 'FR', name: 'France', short: 'FRA' },
  'Europe/Berlin': { code: 'DE', name: 'Germany', short: 'DEU' },
  'Europe/Madrid': { code: 'ES', name: 'Spain', short: 'ESP' },
  'Europe/Rome': { code: 'IT', name: 'Italy', short: 'ITA' },
  'Europe/Amsterdam': { code: 'NL', name: 'Netherlands', short: 'NLD' },
  'Europe/Brussels': { code: 'BE', name: 'Belgium', short: 'BEL' },
  'Europe/Vienna': { code: 'AT', name: 'Austria', short: 'AUT' },
  'Europe/Zurich': { code: 'CH', name: 'Switzerland', short: 'CHE' },
  'Europe/Stockholm': { code: 'SE', name: 'Sweden', short: 'SWE' },
  'Europe/Oslo': { code: 'NO', name: 'Norway', short: 'NOR' },
  'Europe/Copenhagen': { code: 'DK', name: 'Denmark', short: 'DNK' },
  'Europe/Helsinki': { code: 'FI', name: 'Finland', short: 'FIN' },
  'Europe/Dublin': { code: 'IE', name: 'Ireland', short: 'IRL' },
  'Europe/Lisbon': { code: 'PT', name: 'Portugal', short: 'PRT' },
  'Europe/Warsaw': { code: 'PL', name: 'Poland', short: 'POL' },
  'Europe/Prague': { code: 'CZ', name: 'Czech Republic', short: 'CZE' },
  'Europe/Bucharest': { code: 'RO', name: 'Romania', short: 'ROU' },
  'Europe/Athens': { code: 'GR', name: 'Greece', short: 'GRC' },
  'Asia/Tokyo': { code: 'JP', name: 'Japan', short: 'JPN' },
  'Asia/Shanghai': { code: 'CN', name: 'China', short: 'CHN' },
  'Asia/Hong_Kong': { code: 'HK', name: 'Hong Kong', short: 'HKG' },
  'Asia/Singapore': { code: 'SG', name: 'Singapore', short: 'SGP' },
  'Asia/Seoul': { code: 'KR', name: 'South Korea', short: 'KOR' },
  'Asia/Dubai': { code: 'AE', name: 'United Arab Emirates', short: 'UAE' },
  'Asia/Kolkata': { code: 'IN', name: 'India', short: 'IND' },
  'Asia/Bangkok': { code: 'TH', name: 'Thailand', short: 'THA' },
  'Asia/Manila': { code: 'PH', name: 'Philippines', short: 'PHL' },
  'Australia/Sydney': { code: 'AU', name: 'Australia', short: 'AUS' },
  'Australia/Melbourne': { code: 'AU', name: 'Australia', short: 'AUS' },
  'Australia/Brisbane': { code: 'AU', name: 'Australia', short: 'AUS' },
  'Australia/Perth': { code: 'AU', name: 'Australia', short: 'AUS' },
  'Pacific/Auckland': { code: 'NZ', name: 'New Zealand', short: 'NZL' },
  'America/Mexico_City': { code: 'MX', name: 'Mexico', short: 'MEX' },
  'America/Sao_Paulo': { code: 'BR', name: 'Brazil', short: 'BRA' },
  'America/Buenos_Aires': { code: 'AR', name: 'Argentina', short: 'ARG' },
  'Africa/Johannesburg': { code: 'ZA', name: 'South Africa', short: 'ZAF' },
};

// Only map countries that need "the" article for proper grammar
const COUNTRIES_WITH_ARTICLE: Record<string, string> = {
  'US': 'the United States',
  'GB': 'the United Kingdom',
  'NL': 'the Netherlands',
  'PH': 'the Philippines',
  'CZ': 'the Czech Republic',
  'AE': 'the United Arab Emirates',
  'BS': 'the Bahamas',
  'GM': 'the Gambia',
  'CD': 'the Democratic Republic of the Congo',
  'CF': 'the Central African Republic',
  'DO': 'the Dominican Republic',
};

// Helper to get country from browser timezone
const getCountryFromTimezone = (): { code: string; name: string; short: string } => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const country = TIMEZONE_TO_COUNTRY[timezone];
    
    if (country) {
      return country;
    }
    
    // Fallback: try to guess from timezone format (e.g., "America/..." -> US)
    if (timezone.startsWith('America/')) {
      return { code: 'US', name: 'United States', short: 'USA' };
    } else if (timezone.startsWith('Europe/')) {
      return { code: 'GB', name: 'United Kingdom', short: 'UK' };
    } else if (timezone.startsWith('Asia/')) {
      return { code: 'SG', name: 'Singapore', short: 'SGP' };
    } else if (timezone.startsWith('Australia/')) {
      return { code: 'AU', name: 'Australia', short: 'AUS' };
    }
  } catch {
    // Fallback if timezone detection fails
  }
  
  return { code: 'US', name: 'United States', short: 'USA' }; // Default fallback
};

// Helper to get flag emoji from country code
const getCountryFlag = (countryCode: string): string => {
  if (!countryCode || countryCode.length !== 2) return '🌍';
  
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  
  return String.fromCodePoint(...codePoints);
};

// Helper to get formatted country name
const getCountryName = (
  countryCode: string, 
  countryName: string, 
  shortCode: string,
  format: CountryNameFormat = 'default'
): string => {
  if (!countryName || countryName === 'Unknown') {
    return 'Unknown';
  }
  
  // Return short code if requested
  if (format === 'short') {
    return shortCode;
  }
  
  // Return with article if requested and available
  if (format === 'with-article' && COUNTRIES_WITH_ARTICLE[countryCode]) {
    return COUNTRIES_WITH_ARTICLE[countryCode];
  }
  
  // Default: return the country name
  return countryName;
};

// Context
interface CountryContextValue {
  country: CountryCode;
  countryInfo: CountryInfo;
  isLoading: boolean;
  getFormattedName: (format?: CountryNameFormat) => string;
}

const CountryContext = createContext<CountryContextValue | undefined>(undefined);

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) throw new Error('useCountry must be used within CountryProvider');
  return context;
};

// Provider
export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [country, setCountry] = useState<CountryCode>('US');
  const [countryName, setCountryName] = useState<string>('United States');
  const [shortCode, setShortCode] = useState<string>('USA');
  const [isLoading, setIsLoading] = useState(true);

  // Function to get formatted name with different options
  const getFormattedName = (format: CountryNameFormat = 'default'): string => {
    return getCountryName(country, countryName, shortCode, format);
  };

  const countryInfo: CountryInfo = {
    code: country,
    name: countryName,
    flag: getCountryFlag(country),
  };

  useEffect(() => {
    // Detect country from timezone (instant, no API needed!)
    const detected = getCountryFromTimezone();
    setCountry(detected.code);
    setCountryName(detected.name);
    setShortCode(detected.short);
    setIsLoading(false);
  }, []);

  return (
    <CountryContext.Provider value={{ country, countryInfo, isLoading, getFormattedName }}>
      {children}
    </CountryContext.Provider>
  );
};

// Components
export const CountryDisplay: React.FC<{ 
  className?: string; 
  fallback?: string;
  showFlag?: boolean;
  showCode?: boolean;
  format?: CountryNameFormat;
}> = ({ 
  className, 
  fallback = 'Unknown', 
  showFlag = false, 
  showCode = false,
  format = 'default'
}) => {
  const { countryInfo, isLoading, getFormattedName } = useCountry();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Always show fallback during SSR and initial client render
  if (!mounted || isLoading) {
    return <span className={className}>{fallback}</span>;
  }

  let displayText = getFormattedName(format);
  if (showFlag) {
    displayText = `${countryInfo.flag} ${displayText}`;
  }
  if (showCode) {
    displayText = `${displayText} (${countryInfo.code})`;
  }

  return <span className={className}>{displayText}</span>;
};

export const CountryFlag: React.FC<{ 
  className?: string; 
  fallback?: string; 
}> = ({ className, fallback = '🌍' }) => {
  const { countryInfo, isLoading } = useCountry();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Always show fallback during SSR and initial client render
  if (!mounted || isLoading) {
    return <span className={className}>{fallback}</span>;
  }

  return <span className={className}>{countryInfo.flag}</span>;
};

export const CountryCode: React.FC<{ 
  className?: string; 
  fallback?: string; 
}> = ({ className, fallback = 'XX' }) => {
  const { countryInfo, isLoading } = useCountry();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Always show fallback during SSR and initial client render
  if (!mounted || isLoading) {
    return <span className={className}>{fallback}</span>;
  }

  return <span className={className}>{countryInfo.code}</span>;
};

