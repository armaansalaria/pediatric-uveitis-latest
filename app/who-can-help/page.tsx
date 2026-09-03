import type { Metadata } from 'next'
import { PageHeader, SubHeading } from '@/components/section-heading'
import { careRoles } from '@/lib/care-roles'
import { CarePathway } from '@/components/care-pathway'
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
          </p>
          <CarePathway />
        </section>

        <section className="space-y-3">
          <SubHeading>The care team</SubHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {careRoles.map((role) => (
              <div
                key={role.id}
                className="rounded-lg border border-border bg-card p-4"
              >
                <p className="text-sm font-bold text-primary">{role.name}</p>
                <dl className="mt-2 flex flex-col gap-1.5 text-sm">
                  <div>
                    <dt className="inline font-medium text-foreground">
                      Who they are:{' '}
                    </dt>
                    <dd className="inline text-muted-foreground">
                      {role.who}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-foreground">
                      What they may do:{' '}
                    </dt>
                    <dd className="inline text-muted-foreground">
                      {role.does}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-foreground">
                      When involved:{' '}
                    </dt>
                    <dd className="inline text-muted-foreground">
                      {role.when}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <NextStepLink href="/resources">
          Find useful resources
        </NextStepLink>
      </div>
    </div>
  )
}
