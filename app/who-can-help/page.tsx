import type { Metadata } from 'next'
import { PageHeader, SubHeading } from '@/components/section-heading'
import { Cite } from '@/components/citation'
import { NextStepLink } from '@/components/next-step-link'

export const metadata: Metadata = {
  title: 'Who Can Help? | Pediatric Uveitis',
  description:
    'The professionals who may be involved in caring for a child with uveitis, and how care is coordinated.',
}

export default function WhoCanHelpPage() {
  return (
    <div className="pb-16">
      <PageHeader
        eyebrow="Who Can Help?"
        title="Who can help?"
        intro="Care for pediatric uveitis often involves more than one professional, working together around your child."
      />

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-10 sm:px-6">
        <section className="space-y-3">
          <SubHeading>A flexible care pathway</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Not every child needs every professional shown below. This is a
            flexible pathway that can start in different places depending on
            how symptoms are first noticed, and professionals communicate
            with each other along the way.
            <Cite ids={[5, 7, 20, 27, 28]} />
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            An optometrist may be an initial point of contact. An
            ophthalmologist assesses and manages uveitis. A GP or paediatrician
            may help coordinate care, and a rheumatologist may manage an
            associated condition such as JIA.
            <Cite ids={[2, 5, 7, 20, 27, 28]} />
          </p>
        </section>

        <section className="space-y-3">
          <SubHeading>The care team</SubHeading>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The professionals involved depend on the child&apos;s condition,
            treatment and response. Not every child needs every professional.
            <Cite ids={[5, 7, 20]} />
          </p>
        </section>

        <NextStepLink href="/resources">
          Find useful resources
        </NextStepLink>
      </div>
    </div>
  )
}
