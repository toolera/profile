// src/components/ClientOnly.tsx
'use client'

import { useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

/**
 * Wrapper component that only renders children on the client side
 * Prevents hydration mismatches and SSR issues with client-only components
 */
const ClientOnly = ({ children, fallback = null }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

export default ClientOnly