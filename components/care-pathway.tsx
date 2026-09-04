import { ArrowDownIcon, HeartPulseIcon, UserRoundIcon } from 'lucide-react'
import { Cite } from '@/components/citation'

export function CarePathway() {
  return (
    <figure className="print-break-avoid overflow-hidden rounded-xl border border-border bg-card p-4 sm:p-6">
      <figcaption className="text-center text-base font-bold text-foreground">
        The care team
      </figcaption>
      <div className="mt-5 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
          <UserRoundIcon className="size-4" />
          Child + family
        </div>
        <ArrowDownIcon className="size-4 text-muted-foreground" />
        <div className="grid w-full max-w-3xl items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-lg border border-sky-200 bg-sky-50 px-4 py-2.5 text-center text-sm font-semibold text-sky-800">
            Optometrist<Cite ids={[27]} />
          </div>
          <div className="hidden text-muted-foreground sm:block">→</div>
          <div className="rounded-lg border border-teal-200 bg-teal-50 px-4 py-2.5 text-center text-sm font-semibold text-teal-800">
            <HeartPulseIcon className="mr-1 inline-block size-4" />
            Ophthalmologist<Cite ids={[2, 7, 28]} />
          </div>
        </div>
        <div className="h-4 border-l border-border" />
        <div className="grid w-full max-w-3xl gap-2 sm:grid-cols-3">
          <div className="rounded-md bg-muted px-3 py-2 text-center text-xs font-medium text-foreground">
            GP / Paediatrician<Cite ids={[7, 20]} />
          </div>
          <div className="rounded-md bg-muted px-3 py-2 text-center text-xs font-medium text-foreground">
            Rheumatologist<Cite ids={[5, 7, 20]} />
          </div>
          <div className="rounded-md bg-muted px-3 py-2 text-center text-xs font-medium text-foreground">
            Other support
          </div>
        </div>
      </div>
    </figure>
  )
}
