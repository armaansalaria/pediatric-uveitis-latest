import { AlertTriangleIcon, ClockIcon, CalendarCheckIcon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Cite } from '@/components/citation'

type Tier = {
  id: string
  label: string
  icon: LucideIcon
  tone: 'urgent' | 'prompt' | 'routine'
  description: string
  examples: string[]
  citationIds: number[]
  emergency?: string
}

const tiers: Tier[] = [
  {
    id: 'urgent',
    label: 'Urgent professional assessment',
    icon: AlertTriangleIcon,
    tone: 'urgent',
    description: 'Contact an eye-care professional promptly.',
    citationIds: [2, 7],
    emergency:
      'In Australia, call 000 for an emergency or attend the nearest hospital emergency department. Healthdirect is available on 1800 022 222 for health advice.',
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
    citationIds: [2, 7],
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
    citationIds: [4, 7],
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
      <div className="space-y-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={cn(
              'rounded-xl border-2 p-5 sm:p-6',
              toneClasses[tier.tone]
            )}
          >
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-current/10">
                <tier.icon className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-lg font-bold">{tier.label}</p>
                <p className="mt-2 text-sm leading-relaxed opacity-90">
                  {tier.description}{' '}
                  {tier.examples.map((example, index) => (
                    <span key={example}>
                      <strong>{example}</strong>
                      {index < tier.examples.length - 1 ? ', ' : '.'}
                    </span>
                  ))}
                  <Cite ids={tier.citationIds} />
                </p>
                {tier.emergency ? (
                  <p className="mt-3 border-t border-current/15 pt-3 text-sm leading-relaxed opacity-90">
                    {tier.emergency} <Cite ids={[37]} />
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
