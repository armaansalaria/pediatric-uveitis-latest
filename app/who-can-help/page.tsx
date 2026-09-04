import type { Metadata } from 'next'
import { PageHeader, SubHeading } from '@/components/section-heading'
import { Cite } from '@/components/citation'
import { CarePathway } from '@/components/care-pathway'
import { NextStepLink } from '@/components/next-step-link'
import { careRoles } from '@/lib/care-roles'
import {
  ActivityIcon,
  BabyIcon,
  EyeIcon,
  FlaskConicalIcon,
  HeartIcon,
  PillIcon,
  ScanEyeIcon,
  StethoscopeIcon,
} from 'lucide-react'

const displayedRoles = careRoles.filter((role) => role.id !== 'other-support')

const roleIcons = {
  optometrist: EyeIcon,
  ophthalmologist: ActivityIcon,
  gp: StethoscopeIcon,
  paediatrician: BabyIcon,
  rheumatologist: FlaskConicalIcon,
  pharmacist: PillIcon,
  orthoptist: ScanEyeIcon,
  'aboriginal-health': HeartIcon,
} as const

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
        intro={<>Care for pediatric uveitis may involve several professionals working together around your child.<Cite ids={[5, 7, 20]} /></>}
      />

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-10 sm:px-6">
        <section className="space-y-3">
          <SubHeading>How care may connect</SubHeading>
          <CarePathway />
        </section>

        <section className="space-y-3">
          <SubHeading>The care team</SubHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {displayedRoles.map((role) => {
              const RoleIcon = roleIcons[role.id as keyof typeof roleIcons]
              return (
                <article key={role.id} className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary/20 text-secondary-foreground">
                      <RoleIcon className="size-5 text-secondary" />
                    </span>
                    <h3 className="text-sm font-bold text-foreground">{role.name}</h3>
                  </div>
                  <dl className="mt-3 space-y-2 text-sm leading-relaxed">
                    <div>
                      <dt className="text-[0.65rem] font-bold tracking-wide text-secondary uppercase">Who they are</dt>
                      <dd className="text-muted-foreground">{role.who}<Cite ids={role.citationIds ?? []} /></dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] font-bold tracking-wide text-secondary uppercase">What they may do</dt>
                      <dd className="text-muted-foreground">{role.does}<Cite ids={role.citationIds ?? []} /></dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] font-bold tracking-wide text-secondary uppercase">When they may be involved</dt>
                      <dd className="text-muted-foreground">{role.when}<Cite ids={role.citationIds ?? []} /></dd>
                    </div>
                  </dl>
                </article>
              )
            })}
          </div>
          <div className="grid gap-3 pt-3 sm:grid-cols-2">
            <div className="rounded-lg border border-teal-200 bg-teal-50 p-4 text-sm leading-relaxed text-teal-950">
              <p className="font-bold">Referral pathways</p>
              <p className="mt-2">Your GP or optometrist may refer your child to an ophthalmologist. Further referral depends on the clinical assessment and associated conditions.<Cite ids={[2, 7, 20, 27, 28]} /></p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
              <p className="font-bold">Urgent versus routine</p>
              <p className="mt-2">For sudden vision changes, severe eye pain or rapidly worsening symptoms, contact an eye-care professional promptly. For stable symptoms, follow the agreed review plan.<Cite ids={[2, 7]} /></p>
            </div>
          </div>
        </section>

        <NextStepLink href="/resources">
          Find useful resources
        </NextStepLink>
      </div>
    </div>
  )
}
