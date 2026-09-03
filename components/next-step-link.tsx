import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

export function NextStepLink({
  href,
  children,
}: {
  href: string
  children: string
}) {
  return (
    <Link
      href={href}
      className="group mt-10 flex items-center justify-between gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-secondary"
    >
      <span className="text-sm text-muted-foreground">
        Next: <span className="font-medium text-foreground">{children}</span>
      </span>
      <ArrowRightIcon className="size-4 shrink-0 text-secondary transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}
