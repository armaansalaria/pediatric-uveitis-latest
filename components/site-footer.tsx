import Link from 'next/link'
import { primaryNav } from '@/lib/site-nav'

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-bold">Pediatric Uveitis</p>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Patient and family information about inflammation inside the
              eye in children and young people.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-secondary uppercase">
              Sections
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-primary-foreground/80">
              {primaryNav
                .filter((item) => item.href !== '/')
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-primary-foreground hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="text-xs font-semibold tracking-wide text-secondary uppercase">
              Disclaimer
            </p>
            <p className="mt-3 text-sm text-primary-foreground/80">
              This site is for general education only and does not replace professional medical advice. If you have immediate concerns about your child&apos;s eyes, please contact their care team or seek urgent care. We deeply respect First Nations cultures and traditional health practices, aiming to share information without imposing Western medical views.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
