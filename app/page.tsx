import Link from 'next/link'
import { AlertTriangleIcon, ArrowRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EyeDiagramSvg } from '@/components/eye-diagram-svg'
import { primaryNav, urgentHelpHref } from '@/lib/site-nav'

const startHereCards = [
  { label: 'What is it?', href: '/overview#what-is-it' },
  { label: 'What might I notice?', href: '/overview#signs-and-symptoms' },
  { label: 'What happens next?', href: '/management#what-happens-next' },
  { label: 'How is it managed?', href: '/management#treatment' },
  { label: 'Who can help?', href: '/who-can-help' },
]

export default function Home() {
  return (
    <div>
      <section className="border-b border-border bg-primary">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
              Pediatric Uveitis
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold text-primary-foreground sm:text-5xl">
              Understanding inflammation inside the eye
            </h1>
            <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Clear, evidence-based information for children, young people,
              parents and carers.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button render={<Link href="/overview" />} nativeButton={false} size="lg">
                Start with the overview
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button
                render={<Link href={urgentHelpHref} />}
                nativeButton={false}
                variant="destructive"
                size="lg"
              >
                <AlertTriangleIcon data-icon="inline-start" />
                When to seek urgent help
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4">
            <EyeDiagramSvg className="[&_title]:sr-only" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          Start here
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {startHereCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col justify-between gap-2 rounded-lg border border-border bg-card p-4 transition-colors hover:border-secondary"
            >
              <span className="text-sm font-semibold text-foreground">
                {card.label}
              </span>
              <ArrowRightIcon className="size-4 text-secondary transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Explore the website
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {primaryNav
              .filter((item) => item.href !== '/')
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-4 transition-colors hover:border-secondary"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                  <ArrowRightIcon className="size-4 shrink-0 text-secondary transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
