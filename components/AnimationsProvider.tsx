'use client'

import { useEffect } from 'react'
import { initializeAll } from '@/lib/animations'

export default function AnimationsProvider() {
  useEffect(() => {
    // Initialize all animations and interactive features
    initializeAll()
    
    // Reinitialize on content changes
    const handleMutations = () => {
      initializeAll()
    }
    
    const observer = new MutationObserver(handleMutations)
    observer.observe(document.body, { childList: true, subtree: true })
    
    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
