'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { treatments } from '@/lib/treatments'
import { Cite } from '@/components/citation'

export function TreatmentCards() {
  return (
    <Accordion className="gap-3">
      {treatments.map((t) => (
        <AccordionItem key={t.id} value={t.id} className="rounded-xl border border-border bg-card px-5 shadow-sm">
          <AccordionTrigger className="min-h-16 py-4 text-base font-bold text-primary sm:text-lg">
            {t.name}
          </AccordionTrigger>
          <AccordionContent>
            <dl className="grid gap-4 border-t border-border py-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold tracking-wide text-secondary uppercase">
                  Why it may be used
                </dt>
                <dd className="text-muted-foreground">{t.why}<Cite ids={t.citationIds} /></dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-secondary uppercase">
                  What it does
                </dt>
                <dd className="text-muted-foreground">{t.what}<Cite ids={t.citationIds} /></dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-secondary uppercase">
                  What the family should know
                </dt>
                <dd className="text-muted-foreground">{t.family}<Cite ids={t.citationIds} /></dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-secondary uppercase">
                  Monitoring that may be needed
                </dt>
                <dd className="text-muted-foreground">{t.monitoring}<Cite ids={t.citationIds} /></dd>
              </div>
            </dl>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
