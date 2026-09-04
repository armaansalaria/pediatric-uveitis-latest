import type { Metadata } from 'next'
import { PageHeader, SubHeading } from '@/components/section-heading'
import { Cite } from '@/components/citation'
import { EyeAnatomy } from '@/components/eye-anatomy'
import { NextStepLink } from '@/components/next-step-link'
import {
  AlertTriangleIcon,
  DropletIcon,
  EyeIcon,
  FrownIcon,
  LightbulbIcon,
  SparklesIcon,
} from 'lucide-react'

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
        intro={<>What uveitis is, why it is taken seriously, and what it can mean for your child&apos;s eyes.<Cite ids={[1, 7, 13]} /></>}
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
            <Cite ids={[1]} /> This classification gives the care team a
            consistent way to describe the location and activity of
            inflammation during assessment and follow-up.
            <Cite ids={[1, 16]} />
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
                <Cite ids={[7, 13, 17]} /> This is why children with uveitis are
                monitored closely, even when their eyes look and feel normal.
              </p>
            </div>
          </div>
        </section>

        <section id="eye-anatomy" className="space-y-3">
          <SubHeading>What part of the eye is involved?</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            The uvea is the eye&apos;s middle layer: the iris, ciliary body and
            choroid. The interactive diagram shows these structures and the
            nearby parts of the eye described in uveitis classifications.
            <Cite ids={[1, 2]} />
          </p>
          <EyeAnatomy />
        </section>

        <section id="causes" className="space-y-3">
          <SubHeading>Causes and associations</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Causes vary. Some cases have no clear cause; others are linked
            with immune conditions, including juvenile idiopathic arthritis
            (JIA), or less commonly infection.
            <Cite ids={[2, 6, 20]} /> Children with JIA may need regular eye
            checks, even when their eyes seem fine.
            <Cite ids={[4, 7]} /> Risk factors described in childhood uveitis
            studies include the child&apos;s age, the pattern of eye
            inflammation and features of any associated condition.
            <Cite ids={[6, 8, 18, 19]} />
          </p>
        </section>

        <section id="signs-and-symptoms" className="space-y-3">
          <SubHeading>Signs and symptoms</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Signs can be subtle. Some children have clear symptoms, while
            others, especially those with JIA-associated uveitis, may have few
            or no obvious symptoms.
            <Cite ids={[1, 2, 4, 6]} />
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [EyeIcon, 'Blurred or reduced vision', 'Vision may be less clear or reduced at an eye test.'],
              [LightbulbIcon, 'Light sensitivity', 'Bright light may cause discomfort.'],
              [DropletIcon, 'Eye redness', 'The eye may look pink or red.'],
              [FrownIcon, 'Eye discomfort or pain', 'Some children may have discomfort or pain.'],
              [SparklesIcon, 'Floaters or visual changes', 'Small spots, dots or other visual disturbances may occur.'],
            ].map(([Icon, title, detail]) => (
              <div key={title as string} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-primary">{title as string}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {detail as string}<Cite ids={[2, 12]} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="subtle-symptoms" className="space-y-3">
          <SubHeading>When symptoms may be subtle</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Some children, especially those with JIA-associated anterior
            uveitis, may have few or no obvious symptoms. Scheduled eye checks
            therefore remain important.
            <Cite ids={[4, 6, 7, 18]} />
          </p>
          <div className="flex gap-3 rounded-xl border-l-4 border-tier-prompt bg-tier-prompt/30 p-5">
            <AlertTriangleIcon className="mt-0.5 size-5 shrink-0 text-tier-prompt-foreground" />
            <p className="text-sm leading-relaxed text-tier-prompt-foreground">
              Symptoms alone cannot establish the diagnosis. An eye
              examination is needed, including for children who have few
              symptoms.
              <Cite ids={[2, 4, 7, 12]} />
            </p>
          </div>
        </section>

        <section id="complications" className="space-y-3">
          <SubHeading>Possible complications</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Ongoing inflammation can cause complications such as cataract,
            glaucoma and macular oedema. Monitoring aims to identify
            complications and protect vision.
            <Cite ids={[5, 7, 13, 17]} /> Complications and visual outcomes
            are among the reasons treatment and regular eye examinations are
            used together.
            <Cite ids={[7, 13, 17]} />
          </p>
        </section>

        <section id="prognosis" className="space-y-3">
          <SubHeading>Prognosis / what to expect</SubHeading>
          <p className="text-pretty leading-relaxed text-foreground/90">
            Treatment and follow-up can help protect vision, but outcomes and
            the course of disease vary between children.
            <Cite ids={[7, 8, 13, 17]} /> Prognosis is influenced by the type
            of uveitis, the associated condition when present, complications
            and response to treatment.
            <Cite ids={[8, 13, 17, 20]} />
          </p>
        </section>

        <NextStepLink href="/management">
          What happens next and how it&apos;s managed
        </NextStepLink>
      </div>
    </div>
  )
}
