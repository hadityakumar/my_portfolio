'use client'

import dynamic from 'next/dynamic'
import * as React from 'react'

const PdfViewerInner = dynamic(() => import('./pdf/PdfViewerInner'), {
  ssr: false,
  loading: () => (
    <div className="h-[80vh] w-[90vw] max-w-[1000px] flex items-center justify-center rounded-lg bg-[#111] text-[#F2F2F2]">
      Loading resume...
    </div>
  ),
})

export default function ResumeViewer({ fileUrl = '/Aug_resume.pdf' }: { fileUrl?: string }) {
  return <PdfViewerInner fileUrl={fileUrl} />
}
