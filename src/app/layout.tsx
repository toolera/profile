// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { defaultMetadata } from '@/lib/seo'
import { PersonStructuredData, WebsiteStructuredData } from '@/components/StructuredData'
import ClientOnly from '@/components/ClientOnly'
import AnalyticsProvider from '@/components/AnalyticsProvider'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-inter',
})

export const metadata: Metadata = defaultMetadata;

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
        <link rel="canonical" href="https://ismat.pro" />
        {/* Preconnect to key domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect to Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
          </>
        )}
      </head>
      <body className={`bg-gray-50 text-gray-900 antialiased`}>
        {/* Add structured data */}
        <PersonStructuredData />
        <WebsiteStructuredData />
        
        {/* Add structured data */}
        <PersonStructuredData />
        <WebsiteStructuredData />
        
        {/* Add Google Analytics if measurement ID is provided */}
        {GA_MEASUREMENT_ID && (
          <ClientOnly>
            <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
          </ClientOnly>
        )}
        
        {/* Add custom analytics provider wrapped in ClientOnly */}
        <ClientOnly>
          <AnalyticsProvider>
            <></>
          </AnalyticsProvider>
        </ClientOnly>
        
        {/* Main content */}
        {children}
      </body>
    </html>
  )
}