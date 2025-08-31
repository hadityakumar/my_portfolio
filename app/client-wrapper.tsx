'use client'

import { ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.77, 0, 0.175, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
