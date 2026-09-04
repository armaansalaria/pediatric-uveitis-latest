import Link from 'next/link'
import { EyeIcon } from 'lucide-react'
import { primaryNav } from '@/lib/site-nav'

export function SiteFooter() {
  return (
    <footer className="no-print border-t-4 border-secondary bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-10 sm:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <EyeIcon className="size-5" />
              </span>
              <p className="text-base font-bold">Pediatric Uveitis</p>
            </div>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Patient and family information about inflammation inside the
              eye in children and young people.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
              Sections
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
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
        </div>
      </div>
    </footer>
  )
}
