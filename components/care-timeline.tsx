'use client'

import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { careTimeline } from '@/lib/care-timeline'
import { cn } from '@/lib/utils'
import { Cite } from '@/components/citation'

export function CareTimeline() {
  const [openStep, setOpenStep] = useState<number | null>(1)

  return (
    <>
    <ol className="relative flex flex-col gap-2 no-print before:absolute before:top-5 before:bottom-5 before:left-[1.75rem] before:border-l before:border-primary/20">
      {careTimeline.map((item) => {
        const open = openStep === item.step
        return (
          <li
            key={item.step}
            className="print-break-avoid overflow-hidden rounded-lg border border-border bg-card"
          >
            <button
              type="button"
              onClick={() => setOpenStep(open ? null : item.step)}
              aria-expanded={open}
              className="relative z-10 flex w-full items-center gap-3 bg-card px-4 py-3 text-left"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {item.step}
              </span>
              <span className="flex-1 text-sm font-semibold text-foreground">
                {item.title}
              </span>
              <ChevronDownIcon
                className={cn(
                  'size-4 shrink-0 text-muted-foreground transition-transform',
                  open && 'rotate-180'
                )}
              />
            </button>
            {open ? (
              <p className="px-4 pb-4 pl-14 text-sm leading-relaxed text-muted-foreground">
                {item.detail}<Cite ids={item.citationIds} />
              </p>
            ) : null}
          </li>
        )
      })}
    </ol>
    <ol className="hidden print:block">
      {careTimeline.map((item) => (
        <li key={item.step} className="py-1.5 text-sm">
          <strong>
            {item.step}. {item.title}:
          </strong>{' '}
          {item.detail}<Cite ids={item.citationIds} />
        </li>
      ))}
    </ol>
    </>
  )
}
