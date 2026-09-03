'use client'

import { useState } from 'react'
import { PrinterIcon, RotateCcwIcon } from 'lucide-react'
import { checklistQuestions } from '@/lib/checklist-questions'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export function AppointmentChecklist() {
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  return (
    <>
      <div className="no-print flex items-center justify-end gap-2 pb-3">
        <Button variant="outline" size="sm" onClick={() => setChecked({})}>
          <RotateCcwIcon data-icon="inline-start" />
          Reset
        </Button>
        <Button variant="secondary" size="sm" onClick={() => window.print()}>
          <PrinterIcon data-icon="inline-start" />
          Print
        </Button>
      </div>
      <ul className="flex flex-col divide-y divide-border">
        {checklistQuestions.map((q, i) => (
          <li key={q} className="flex items-start gap-3 py-2.5">
            <Checkbox
              id={`checklist-${i}`}
              checked={Boolean(checked[i])}
              onCheckedChange={(value) =>
                setChecked((prev) => ({ ...prev, [i]: value === true }))
              }
              className="mt-0.5 print:hidden"
            />
            <span aria-hidden="true" className="hidden size-4 shrink-0 rounded-[3px] border border-foreground print:inline-block" />
            <label
              htmlFor={`checklist-${i}`}
              className="text-sm leading-relaxed text-foreground/90"
            >
              {q}
            </label>
          </li>
        ))}
      </ul>
      <p className="no-print mt-3 text-xs text-muted-foreground">
        Nothing you tick here is saved or sent anywhere &mdash; it only helps
        you prepare for your child&apos;s next appointment.
      </p>
    </>
  )
}
