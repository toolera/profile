// src/components/GoogleAnalytics.tsx
'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
  }
}

interface GoogleAnalyticsProps {
  measurementId: string
}

// Separate component that uses useSearchParams
const GoogleAnalyticsTracker = ({ measurementId }: GoogleAnalyticsProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views when pathname or search params change
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      
      window.gtag('config', measurementId, {
        page_path: url,
        custom_map: {
          custom_parameter_1: 'ml_engineer_portfolio'
        }
      })
    }
  }, [pathname, searchParams, measurementId])

  return null
}

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              custom_map: {
                custom_parameter_1: 'ml_engineer_portfolio'
              },
              // Enhanced ecommerce and ML project tracking
              custom_dimensions: {
                project_type: 'ml_engineering',
                user_type: 'visitor'
              }
            });
            
            // Track custom events for ML portfolio
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              content_group1: 'ML Portfolio'
            });
          `,
        }}
      />
      
      {/* Wrap the tracker component in Suspense */}
      <Suspense fallback={null}>
        <GoogleAnalyticsTracker measurementId={measurementId} />
      </Suspense>
    </>
  )
}

// Helper functions for tracking custom events (unchanged)
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// ML-specific event tracking functions
export const trackProjectView = (projectName: string, projectType: string) => {
  trackEvent('view_project', 'ML Projects', projectName)
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ml_project_interaction', {
      project_name: projectName,
      project_type: projectType,
      interaction_type: 'view'
    })
  }
}

export const trackDownload = (fileName: string, downloadType: 'cv' | 'certificate' | 'other') => {
  trackEvent('download', 'Documents', fileName)
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      file_name: fileName,
      file_type: downloadType,
      download_method: 'direct_link'
    })
  }
}

export const trackContactFormSubmit = (source: string) => {
  trackEvent('contact_form_submit', 'Engagement', source)
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'USD',
      value: 1000, // Estimated lead value
      source: source
    })
  }
}

export const trackTechProfileClick = (platform: string) => {
  trackEvent('external_link_click', 'Tech Profiles', platform)
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      link_destination: platform,
      link_type: 'tech_profile'
    })
  }
}

export default GoogleAnalytics