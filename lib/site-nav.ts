export type NavItem = {
  label: string
  href: string
}

// The six items below (excluding Home and Urgent Help) are the required
// assignment headings and must use this exact wording.
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Disease/Condition Overview', href: '/overview' },
  { label: 'Management', href: '/management' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Who Can Help?', href: '/who-can-help' },
  { label: 'Acknowledgement of Country', href: '/acknowledgement' },
]

export const urgentHelpHref = '/management#urgent-help'
