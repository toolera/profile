// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { defaultMetadata } from '@/lib/seo'
import { PersonStructuredData, WebsiteStructuredData } from '@/components/StructuredData'
import AnalyticsProvider from '@/components/AnalyticsProvider'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-inter',
})

export const metadata: Metadata = {
  ...defaultMetadata,
  verification: {
    google: 'Kwls1AEOMQVWmjtUqTsisEAJIhijYEZXBdVQBOjQ9Yk',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get Google Analytics Measurement ID from environment variables
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to key domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preconnect to Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <link rel="dns-prefetch" href="//www.googletagmanager.com" />
            <link rel="dns-prefetch" href="//www.google-analytics.com" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
          </>
        )}

        {/* Resource hints for improved performance */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        {/* Prefetch critical pages */}
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/blog" />
      </head>
      <body className={`bg-gray-50 text-gray-900 antialiased`}>
        {/* Add Google Analytics if measurement ID is provided */}
        {GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        )}
        
        {/* Add structured data */}
        <PersonStructuredData />
        <WebsiteStructuredData />
        
        {/* Add custom analytics provider */}
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  )
}