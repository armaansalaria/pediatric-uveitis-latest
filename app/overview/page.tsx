import type { Metadata } from 'next'
import { PageHeader, SubHeading } from '@/components/section-heading'
import { Cite } from '@/components/citation'
import { EyeAnatomy } from '@/components/eye-anatomy'
import { NextStepLink } from '@/components/next-step-link'
import { AlertTriangleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Disease/Condition Overview | Pediatric Uveitis',
  description:
    'What pediatric uveitis is, why it matters, causes and associations, signs and symptoms, and what to expect.',
}

export default function OverviewPage() {
  return (
    <div className="pb-16">
      <PageHeader
        eyebrow="Disease/Condition Overview"
        title="Understanding pediatric uveitis"
        intro="What uveitis is, why it's taken seriously, and what it can mean for your child's eyes."
      />

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-10 sm:px-6">
        <section id="what-is-it" className="space-y-3">
          <SubHeading>What is pediatric uveitis?</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            <strong>Uveitis means inflammation inside the eye.</strong>
            <Cite ids={[1]} /> In children, it usually affects the uvea — the
            iris, ciliary body and choroid — although nearby structures such
            as the vitreous or retina can also be involved.
            <Cite ids={[1, 2]} /> Doctors group uveitis by which part of the
            eye is affected: anterior, intermediate, posterior, or panuveitis
            when all layers are involved.
            <Cite ids={[1]} />
          </p>

          <div className="print-break-avoid flex gap-3 rounded-lg border border-tier-prompt bg-tier-prompt/40 p-4">
            <AlertTriangleIcon className="mt-0.5 size-5 shrink-0 text-tier-prompt-foreground" />
            <div>
              <p className="text-sm font-semibold text-tier-prompt-foreground">
                Why it matters
              </p>
              <p className="mt-1 text-sm leading-relaxed text-tier-prompt-foreground/90">
                Untreated or poorly controlled inflammation can damage
                structures inside the eye over time and affect vision.
                <Cite ids={[4, 6]} /> This is why children with uveitis are
                monitored closely, even when their eyes look and feel normal.
              </p>
            </div>
          </div>
        </section>

        <section id="eye-anatomy" className="space-y-3">
          <SubHeading>What part of the eye is involved?</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            The uvea is the eye&apos;s middle layer. Select a structure in
            the diagram below to see where it sits and how it relates to
            uveitis — not every type of uveitis affects every structure.
          </p>
          <EyeAnatomy />
        </section>

        <section id="causes" className="space-y-3">
          <SubHeading>Causes and associations</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            The cause of uveitis varies between children.
            <Cite ids={[1, 3]} /> Some cases are idiopathic, meaning no clear
            cause is found. Others relate to the immune system reacting
            against the body&apos;s own tissues, a systemic inflammatory
            condition, or — less commonly — infection.
            <Cite ids={[1, 2]} /> Juvenile idiopathic arthritis (JIA) is the
            condition most often linked with childhood uveitis, though most
            children with JIA never develop eye inflammation, and not every
            child with uveitis has JIA.
            <Cite ids={[4, 10]} /> Because of this link, children with JIA
            usually have regular eye checks even when their eyes seem fine.
            <Cite ids={[4]} />
          </p>
        </section>

        <section id="signs-and-symptoms" className="space-y-3">
          <SubHeading>Signs and symptoms</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Symptoms depend on which part of the eye is affected and can
            include blurred or reduced vision, sensitivity to light, redness,
            eye pain or discomfort, and floaters or other visual
            disturbances.
            <Cite ids={[1, 2]} /> Some children describe their vision as
            hazy or &quot;not quite right&quot; rather than clearly worse.
          </p>
        </section>

        <section id="subtle-symptoms" className="space-y-3">
          <SubHeading>When symptoms may be subtle</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Chronic anterior uveitis linked with JIA often causes few or no
            obvious symptoms, especially in young children.
            <Cite ids={[4, 9, 10]} /> A child can have significant
            inflammation inside the eye while looking and behaving
            completely normally.{' '}
            <strong>
              The absence of symptoms does not mean the absence of
              inflammation.
            </strong>{' '}
            This is why scheduled eye checks matter as much as checks
            prompted by symptoms.
            <Cite ids={[4]} />
          </p>
        </section>

        <section id="complications" className="space-y-3">
          <SubHeading>Possible complications</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            If inflammation continues without treatment, possible
            complications include cataract, glaucoma (raised eye pressure),
            band keratopathy and macular oedema, and, less commonly, vision
            loss.
            <Cite ids={[4, 9, 11]} /> Regular monitoring aims to detect these
            early, when they are easier to manage.
            <Cite ids={[6, 11]} />
          </p>
        </section>

        <section id="prognosis" className="space-y-3">
          <SubHeading>Prognosis / what to expect</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            With appropriate treatment and follow-up, many children with
            uveitis maintain good vision.
            <Cite ids={[9, 11]} /> The course varies: some children have a
            single episode, while others have inflammation that comes and
            goes over months or years.
            <Cite ids={[9]} /> Follow-up frequency depends on the child&apos;s
            condition, treatment and response, rather than a fixed schedule.
            <Cite ids={[4, 6]} /> Your child&apos;s eye care team can explain
            what to expect for their specific situation.
          </p>
        </section>

        <NextStepLink href="/management">
          What happens next and how it&apos;s managed
        </NextStepLink>
      </div>
    </div>
  )
}
