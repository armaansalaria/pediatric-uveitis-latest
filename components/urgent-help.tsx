import { AlertTriangleIcon, ClockIcon, CalendarCheckIcon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type Tier = {
  id: string
  label: string
  icon: LucideIcon
  tone: 'urgent' | 'prompt' | 'routine'
  description: string
  examples: string[]
}

const tiers: Tier[] = [
  {
    id: 'urgent',
    label: 'Urgent professional assessment',
    icon: AlertTriangleIcon,
    tone: 'urgent',
    description: 'Contact an eye-care professional promptly.',
    examples: [
      'Sudden or significant reduction in vision',
      'Severe eye pain',
      'Rapidly worsening symptoms',
    ],
  },
  {
    id: 'prompt',
    label: 'Prompt eye-care review',
    icon: ClockIcon,
    tone: 'prompt',
    description: 'Contact the eye-care team promptly for advice.',
    examples: [
      'New light sensitivity or redness',
      'New floaters or visual disturbance',
      'Discomfort that is not settling',
    ],
  },
  {
    id: 'routine',
    label: 'Routine follow-up',
    icon: CalendarCheckIcon,
    tone: 'routine',
    description: 'Follow the review plan agreed with the care team.',
    examples: [
      'No new symptoms',
      'Stable vision',
      'Following the agreed treatment routine',
    ],
  },
]

const toneClasses: Record<Tier['tone'], string> = {
  urgent: 'border-tier-urgent bg-tier-urgent/40 text-tier-urgent-foreground',
  prompt: 'border-tier-prompt bg-tier-prompt/40 text-tier-prompt-foreground',
  routine: 'border-tier-routine bg-tier-routine/40 text-tier-routine-foreground',
}

export function UrgentHelp() {
  return (
    <div className="print-break-avoid space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={cn(
              'rounded-lg border p-4',
              toneClasses[tier.tone]
            )}
          >
            <tier.icon className="size-5" />
            <p className="mt-2 text-sm font-bold">{tier.label}</p>
            <p className="mt-1 text-sm opacity-90">{tier.description}</p>
            <ul className="mt-2 flex flex-col gap-1 text-sm opacity-90">
              {tier.examples.map((ex) => (
                <li key={ex} className="flex gap-1.5">
                  <span aria-hidden="true">•</span>
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-border bg-muted/60 p-4 text-sm leading-relaxed text-foreground/90">
        <p>
          This is educational information, not a diagnostic tool. It cannot
          tell you whether your child has uveitis or how urgent their
          situation is.
        </p>
        <p className="mt-2 font-medium">
          If you are worried about your child&apos;s vision or their symptoms
          are rapidly worsening, contact an eye-care professional promptly.
          Because eye symptoms can have different causes, seek professional
          advice whenever you are unsure.
        </p>
      </div>
    </div>
  )
}
