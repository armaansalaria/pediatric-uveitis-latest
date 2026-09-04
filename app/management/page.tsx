import type { Metadata } from 'next'
import { PageHeader, SubHeading } from '@/components/section-heading'
import { Cite } from '@/components/citation'
import { CareTimeline } from '@/components/care-timeline'
import { UrgentHelp } from '@/components/urgent-help'
import { NextStepLink } from '@/components/next-step-link'

export const metadata: Metadata = {
  title: 'Management | Pediatric Uveitis',
  description:
    'What happens next, treatment options, self-care, monitoring, and when to seek urgent help for pediatric uveitis.',
}

const selfCareItems = [
  'Follow the agreed treatment routine.',
  'Attend appointments and report changes between visits.',
  'Ask the care team about school, daily activities and involving your teenager in their own care.',
]

export default function ManagementPage() {
  return (
    <div className="pb-16">
      <PageHeader
        eyebrow="Management"
        title="Managing pediatric uveitis"
        intro={<>What to expect, how treatment is selected, and how monitoring is used.<Cite ids={[5, 7]} /></>}
      />

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-10 sm:px-6">
        <section id="what-happens-next" className="space-y-3">
          <SubHeading>What happens next?</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Select each step to see what it involves.{' '}
            <strong>
              Your child&apos;s pathway may look different
            </strong>{' '}
            depending on their symptoms, examination findings, possible
            underlying condition and response to treatment &mdash; not
            every child has every step.
          </p>
          <CareTimeline />
        </section>

        <section id="treatment" className="space-y-3">
          <SubHeading>Treatment</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Treatment aims to settle inflammation and protect vision.
            <Cite ids={[5, 7, 10]} /> This is general information, not a
            personalised plan. The clinician chooses treatment based on the
            child&apos;s inflammation, response and associated conditions.
            <Cite ids={[5, 7]} />
          </p>
          <p className="rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
            Treatment may include anti-inflammatory drops, corticosteroids,
            immune-modulating medicines, biologic therapy or management of
            complications.
            <Cite ids={[3, 5, 7, 10, 13, 23, 35]} />
          </p>
        </section>

        <section id="self-care" className="space-y-3">
          <SubHeading>Self-care: living with uveitis</SubHeading>
          <ul className="flex flex-col gap-2">
            {selfCareItems.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-pretty leading-relaxed text-foreground/90"
              >
                <span aria-hidden="true" className="text-secondary">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="monitoring" className="space-y-3">
          <SubHeading>Monitoring</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Regular monitoring matters because inflammation can be present
            without symptoms.
            <Cite ids={[4, 7]} /> Reviews may check vision, eye inflammation,
            eye pressure, and retinal or macular changes, alongside any
            effects of treatment.
            <Cite ids={[4, 5, 7]} /> There is no single schedule for every
            child &mdash; follow-up frequency depends on the type of
            uveitis, treatment and how your child&apos;s eyes are
            responding.
            <Cite ids={[5, 7]} />
          </p>
        </section>

        <section id="urgent-help" className="space-y-3">
          <SubHeading>When should I get urgent help?</SubHeading>
          <UrgentHelp />
        </section>

        <NextStepLink href="/who-can-help">
          Who might be involved in your child&apos;s care
        </NextStepLink>
      </div>
    </div>
  )
}
