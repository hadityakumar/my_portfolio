'use client'

import * as React from 'react'
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function PdfViewerInner({ fileUrl }: { fileUrl: string }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (tabs) => [tabs[0], tabs[1]],
  })

  return (
    <div
      className="h-[80vh] w-[92vw] max-w-[1100px] rounded-xl overflow-hidden bg-[#0D0D0D] border border-white/10 shadow-xl"
      data-lenis-prevent
      data-lenis-prevent-wheel
      data-lenis-prevent-touch
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div
          className="h-[80vh] overflow-auto overscroll-contain touch-pan-y"
          onWheelCapture={(e) => e.stopPropagation()}
          onTouchMoveCapture={(e) => e.stopPropagation()}
        >
          <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} theme={{ theme: 'dark' }} />
        </div>
      </Worker>
    </div>
  )
}
