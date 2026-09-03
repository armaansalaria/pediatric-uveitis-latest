'use client'

import { useState } from 'react'
import { EyeDiagramSvg } from '@/components/eye-diagram-svg'
import { eyeStructures } from '@/lib/eye-structures'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export function EyeAnatomy() {
  const [activeId, setActiveId] = useState<string>('iris')
  const active = eyeStructures.find((s) => s.id === activeId) ?? eyeStructures[0]

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
      <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
        <EyeDiagramSvg
          activeId={activeId}
          onSelect={setActiveId}
          interactive
        />
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Tap or select a structure to see what it does and how it relates to
          uveitis. Coloured band = the uvea (iris, ciliary body, choroid).
        </p>
        <div
          aria-live="polite"
          className="mt-4 rounded-lg border border-border bg-muted/50 p-4"
        >
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-bold text-primary">{active.name}</h3>
            {active.isUvea ? (
              <Badge className="bg-secondary text-secondary-foreground">
                Part of the uvea
              </Badge>
            ) : null}
          </div>
          <dl className="mt-2 grid gap-2 text-sm leading-relaxed">
            <div>
              <dt className="font-medium text-foreground">Where it is</dt>
              <dd className="text-muted-foreground">{active.where}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">What it does</dt>
              <dd className="text-muted-foreground">{active.does}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Relevance to uveitis</dt>
              <dd className="text-muted-foreground">{active.uveitis}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Non-interactive equivalent: every structure listed and explained
          without needing to click anything. */}
      <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
        <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          All structures, at a glance
        </h3>
        <ul className="mt-3 flex flex-col divide-y divide-border">
          {eyeStructures.map((s) => (
            <li key={s.id} className="py-2.5">
              <button
                type="button"
                onClick={() => setActiveId(s.id)}
                className={cn(
                  'flex w-full items-start justify-between gap-3 rounded-md text-left outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  s.id === activeId && 'text-secondary'
                )}
              >
                <span>
                  <span className="text-sm font-semibold text-foreground">
                    {s.name}
                  </span>
                  {s.isUvea ? (
                    <span className="ml-2 text-[0.65rem] font-semibold tracking-wide text-secondary uppercase">
                      Uvea
                    </span>
                  ) : null}
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {s.uveitis}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
