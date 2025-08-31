'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  React.useEffect(() => {
    if (!open) return
    const prevBody = document.body.style.overflow
    const prevHtml = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevBody
      document.documentElement.style.overflow = prevHtml
    }
  }, [open])

  if (!open || !mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[100]" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <div className="relative" onWheel={(e) => e.stopPropagation()} onTouchMove={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
