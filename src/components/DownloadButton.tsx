// src/components/DownloadButton.tsx
'use client'

import { FaDownload } from 'react-icons/fa'
import { useCallback } from 'react'
import { trackDownload } from '@/components/GoogleAnalytics'

interface DownloadButtonProps {
  filePath: string
  label: string
  className?: string
  variant?: 'primary' | 'secondary'
  documentType?: 'cv' | 'certificate' | 'other'
}

const DownloadButton = ({ 
  filePath, 
  label, 
  className = '',
  variant = 'primary',
  documentType = 'other'
}: DownloadButtonProps) => {
  // Function to track download events in both systems
  const trackDownloadEvent = useCallback(async () => {
    const fileName = filePath.split('/').pop() || 'unknown-file'
    
    try {
      // Track in custom analytics system
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: document.cookie.split('; ').find(row => row.startsWith('session_id='))?.split('=')[1],
          eventType: 'download',
          componentId: `download-${documentType}`,
          eventValue: fileName,
          pagePath: window.location.pathname
        }),
      })
      
      // Track in Google Analytics
      trackDownload(fileName, documentType)
      
    } catch (error) {
      // Silently fail - don't block the download if tracking fails
      console.error('Error tracking download:', error)
    }
  }, [filePath, documentType])

  const getButtonStyles = () => {
    if (variant === 'primary') {
      return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 py-2 px-4'
    }
    
    // For certificates and secondary buttons, make them more attractive
    if (documentType === 'certificate') {
      return 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 shadow-md hover:shadow-lg transform hover:scale-105 py-2 px-3'
    }
    
    return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border border-gray-300 shadow-sm hover:shadow-md transform hover:scale-105 py-2 px-3'
  }

  return (
    <a 
      href={filePath}
      download
      onClick={trackDownloadEvent}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ${getButtonStyles()} ${className}`}
      data-track={`download-${documentType}`}
    >
      <FaDownload className={`${variant === 'primary' || documentType === 'certificate' ? 'text-white' : 'text-gray-600'} text-sm`} />
      <span className="text-sm font-semibold">{label}</span>
    </a>
  )
}

export default DownloadButton