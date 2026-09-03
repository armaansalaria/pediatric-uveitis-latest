export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'what-is-uveitis',
    question: 'What is uveitis?',
    answer: 'Inflammation inside the eye, usually affecting the uvea.',
  },
  {
    id: 'children-get-it',
    question: 'Can children get uveitis?',
    answer: 'Yes. It is uncommon but needs proper follow-up when it occurs.',
  },
  {
    id: 'contagious',
    question: 'Is uveitis contagious?',
    answer: 'No. It cannot be passed to other people.',
  },
  {
    id: 'few-symptoms',
    question: 'Why might my child have few symptoms?',
    answer: 'Some forms, especially those linked with JIA, often cause little discomfort, which is why scheduled eye checks matter.',
  },
  {
    id: 'lose-vision',
    question: 'Will my child lose vision?',
    answer: 'Many children keep good vision with treatment and monitoring; risk depends on the type of uveitis.',
  },
  {
    id: 'come-back',
    question: 'Can uveitis come back?',
    answer: 'Yes, for some children. This is why follow-up continues even when the eye looks well.',
  },
  {
    id: 'long-term-treatment',
    question: 'Will treatment be needed for a long time?',
    answer: 'It varies \u2014 some children need treatment briefly; others need it longer-term.',
  },
  {
    id: 'why-follow-up',
    question: 'Why are follow-up appointments important?',
    answer: 'They catch inflammation and side effects early, often before symptoms appear.',
  },
  {
    id: 'linked-condition',
    question: 'Could uveitis be linked to another condition?',
    answer: 'Sometimes \u2014 JIA is the condition most often associated with it, though many children have no other condition.',
  },
  {
    id: 'school',
    question: 'Can my child go to school?',
    answer: 'Yes. Let teachers know about light sensitivity, appointments or support that helps.',
  },
  {
    id: 'sport',
    question: 'Can my child play sport?',
    answer: 'Usually \u2014 ask the eye care team about precautions for their situation.',
  },
  {
    id: 'other-specialist',
    question: 'Why might my child need another specialist?',
    answer: 'If an associated condition is suspected, a paediatrician or rheumatologist may help manage it.',
  },
  {
    id: 'appointment-questions',
    question: 'What should I ask at the next appointment?',
    answer: 'See the printable checklist in the Management section.',
  },
  {
    id: 'urgent-help',
    question: 'When should I seek urgent help?',
    answer: 'See the urgent-help guidance in the Management section.',
  },
]
