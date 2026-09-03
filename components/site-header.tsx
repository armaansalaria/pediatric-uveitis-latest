'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AlertTriangleIcon, EyeIcon, MenuIcon } from 'lucide-react'
import { primaryNav, urgentHelpHref } from '@/lib/site-nav'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import { TextSizeControl } from '@/components/text-size-control'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="no-print sticky top-0 z-40 border-b border-border bg-background/95 supports-backdrop-filter:backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <EyeIcon className="size-5" />
          <span className="text-sm font-bold tracking-tight sm:text-base">
            Pediatric Uveitis
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {primaryNav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-2.5 py-1.5 text-[0.8rem] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground',
                  active && 'bg-accent text-accent-foreground'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <TextSizeControl />
          </div>
          <Button
            render={<Link href={urgentHelpHref} />}
            nativeButton={false}
            variant="destructive"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <AlertTriangleIcon data-icon="inline-start" />
            Urgent help
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </Button>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav
                aria-label="Primary"
                className="flex flex-col gap-1 px-4 pb-4"
              >
                {primaryNav.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={<Link href={item.href} />}
                    nativeButton={false}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    {item.label}
                  </SheetClose>
                ))}
                <SheetClose
                  render={<Link href={urgentHelpHref} />}
                  nativeButton={false}
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2.5 text-sm font-semibold text-destructive"
                >
                  <AlertTriangleIcon className="size-4" />
                  Urgent help
                </SheetClose>
              </nav>
              <div className="mt-auto flex items-center justify-between border-t border-border px-4 py-3">
                <span className="text-xs text-muted-foreground">
                  Text size
                </span>
                <TextSizeControl />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
