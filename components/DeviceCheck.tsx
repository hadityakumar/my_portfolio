'use client'

import { useEffect, useState } from 'react'

export default function DeviceCheck({ children }: { children: React.ReactNode }) {
  const [allowed, setAllowed] = useState<boolean | null>(null)

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()

    const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua)

    if (isMobile) {
      setAllowed(false)
    } else {
      setAllowed(true)
    }
  }, [])

  if (allowed === null) return null 

  if (!allowed) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold mb-4">🚫 Sory this website is only for pc - laptop - or tv users</h1>
        <p className="text-lg">Please visit it from a laptop, computer, or a tv to view the full portfolio.✨</p>
      </div>
    )
  }

  return <>{children}</>
}
