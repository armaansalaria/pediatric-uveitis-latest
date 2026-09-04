export type Treatment = {
  id: string
  name: string
  why: string
  what: string
  family: string
  monitoring: string
  citationIds: number[]
}

export const treatments: Treatment[] = [
  {
    id: 'anti-inflammatory-drops',
    name: 'Anti-inflammatory eye drops',
    why: 'First-line treatment for anterior uveitis.',
    what: 'Reduce inflammation and ease light sensitivity and discomfort.',
    family: 'Usually used regularly at first, then reduced gradually under guidance.',
    monitoring: 'Eye pressure and response checked at follow-up.',
    citationIds: [7, 10],
  },
  {
    id: 'corticosteroid',
    name: 'Corticosteroid treatment',
    why: 'Used for more significant or persistent inflammation.',
    what: 'A stronger anti-inflammatory effect: drops, injections near the eye, or occasionally tablets.',
    family: 'Longer courses are monitored closely for side effects.',
    monitoring: 'Eye pressure, cataract risk and general wellbeing.',
    citationIds: [5, 7, 10],
  },
  {
    id: 'systemic-immunomodulatory',
    name: 'Systemic immunomodulatory treatment',
    why: 'Considered when eye-drop treatment does not adequately control inflammation, or to reduce steroid exposure.',
    what: 'Medication by mouth or injection that calms the immune system more broadly.',
    family: 'May be used for longer periods and may require blood-test monitoring.',
    monitoring: 'Monitoring is guided by the medicine and the treating team.',
    citationIds: [5, 7, 14, 15],
  },
  {
    id: 'biologic',
    name: 'Biologic therapy',
    why: 'May help when other treatments haven\u2019t fully controlled inflammation.',
    what: 'A targeted, injected medication blocking part of the immune response.',
    family: 'Supported by trial evidence for children not responding to standard treatment.',
    monitoring: 'Regular review and screening for infection risk.',
    citationIds: [3, 7, 23],
  },
  {
    id: 'associated-condition',
    name: 'Treatment of an associated condition',
    why: 'Relevant if uveitis occurs alongside a condition such as JIA.',
    what: 'Treating an associated inflammatory condition may also help control eye inflammation.',
    family: 'Coordinated between the eye team and treating specialist.',
    monitoring: 'Joint and general health reviews alongside eye checks.',
    citationIds: [5, 7, 20, 22],
  },
  {
    id: 'complications',
    name: 'Management of complications',
    why: 'Used if complications like raised pressure or cataract develop.',
    what: 'May include extra drops, or occasionally surgery.',
    family: 'Not every child develops complications; planned individually if needed.',
    monitoring: 'Closer review while a complication is treated.',
    citationIds: [7, 13, 35],
  },
]
