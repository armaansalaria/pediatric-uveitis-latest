import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: ReactNode
}) {
  return (
    <div className="border-b border-border bg-primary">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold text-primary-foreground sm:text-4xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/85">
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export function SubHeading({
  id,
  children,
  className,
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      id={id}
      className={cn(
        'text-xl font-bold text-primary sm:text-2xl',
        className
      )}
    >
      {children}
    </h2>
  )
}
