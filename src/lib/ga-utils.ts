// src/lib/ga-utils.ts

// Google Analytics utility functions for the ML portfolio

/**
 * Check if Google Analytics is available
 */
export const isGAAvailable = (): boolean => {
  return typeof window !== 'undefined' && 'gtag' in window && !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
}

/**
 * Get the Google Analytics Measurement ID
 */
export const getGAMeasurementId = (): string | undefined => {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
}

/**
 * Track page views manually (useful for SPA navigation)
 */
export const trackPageView = (path: string, title?: string) => {
  if (!isGAAvailable()) return

  const measurementId = getGAMeasurementId()
  if (!measurementId) return

  window.gtag('config', measurementId, {
    page_path: path,
    page_title: title || document.title,
  })
}

/**
 * Track ML project interactions
 */
export const trackMLProjectInteraction = (
  projectName: string,
  projectType: 'computer_vision' | 'nlp' | 'financial_ml' | 'ai_systems' | 'other',
  action: 'view' | 'click_github' | 'click_demo' | 'scroll_to_details'
) => {
  if (!isGAAvailable()) return

  window.gtag('event', 'ml_project_interaction', {
    event_category: 'ML Projects',
    event_label: projectName,
    project_type: projectType,
    interaction_type: action,
    custom_parameter_project_name: projectName,
  })
}

/**
 * Track skill section engagement
 */
export const trackSkillEngagement = (
  skillCategory: string,
  skillName?: string,
  action: 'view' | 'hover' | 'click' = 'view'
) => {
  if (!isGAAvailable()) return

  window.gtag('event', 'skill_engagement', {
    event_category: 'Skills',
    event_label: skillCategory,
    skill_name: skillName,
    engagement_type: action,
  })
}

/**
 * Track CV/Resume downloads with enhanced data
 */
export const trackCVDownload = (source: string = 'hero_section') => {
  if (!isGAAvailable()) return

  window.gtag('event', 'file_download', {
    event_category: 'Documents',
    event_label: 'CV Download',
    file_type: 'pdf',
    download_source: source,
    value: 50, // Estimated value of a CV download
  })

  // Also track as a conversion
  window.gtag('event', 'conversion', {
    send_to: getGAMeasurementId(),
    event_category: 'Lead Generation',
    event_label: 'CV Download',
  })
}

/**
 * Track contact form interactions
 */
export const trackContactFormInteraction = (
  action: 'start' | 'submit' | 'error' | 'success',
  formData?: { name?: string; email?: string; messageLength?: number }
) => {
  if (!isGAAvailable()) return

  const eventData: Record<string, unknown> = {
    event_category: 'Contact Form',
    event_label: action,
    form_interaction: action,
  }

  if (formData) {
    eventData.message_length = formData.messageLength
    eventData.has_company_email = formData.email ? formData.email.includes('@') && !formData.email.includes('gmail.com') && !formData.email.includes('yahoo.com') : false
  }

  window.gtag('event', 'contact_form_interaction', eventData)

  // Track successful submissions as conversions
  if (action === 'success') {
    window.gtag('event', 'conversion', {
      send_to: getGAMeasurementId(),
      event_category: 'Lead Generation',
      event_label: 'Contact Form Success',
      value: 1000, // High value for direct contact
    })
  }
}

/**
 * Track tech profile clicks with platform details
 */
export const trackTechProfileClick = (platform: string, profileUrl: string) => {
  if (!isGAAvailable()) return

  window.gtag('event', 'click', {
    event_category: 'External Links',
    event_label: platform,
    link_url: profileUrl,
    link_type: 'tech_profile',
    platform_name: platform,
  })
}

/**
 * Track scroll depth for engagement measurement
 */
export const trackScrollDepth = (percentage: number) => {
  if (!isGAAvailable()) return

  // Only track specific milestones
  if ([25, 50, 75, 100].includes(percentage)) {
    window.gtag('event', 'scroll', {
      event_category: 'Engagement',
      event_label: `${percentage}% Scroll`,
      value: percentage,
    })
  }
}

/**
 * Track time spent on sections (useful for portfolio analysis)
 */
export const trackSectionTime = (sectionName: string, timeSpent: number) => {
  if (!isGAAvailable()) return

  // Only track if time spent is meaningful (more than 5 seconds)
  if (timeSpent > 5000) {
    window.gtag('event', 'timing_complete', {
      event_category: 'User Engagement',
      event_label: sectionName,
      value: Math.round(timeSpent / 1000), // Convert to seconds
      section_name: sectionName,
    })
  }
}

/**
 * Track search queries (if you add search functionality)
 */
export const trackSearch = (query: string, resultsCount: number) => {
  if (!isGAAvailable()) return

  window.gtag('event', 'search', {
    search_term: query,
    event_category: 'Site Search',
    event_label: query,
    results_count: resultsCount,
  })
}

/**
 * Track user preferences and settings
 */
export const trackUserPreference = (
  preferenceType: 'theme' | 'language' | 'section_view',
  preferenceValue: string
) => {
  if (!isGAAvailable()) return

  window.gtag('event', 'user_preference', {
    event_category: 'User Settings',
    event_label: preferenceType,
    preference_type: preferenceType,
    preference_value: preferenceValue,
  })
}

/**
 * Track errors for debugging and improvement
 */
export const trackError = (
  errorType: 'contact_form' | 'analytics' | 'api' | 'ui',
  errorMessage: string,
  errorContext?: string
) => {
  if (!isGAAvailable()) return

  window.gtag('event', 'exception', {
    description: errorMessage,
    fatal: false,
    error_type: errorType,
    error_context: errorContext,
  })
}

/**
 * Track performance metrics
 */
export const trackPerformance = (metric: string, value: number, unit: string = 'ms') => {
  if (!isGAAvailable()) return

  window.gtag('event', 'timing_complete', {
    name: metric,
    value: value,
    event_category: 'Performance',
    event_label: `${metric}_${unit}`,
  })
}

/**
 * Enhanced ecommerce tracking for portfolio items
 */
export const trackPortfolioItemView = (
  itemId: string,
  itemName: string,
  itemCategory: string,
  value: number = 100
) => {
  if (!isGAAvailable()) return

  window.gtag('event', 'view_item', {
    currency: 'USD',
    value: value,
    items: [{
      item_id: itemId,
      item_name: itemName,
      item_category: itemCategory,
      quantity: 1,
      price: value,
    }]
  })
}