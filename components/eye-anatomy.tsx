'use client'

import { useState } from 'react'
import { EyeDiagramSvg } from '@/components/eye-diagram-svg'
import { eyeStructures } from '@/lib/eye-structures'
import { Badge } from '@/components/ui/badge'
import { Cite } from '@/components/citation'

export function EyeAnatomy() {
  const [activeId, setActiveId] = useState<string>('iris')
  const active = eyeStructures.find((s) => s.id === activeId) ?? eyeStructures[0]

  return (
    <div className="max-w-2xl">
      <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
        <EyeDiagramSvg
          activeId={activeId}
          onSelect={setActiveId}
          interactive
        />
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Tap or select a structure to see what it does and how it relates to
          uveitis. Coloured band = the uvea (iris, ciliary body, choroid). <Cite ids={[1]} />
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
              <dd className="text-muted-foreground">{active.uveitis}<Cite ids={active.citationIds} /></dd>
            </div>
          </dl>
        </div>
      </div>

    </div>
  )
}
