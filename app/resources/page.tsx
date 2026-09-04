import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLinkIcon } from 'lucide-react'
import { PageHeader, SubHeading } from '@/components/section-heading'
import { resourceCategories } from '@/lib/resources'
import { getReference, references } from '@/lib/references'
import { Badge } from '@/components/ui/badge'
import { NextStepLink } from '@/components/next-step-link'
import { Cite } from '@/components/citation'

export const metadata: Metadata = {
  title: 'Resources | Pediatric Uveitis',
  description:
    'Verified Australian and international resources for pediatric uveitis, plus the reference list for this website.',
}

export default function ResourcesPage() {
  return (
    <div className="pb-16">
      <PageHeader
        eyebrow="Resources"
        title="Resources"
        intro={<>Australian services, family support and evidence for learning more about pediatric uveitis.<Cite ids={[25, 26, 27, 28, 31, 32]} /></>}
      />

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-10 sm:px-6">
        {resourceCategories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-6 space-y-3">
            <div>
              <SubHeading>{cat.title}</SubHeading>
              <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {cat.referenceIds.map((id) => {
                const ref = getReference(id)
                return (
                  <article key={ref.id} className="flex flex-col justify-between gap-3 rounded-lg border border-border bg-card p-4">
                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="text-sm font-semibold text-foreground">{ref.authors}</p>
                        <Badge variant="outline" className="text-[0.65rem]">{ref.type}</Badge>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{ref.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {ref.journal} ({ref.year}){ref.volume ? `, ${ref.volume}` : ''}{ref.issue ? `(${ref.issue})` : ''}{ref.pages ? `, ${ref.pages}` : ''}
                      </p>
                    </div>
                    {ref.url ? (
                      <a href={ref.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline">
                        Open source <ExternalLinkIcon className="size-3.5" />
                      </a>
                    ) : null}
                  </article>
                )
              })}
            </div>
          </section>
        ))}

        <section id="references" className="space-y-3 pt-4">
          <SubHeading>References</SubHeading>
          <p className="text-sm text-muted-foreground">
            Numbered citations throughout this website correspond to the
            list below.
          </p>
          <ol className="flex flex-col gap-2.5">
            {references.map((ref) => (
              <li
                key={ref.id}
                id={`ref-${ref.id}`}
                className="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-b border-border pb-2.5 text-sm text-foreground/90 last:border-b-0"
              >
                <span className="font-medium text-muted-foreground">
                  [{ref.id}]
                </span>
                <span>
                  {ref.authors} {ref.title} <em>{ref.journal}</em>. {ref.year}
                  {ref.volume ? `;${ref.volume}` : ''}
                  {ref.issue ? `(${ref.issue})` : ''}
                  {ref.pages ? `:${ref.pages}` : ''}.
                </span>
                <Badge variant="outline" className="text-[0.65rem]">
                  {ref.type}
                </Badge>
                {ref.url ? (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-secondary hover:underline"
                  >
                    View source
                  </a>
                ) : null}
                {ref.doi ? <span className="text-xs text-muted-foreground">DOI: {ref.doi}</span> : null}
              </li>
            ))}
          </ol>
        </section>

        <NextStepLink href="/faq">
          Common questions from other families
        </NextStepLink>
      </div>
    </div>
  )
}
