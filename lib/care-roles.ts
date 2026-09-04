export type CareRole = {
  id: string
  name: string
  who: string
  does: string
  when: string
  citationIds?: number[]
}

export const careRoles: CareRole[] = [
  {
    id: 'optometrist',
    name: 'Optometrist',
    who: 'A primary eye-care professional.',
    does: 'Examines eyes and vision; refers on if inflammation is suspected.',
    when: 'May be an initial point of contact or involved in vision checks.',
    citationIds: [27, 28],
  },
  {
    id: 'ophthalmologist',
    name: 'Ophthalmologist',
    who: 'A medical eye specialist.',
    does: 'Diagnoses and manages uveitis, including treatment and monitoring.',
    when: 'Once uveitis is suspected or confirmed, and for ongoing care.',
    citationIds: [2, 7],
  },
  {
    id: 'gp',
    name: 'GP',
    who: 'Your family\u2019s general practitioner.',
    does: 'Coordinates overall care and helps arrange referrals.',
    when: 'A useful first contact and ongoing coordinator.',
    citationIds: [7, 20],
  },
  {
    id: 'paediatrician',
    name: 'Paediatrician',
    who: 'A doctor specialising in children\u2019s health.',
    does: 'Supports overall wellbeing and coordinates care for associated conditions.',
    when: 'If a broader health assessment is useful.',
    citationIds: [7, 20],
  },
  {
    id: 'rheumatologist',
    name: 'Rheumatologist (paediatric)',
    who: 'A specialist in joint and immune conditions.',
    does: 'Manages conditions such as JIA that can be linked with uveitis.',
    when: 'When an associated systemic condition is suspected or confirmed.',
    citationIds: [5, 7, 20],
  },
  {
    id: 'pharmacist',
    name: 'Pharmacist',
    who: 'A medication expert.',
    does: 'May be involved when medicines are started or changed.',
    when: 'As part of the broader care team when needed.',
  },
  {
    id: 'orthoptist',
    name: 'Orthoptist',
    who: 'A specialist in vision assessment.',
    does: 'May support vision assessment.',
    when: 'When included by the eye-care team.',
  },
  {
    id: 'aboriginal-health',
    name: 'Aboriginal Health Worker / Aboriginal Health Services',
    who: 'Culturally safe health support connected to community.',
    does: 'Helps families navigate care and access services.',
    when: 'At any point; especially valuable for coordinating care.',
    citationIds: [26, 29],
  },
  {
    id: 'other-support',
    name: 'Other relevant support services',
    who: 'Services such as social work or school liaison.',
    does: 'Support practical, emotional or educational needs.',
    when: 'If your family would benefit from extra support.',
  },
]
