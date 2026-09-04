import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/section-heading'
import { faqItems } from '@/lib/faq'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { NextStepLink } from '@/components/next-step-link'
import { Cite } from '@/components/citation'

export const metadata: Metadata = {
  title: 'FAQ | Pediatric Uveitis',
  description: 'Common questions from families about pediatric uveitis.',
}

export default function FaqPage() {
  return (
    <div className="pb-16">
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Short answers to common questions from parents, carers and young people."
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <Accordion className="rounded-lg border border-border bg-card px-4">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-sm font-semibold text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.answer}{item.citationIds ? <Cite ids={item.citationIds} /> : null}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-4 text-sm text-muted-foreground">
          For medical questions specific to your child, speak with their
          eye care team &mdash; see{' '}
          <Link href="/who-can-help" className="text-secondary hover:underline">
            Who Can Help?
          </Link>
        </p>

        <NextStepLink href="/who-can-help">
          Who might be involved in your child&apos;s care
        </NextStepLink>
      </div>
    </div>
  )
}
