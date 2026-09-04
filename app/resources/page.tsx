import type { Metadata } from 'next'
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
        {resourceCategories.map((cat, index) => (
          <details key={cat.id} id={cat.id} open={index === 0} className="group scroll-mt-6 border-b border-border pb-8">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-md outline-none [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-ring">
              <span>
                <span className="block text-xl font-bold text-primary sm:text-2xl">{cat.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{cat.description}</span>
              </span>
              <span aria-hidden="true" className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-md border border-border text-lg leading-none text-secondary transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
          </details>
        ))}

        <section id="references" className="space-y-3 pt-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <SubHeading>References</SubHeading>
              <p className="mt-1 text-sm text-muted-foreground">
                Numbered citations throughout this website correspond to the
                list below.
              </p>
            </div>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
              {references.length} sources
            </span>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {references.map((ref) => (
              <li
                key={ref.id}
                id={`ref-${ref.id}`}
                className="scroll-mt-6 py-4 pl-10 text-sm leading-relaxed text-foreground/90 marker:font-semibold marker:text-secondary"
              >
                <span className="-ml-8">
                  {ref.authors} {ref.title}. <em>{ref.journal}</em>. {ref.year}
                  {ref.volume ? `;${ref.volume}` : ''}
                  {ref.issue ? `(${ref.issue})` : ''}
                  {ref.pages ? `:${ref.pages}` : ''}.
                </span>
                <span className="mt-2 flex flex-wrap items-center gap-2">
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
                </span>
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
