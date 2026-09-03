import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader, SubHeading } from '@/components/section-heading'
import { Cite } from '@/components/citation'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Acknowledgement of Country | Pediatric Uveitis',
  description:
    'Acknowledgement of Country and information on culturally safe care.',
}

export default function AcknowledgementPage() {
  return (
    <div className="pb-16">
      <PageHeader
        eyebrow="Acknowledgement of Country"
        title="Acknowledgement of Country"
      />

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-10 sm:px-6">
        <section className="print-break-avoid space-y-3 rounded-xl border border-border bg-card p-5 sm:p-6">
          <Badge variant="outline" className="no-print">
            Editable before submission
          </Badge>
          <p className="text-pretty text-lg leading-relaxed text-foreground/90">
            We acknowledge the{' '}
            <span className="rounded bg-accent px-1.5 py-0.5 font-semibold text-accent-foreground">
              [Traditional Owner/s]
            </span>{' '}
            as the Traditional Owners of the land on which this care is
            provided,{' '}
            <span className="rounded bg-accent px-1.5 py-0.5 font-semibold text-accent-foreground">
              [Practice location]
            </span>
            . We recognise their continuing connection to land, waters and
            community, and pay our respects to Elders past and present.
          </p>
        </section>

        <section id="culturally-safe-care" className="space-y-3">
          <SubHeading>Culturally safe care</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Healthcare experiences are shaped by more than a diagnosis.
            Language, location, transport, health literacy, family
            circumstances, previous healthcare experiences, access to
            specialist care, and cultural perspectives can all affect how a
            family experiences care.
            <Cite ids={[12]} /> Aboriginal and Torres Strait Islander
            families may benefit from services that recognise these factors
            and connect them with culturally appropriate support, such as
            Aboriginal Health Workers or Aboriginal community-controlled
            health services.
            <Cite ids={[12]} />
          </p>
          <p className="text-pretty leading-relaxed text-foreground/90">
            See{' '}
            <Link
              href="/resources#aboriginal-torres-strait-islander"
              className="text-secondary hover:underline"
            >
              Resources
            </Link>{' '}
            for Aboriginal and Torres Strait Islander eye-health services.
          </p>
        </section>
      </div>
    </div>
  )
}
