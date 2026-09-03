import type { Metadata } from 'next'
import { PageHeader, SubHeading } from '@/components/section-heading'
import { Cite } from '@/components/citation'
import { CareTimeline } from '@/components/care-timeline'
import { TreatmentCards } from '@/components/treatment-cards'
import { UrgentHelp } from '@/components/urgent-help'
import { AppointmentChecklist } from '@/components/appointment-checklist'
import { NextStepLink } from '@/components/next-step-link'

export const metadata: Metadata = {
  title: 'Management | Pediatric Uveitis',
  description:
    'What happens next, treatment options, self-care, monitoring, and when to seek urgent help for pediatric uveitis.',
}

const selfCareItems = [
  'Keep to the agreed treatment routine, even when the eye feels normal.',
  'Attend follow-up appointments \u2014 they are how quiet inflammation gets caught.',
  'Let teachers know if light sensitivity or appointments may affect school.',
  'Mention any changes you notice between visits, even small ones.',
  'Support your child emotionally \u2014 drops and check-ups can feel like a lot.',
  'As teenagers get older, help them gradually take on more of their own care.',
  'Write down questions before appointments so nothing gets forgotten.',
]

export default function ManagementPage() {
  return (
    <div className="pb-16">
      <PageHeader
        eyebrow="Management"
        title="Managing pediatric uveitis"
        intro="What to expect, how treatment works, and what to watch for at home."
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
            <Cite ids={[4, 5, 6]} /> Select a category below for an outline.
            This is general information, not a personalised plan &mdash; your
            child&apos;s clinician will recommend what suits their
            situation, including doses and timing.
          </p>
          <TreatmentCards />
          <p className="text-sm text-muted-foreground">
            Biologic therapy such as adalimumab has trial evidence supporting
            its use in children whose JIA-associated uveitis has not
            responded to standard treatment.
            <Cite ids={[7, 8]} />
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
            <Cite ids={[4, 6]} /> Reviews may check vision, eye inflammation,
            eye pressure, and retinal or macular changes, alongside any
            effects of treatment.
            <Cite ids={[4, 6, 11]} /> There is no single schedule for every
            child &mdash; follow-up frequency depends on the type of
            uveitis, treatment and how your child&apos;s eyes are
            responding.
            <Cite ids={[4, 6]} />
          </p>
        </section>

        <section id="urgent-help" className="space-y-3">
          <SubHeading>When should I get urgent help?</SubHeading>
          <UrgentHelp />
        </section>

        <section id="checklist" className="space-y-3">
          <SubHeading>Questions to ask at the next appointment</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Tick off questions as you think of them, or print this list to
            take with you.
          </p>
          <AppointmentChecklist />
        </section>

        <NextStepLink href="/who-can-help">
          Who might be involved in your child&apos;s care
        </NextStepLink>
      </div>
    </div>
  )
}
