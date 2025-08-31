'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function Llenis() {
  useEffect(() => {
    const lenis = new Lenis({
      // Let Lenis manage its own RAF to prevent duplicate loops
      autoRaf: true,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
