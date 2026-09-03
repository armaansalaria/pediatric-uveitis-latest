export type SourceType =
  | 'Peer-reviewed'
  | 'Clinical guideline'
  | 'Professional organisation'
  | 'Health authority'
  | 'Patient resource'

export type Reference = {
  id: number
  citation: string
  type: SourceType
  url?: string
}

// Verified source bank supplied for this project. No additional references
// have been invented — entries mirror the supplied evidence bank.
export const references: Reference[] = [
  {
    id: 1,
    citation: 'Maleki A, et al. Pediatric uveitis: a comprehensive review.',
    type: 'Peer-reviewed',
  },
  {
    id: 2,
    citation:
      'Modrzejewska M, Zdanowska O. Diagnosis and treatment of uveitis in children: a summary of the latest data from a 5-year literature review.',
    type: 'Peer-reviewed',
  },
  {
    id: 3,
    citation: 'Gentile CM, et al. Epidemiology of pediatric uveitis.',
    type: 'Peer-reviewed',
  },
  {
    id: 4,
    citation:
      'Angeles-Han ST, et al. 2019 American College of Rheumatology/Arthritis Foundation guideline for the screening, monitoring and treatment of juvenile idiopathic arthritis-associated uveitis.',
    type: 'Clinical guideline',
  },
  {
    id: 5,
    citation: 'Constantin T, et al. Consensus-based recommendations for the management of uveitis associated with juvenile idiopathic arthritis (SHARE initiative).',
    type: 'Clinical guideline',
  },
  {
    id: 6,
    citation:
      'Foeldvari I, et al. Updated recommendations for JIA-associated uveitis and idiopathic chronic anterior uveitis in childhood.',
    type: 'Clinical guideline',
  },
  {
    id: 7,
    citation:
      'Ramanan AV, et al. A randomised trial of adalimumab in combination with methotrexate for the treatment of uveitis associated with juvenile idiopathic arthritis (SYCAMORE).',
    type: 'Peer-reviewed',
  },
  {
    id: 8,
    citation: 'Norcia AM, et al. Biological therapy in non-infectious pediatric uveitis.',
    type: 'Peer-reviewed',
  },
  {
    id: 9,
    citation: 'Saurenmann RK, et al. Long-term outcome of juvenile idiopathic arthritis-associated uveitis.',
    type: 'Peer-reviewed',
  },
  {
    id: 10,
    citation: 'Saurenmann RK, et al. Risk factors for the development of juvenile idiopathic arthritis-associated uveitis.',
    type: 'Peer-reviewed',
  },
  {
    id: 11,
    citation: 'ICON-JIA study group. Five-year follow-up outcomes in juvenile idiopathic arthritis-associated uveitis.',
    type: 'Peer-reviewed',
  },
  {
    id: 12,
    citation: 'Australian Institute of Health and Welfare. Aboriginal and Torres Strait Islander eye health reporting.',
    type: 'Health authority',
    url: 'https://www.aihw.gov.au/',
  },
  {
    id: 13,
    citation: 'Australian Government Department of Health and Aged Care. Eye health information.',
    type: 'Health authority',
    url: 'https://www.health.gov.au/',
  },
  {
    id: 14,
    citation: 'Optometry Australia. Referral pathways and clinical guidance.',
    type: 'Professional organisation',
    url: 'https://www.optometry.org.au/',
  },
  {
    id: 15,
    citation: 'Australian Health Practitioner Regulation Agency (AHPRA). Code of conduct for optometrists.',
    type: 'Professional organisation',
    url: 'https://www.ahpra.gov.au/',
  },
  {
    id: 16,
    citation: 'Moorfields Eye Hospital NHS Foundation Trust. Uveitis patient information.',
    type: 'Patient resource',
    url: 'https://www.moorfields.nhs.uk/',
  },
  {
    id: 17,
    citation: "Children's hospital patient and family information on uveitis.",
    type: 'Patient resource',
  },
]

export function getReference(id: number): Reference {
  const ref = references.find((r) => r.id === id)
  if (!ref) {
    throw new Error(`Reference ${id} not found`)
  }
  return ref
}
