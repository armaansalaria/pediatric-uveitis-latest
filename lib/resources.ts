export type ResourceCategory = {
  id: string
  title: string
  description: string
  referenceIds: number[]
}

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'australian-eye-health',
    title: 'Australian eye health',
    description: 'National eye-health information, standards and services in Australia.',
    referenceIds: [25, 28, 37],
  },
  {
    id: 'aboriginal-torres-strait-islander',
    title: 'Aboriginal and Torres Strait Islander eye health',
    description: 'Resources supporting culturally safe, community-informed eye care.',
    referenceIds: [26],
  },
  {
    id: 'families-and-support',
    title: 'For children, young people and families',
    description: 'Plain-language information, practical support and vision services.',
    referenceIds: [32, 34, 39],
  },
  {
    id: 'clinical-and-research',
    title: 'Clinical guidance and further reading',
    description: 'Guidelines, reviews and research for deeper reading or professional use.',
    referenceIds: [3, 5, 7, 23, 35, 36, 40],
  },
]
