export type CareRole = {
  id: string
  name: string
  who: string
  does: string
  when: string
}

export const careRoles: CareRole[] = [
  {
    id: 'optometrist',
    name: 'Optometrist',
    who: 'A primary eye-care professional.',
    does: 'Examines eyes and vision; refers on if inflammation is suspected.',
    when: 'Often the first contact, or for ongoing vision checks.',
  },
  {
    id: 'ophthalmologist',
    name: 'Ophthalmologist',
    who: 'A medical eye specialist.',
    does: 'Diagnoses and manages uveitis, including treatment and monitoring.',
    when: 'Once uveitis is suspected or confirmed, and for ongoing care.',
  },
  {
    id: 'gp',
    name: 'GP',
    who: 'Your family\u2019s general practitioner.',
    does: 'Coordinates overall care and helps arrange referrals.',
    when: 'A useful first contact and ongoing coordinator.',
  },
  {
    id: 'paediatrician',
    name: 'Paediatrician',
    who: 'A doctor specialising in children\u2019s health.',
    does: 'Supports overall wellbeing and coordinates care for associated conditions.',
    when: 'If a broader health assessment is useful.',
  },
  {
    id: 'rheumatologist',
    name: 'Rheumatologist (paediatric)',
    who: 'A specialist in joint and immune conditions.',
    does: 'Manages conditions such as JIA that can be linked with uveitis.',
    when: 'When an associated systemic condition is suspected or confirmed.',
  },
  {
    id: 'pharmacist',
    name: 'Pharmacist',
    who: 'A medication expert.',
    does: 'Explains how and when to use medications and watches for interactions.',
    when: 'Whenever medications are started or changed.',
  },
  {
    id: 'orthoptist',
    name: 'Orthoptist',
    who: 'A specialist in vision assessment.',
    does: 'Supports vision testing, especially for younger children.',
    when: 'Often alongside the ophthalmology team.',
  },
  {
    id: 'aboriginal-health',
    name: 'Aboriginal Health Worker / Aboriginal Health Services',
    who: 'Culturally safe health support connected to community.',
    does: 'Helps families navigate care and access services.',
    when: 'At any point; especially valuable for coordinating care.',
  },
  {
    id: 'other-support',
    name: 'Other relevant support services',
    who: 'Services such as social work or school liaison.',
    does: 'Support practical, emotional or educational needs.',
    when: 'If your family would benefit from extra support.',
  },
]
