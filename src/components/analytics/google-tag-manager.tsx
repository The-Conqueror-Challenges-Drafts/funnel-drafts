'use client'

import Script from 'next/script'

interface GoogleTagManagerProps {
  gtmId: string
}

export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  if (!gtmId) {
    console.warn('Google Tag Manager: No GTM ID provided. Please pass gtmId prop.')
    return null
  }

  return (
    <>
      {/* Google Tag Manager - Head Script */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
    </>
  )
}

export function GoogleTagManagerNoScript({ gtmId }: GoogleTagManagerProps) {
  if (!gtmId) {
    return null
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

// Types for GTM data
interface GTMEcommerceItem {
  item_id?: string
  item_name?: string
  category?: string
  quantity?: number
  price?: number
}

type GTMDataLayerItem = Record<string, string | number | boolean | undefined | GTMEcommerceItem[] | object | Array<any>>

// Utility functions for Google Tag Manager
export const gtm = {
  // Push events to dataLayer
  push: (data: any) => {
    if (typeof window !== 'undefined' && window.dataLayer && Array.isArray(window.dataLayer)) {
      try {
        // Bypass TikTok's hijacked push function by using native Array.prototype.push
        Array.prototype.push.call(window.dataLayer, data)
      } catch (error) {
        console.error('GTM Error:', error)
      }
    }
  },

  // Track page views
  pageview: (url: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: url,
      })
    }
  },

  // Track custom events
  event: (eventName: string, parameters?: Record<string, string | number | boolean | undefined>) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
      })
    }
  },

  // Track conversions
  conversion: (conversionName: string, parameters?: Record<string, string | number | boolean | undefined>) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'conversion',
        conversion_name: conversionName,
        ...parameters,
      })
    }
  },

  // Track purchases/ecommerce
  purchase: (transactionId: string, value: number, currency: string = 'USD', items?: GTMEcommerceItem[]) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'purchase',
        transaction_id: transactionId,
        value: value,
        currency: currency,
        items: items,
      })
    }
  },

  // Email Lead Details should have this format
  /*

  {
    'leadEmail': email,
    'leadFirstName': firstName,
    'leadLastName': lastName
  }
  */

  emailLeadSubmit: (emailLeadDetails: {
    leadEmail: string;
    leadFirstName: string;
    leadLastName: string;
  }, challengeName: string, challengeImageUrl: string) => {
    if (typeof window !== 'undefined' && window.dataLayer && Array.isArray(window.dataLayer)) {
      try {
        // Bypass TikTok's hijacked push function by using native Array.prototype.push
        Array.prototype.push.call(window.dataLayer, {
          event: 'Email Lead Submit',
          emailLeadType: 'cDCO Email Lead',
          emailLeadDetails: emailLeadDetails,
          challengeName: challengeName,
          challengeImageUrl: challengeImageUrl,
        })
      } catch (error) {
        console.error('GTM Error:', error)
      }
    }
  }
}

// Extend the Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[]
  }
}
