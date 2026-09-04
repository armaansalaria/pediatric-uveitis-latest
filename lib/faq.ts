export type FaqItem = {
  id: string
  question: string
  answer: string
  citationIds?: number[]
}

export const faqItems: FaqItem[] = [
  {
    id: 'what-is-uveitis',
    question: 'What is uveitis?',
    answer: 'Uveitis is inflammation inside the eye, usually affecting the uvea.',
    citationIds: [1, 2],
  },
  {
    id: 'few-symptoms',
    question: 'Why might my child have few symptoms?',
    answer: 'JIA-associated anterior uveitis can have few or no symptoms, which is why scheduled eye checks matter.',
    citationIds: [4, 6, 18],
  },
  {
    id: 'lose-vision',
    question: 'Will my child lose vision?',
    answer: 'Treatment and monitoring can help protect vision, but outcomes vary with the type and course of uveitis.',
    citationIds: [7, 8, 13, 17],
  },
  {
    id: 'long-term-treatment',
    question: 'Will treatment be needed for a long time?',
    answer: 'Treatment duration varies; some children need treatment for longer periods.',
    citationIds: [5, 7, 20],
  },
  {
    id: 'linked-condition',
    question: 'Could uveitis be linked to another condition?',
    answer: 'Sometimes. JIA is commonly associated with uveitis, although uveitis can occur without JIA.',
    citationIds: [4, 6, 7],
  },
  {
    id: 'other-specialist',
    question: 'Why might my child need another specialist?',
    answer: 'A paediatrician or rheumatologist may help when an associated condition is suspected or confirmed.',
    citationIds: [5, 7, 20],
  },
  {
    id: 'urgent-help',
    question: 'When should I seek urgent help?',
    answer: 'See the urgent-help guidance in the Management section.',
  },
]
