'use client'

import Script from 'next/script'

export default function GoogleAnalytics({ GA_ID }: { GA_ID: string }) {
  if (!GA_ID) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Google Analytics ID is missing. Set NEXT_PUBLIC_GA_ID in .env.local')
    }
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
