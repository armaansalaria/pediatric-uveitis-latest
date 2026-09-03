'use client'

import { useEffect, useState } from 'react'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

type TextSize = 'normal' | 'large' | 'larger'
const sizes: TextSize[] = ['normal', 'large', 'larger']
const STORAGE_KEY = 'uveitis-text-size'

export function TextSizeControl() {
  const [size, setSize] = useState<TextSize>('normal')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as TextSize | null
    if (stored && sizes.includes(stored)) {
      setSize(stored)
      document.documentElement.setAttribute('data-text-size', stored)
    }
  }, [])

  function apply(next: TextSize) {
    setSize(next)
    document.documentElement.setAttribute('data-text-size', next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  function step(direction: 1 | -1) {
    const currentIndex = sizes.indexOf(size)
    const nextIndex = Math.min(
      sizes.length - 1,
      Math.max(0, currentIndex + direction)
    )
    apply(sizes[nextIndex])
  }

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Adjust text size">
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => step(-1)}
        disabled={size === 'normal'}
        aria-label="Decrease text size"
      >
        <MinusIcon />
      </Button>
      <span className="text-xs font-medium text-muted-foreground" aria-hidden="true">
        Aa
      </span>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => step(1)}
        disabled={size === 'larger'}
        aria-label="Increase text size"
      >
        <PlusIcon />
      </Button>
    </div>
  )
}
