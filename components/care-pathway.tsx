import { ArrowDownIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Cite } from '@/components/citation'

function Node({
  children,
  emphasis = false,
}: {
  children: ReactNode
  emphasis?: boolean
}) {
  return (
    <div
      className={
        emphasis
          ? 'rounded-lg border border-primary bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground'
          : 'rounded-lg border border-border bg-card px-4 py-2.5 text-center text-sm font-medium text-foreground'
      }
    >
      {children}
    </div>
  )
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 text-muted-foreground">
      <ArrowDownIcon className="size-4" />
      {label ? <span className="text-[0.7rem] italic">{label}</span> : null}
    </div>
  )
}

export function CarePathway() {
  return (
    <div className="print-break-avoid rounded-xl border border-border bg-card p-4 sm:p-6">
      <div className="mx-auto flex max-w-sm flex-col items-center gap-1">
        <Node emphasis>Child + family</Node>
        <Arrow label="initial eye care" />
        <Node>Optometrist / other first contact<Cite ids={[27, 28]} /></Node>
        <Arrow label="referral where needed" />
        <Node emphasis>Ophthalmologist<Cite ids={[2, 7]} /></Node>
        <ArrowDownIcon className="size-4 text-muted-foreground" />
        <div className="grid w-full gap-2 sm:grid-cols-3">
          <Node>GP / Paediatrician<Cite ids={[7, 20]} /></Node>
          <Node>Rheumatologist<Cite ids={[5, 7, 20]} /></Node>
          <Node>Other support</Node>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        A flexible pathway, not a fixed sequence &mdash; professionals
        communicate and collaborate, and not every child sees every
        professional shown here.
      </p>
    </div>
  )
}
