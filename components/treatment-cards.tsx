'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { treatments } from '@/lib/treatments'
import { Cite } from '@/components/citation'

export function TreatmentCards() {
  return (
    <Accordion className="rounded-lg border border-border bg-card px-4">
      {treatments.map((t) => (
        <AccordionItem key={t.id} value={t.id}>
          <AccordionTrigger className="text-sm font-semibold text-foreground">
            {t.name}
          </AccordionTrigger>
          <AccordionContent>
            <dl className="grid gap-2.5 sm:grid-cols-2">
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
