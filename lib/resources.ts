export type ResourceCategory = {
  id: string
  title: string
  items: {
    org: string
    why: string
    url: string
  }[]
}

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'australian-eye-health',
    title: 'Australian eye-health resources',
    items: [
      {
        org: 'Australian Government Department of Health and Aged Care',
        why: 'National information on eye health and vision care.',
        url: 'https://www.health.gov.au/',
      },
      {
        org: 'Optometry Australia',
        why: 'Guidance on optometric care and referral pathways in Australia.',
        url: 'https://www.optometry.org.au/',
      },
    ],
  },
  {
    id: 'patient-family',
    title: 'Patient & family information',
    items: [
      {
        org: 'Moorfields Eye Hospital \u2014 uveitis information',
        why: 'Plain-language explanations of uveitis for patients and families.',
        url: 'https://www.moorfields.nhs.uk/',
      },
      {
        org: "Children's hospital eye clinic information",
        why: 'Practical guidance for families managing a child\u2019s eye condition.',
        url: '#',
      },
    ],
  },
  {
    id: 'aboriginal-torres-strait-islander',
    title: 'Aboriginal and Torres Strait Islander resources',
    items: [
      {
        org: 'Australian Institute of Health and Welfare (AIHW)',
        why: 'Reporting on Aboriginal and Torres Strait Islander eye health.',
        url: 'https://www.aihw.gov.au/',
      },
    ],
  },
  {
    id: 'professional-clinical',
    title: 'Professional / clinical information',
    items: [
      {
        org: '2019 ACR/Arthritis Foundation guideline',
        why: 'Screening, monitoring and treatment guideline for JIA-associated uveitis.',
        url: '#',
      },
      {
        org: 'AHPRA \u2014 Code of Conduct for optometrists',
        why: 'Sets out the professional scope of practice for Australian optometrists.',
        url: 'https://www.ahpra.gov.au/',
      },
    ],
  },
  {
    id: 'further-reading',
    title: 'Further reading',
    items: [
      {
        org: 'SHARE initiative recommendations',
        why: 'Consensus recommendations for managing JIA-associated uveitis.',
        url: '#',
      },
      {
        org: 'SYCAMORE trial (adalimumab in JIA-associated uveitis)',
        why: 'Trial evidence behind biologic treatment for uveitis that has not responded to standard therapy.',
        url: '#',
      },
    ],
  },
]
