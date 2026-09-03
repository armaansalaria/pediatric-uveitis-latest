'use client'

import { cn } from '@/lib/utils'

type Props = {
  activeId?: string | null
  onSelect?: (id: string) => void
  interactive?: boolean
  className?: string
}

const REGION_BASE =
  'transition-colors duration-150 [&:not([data-active=true])]:opacity-90'

export function EyeDiagramSvg({
  activeId,
  onSelect,
  interactive = false,
  className,
}: Props) {
  function regionProps(id: string, label: string) {
    if (!interactive) return {}
    return {
      role: 'button' as const,
      tabIndex: 0,
      'aria-pressed': activeId === id,
      'aria-label': label,
      'data-active': activeId === id,
      onClick: () => onSelect?.(id),
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect?.(id)
        }
      },
      className: cn(
        REGION_BASE,
        'cursor-pointer outline-none focus-visible:opacity-100',
        activeId === id && 'opacity-100'
      ),
    }
  }

  return (
    <svg
      viewBox="60 60 520 380"
      className={cn('h-auto w-full', className)}
      role="img"
      aria-label="Simplified cross-section diagram of the eye"
    >
      <title>Simplified cross-section of the eye</title>

      {/* Sclera + cornea outer wall */}
      <g {...regionProps('sclera', 'Sclera, the outer white wall of the eye')}>
        <path
          d="M189.7,140.7 A170,170 0 1,1 189.7,359.3 C110,340 110,160 189.7,140.7 Z"
          fill={activeId === 'sclera' ? 'var(--secondary)' : 'var(--muted)'}
          stroke="var(--primary)"
          strokeWidth="2.5"
        />
      </g>

      {/* Cornea (drawn on top of sclera join) */}
      <g {...regionProps('cornea', 'Cornea, the clear front window of the eye')}>
        <path
          d="M189.7,140.7 C110,160 110,340 189.7,359.3"
          fill="none"
          stroke={activeId === 'cornea' ? 'var(--secondary)' : 'var(--primary)'}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M189.7,140.7 C130,160 130,340 189.7,359.3 L 200,355 C 145,335 145,165 200,145 Z"
          fill={
            activeId === 'cornea'
              ? 'color-mix(in oklch, var(--secondary), transparent 55%)'
              : 'color-mix(in oklch, var(--accent), transparent 30%)'
          }
        />
      </g>

      {/* Choroid band */}
      <g {...regionProps('choroid', 'Choroid, the blood vessel layer of the uvea')}>
        <path
          d="M184.9,172 A150,150 0 1,1 184.9,328"
          fill="none"
          stroke={activeId === 'choroid' ? 'var(--secondary)' : 'var(--chart-4)'}
          strokeWidth="16"
        />
      </g>

      {/* Retina band */}
      <g {...regionProps('retina', 'Retina, the light-sensing layer at the back of the eye')}>
        <path
          d="M195.3,178 A138,138 0 1,1 195.3,322"
          fill="none"
          stroke={activeId === 'retina' ? 'var(--secondary)' : 'var(--primary)'}
          strokeWidth="9"
        />
      </g>

      {/* Vitreous cavity */}
      <g {...regionProps('vitreous', 'Vitreous, the clear gel filling the back of the eye')}>
        <path
          d="M206.6,184.5 A131,131 0 1,1 206.6,315.5 Z"
          fill={
            activeId === 'vitreous'
              ? 'color-mix(in oklch, var(--secondary), transparent 70%)'
              : 'color-mix(in oklch, var(--accent), transparent 55%)'
          }
        />
      </g>

      {/* Optic nerve */}
      <g {...regionProps('optic-nerve', 'Optic nerve, carrying signals to the brain')}>
        <path
          d="M478,233 L548,220 L548,280 L478,267 Z"
          fill={activeId === 'optic-nerve' ? 'var(--secondary)' : 'var(--primary)'}
        />
      </g>

      {/* Ciliary body (top + bottom wedges) */}
      <g {...regionProps('ciliary-body', 'Ciliary body, producing fluid and focusing the lens')}>
        <path
          d="M189.7,140.7 L225,180 L206,190 L184.9,172 Z"
          fill={activeId === 'ciliary-body' ? 'var(--secondary)' : 'var(--chart-3)'}
        />
        <path
          d="M189.7,359.3 L225,320 L206,310 L184.9,328 Z"
          fill={activeId === 'ciliary-body' ? 'var(--secondary)' : 'var(--chart-3)'}
        />
      </g>

      {/* Iris (top + bottom leaves) */}
      <g {...regionProps('iris', 'Iris, the coloured ring that controls the pupil')}>
        <path
          d="M203,182 L233,222 L233,234 L203,196 Z"
          fill={activeId === 'iris' ? 'var(--secondary)' : 'var(--primary)'}
        />
        <path
          d="M203,318 L233,278 L233,266 L203,304 Z"
          fill={activeId === 'iris' ? 'var(--secondary)' : 'var(--primary)'}
        />
      </g>

      {/* Lens */}
      <g {...regionProps('lens', 'Lens, focusing light onto the retina')}>
        <path
          d="M233,222 Q213,250 233,278 Q253,250 233,222 Z"
          fill={
            activeId === 'lens'
              ? 'color-mix(in oklch, var(--secondary), transparent 20%)'
              : 'color-mix(in oklch, var(--foreground), transparent 75%)'
          }
          stroke="var(--primary)"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  )
}
