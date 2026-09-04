import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader, SubHeading } from '@/components/section-heading'
import { Cite } from '@/components/citation'

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
          <p className="text-pretty text-lg leading-relaxed text-foreground/90">
            We acknowledge the Wadawurrung people, the Traditional Custodians
            of the land on which we stand. We pay our respects to their Elders,
            past, present and emerging, and acknowledge their deep and ongoing
            connection to Country, knowledge, and culture.
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
            <Cite ids={[26, 29]} /> Aboriginal and Torres Strait Islander
            families may benefit from services that recognise these factors
            and connect them with culturally appropriate support, such as
            Aboriginal Health Workers or Aboriginal community-controlled
            health services.
            <Cite ids={[26, 29]} />
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
