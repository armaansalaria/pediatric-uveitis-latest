export type TimelineStep = {
  step: number
  title: string
  detail: string
  citationIds: number[]
}

export const careTimeline: TimelineStep[] = [
  {
    step: 1,
    title: 'Eye assessment',
    detail:
      'A clinician examines the eye, often with a slit lamp, to look for signs of inflammation.',
    citationIds: [2, 7],
  },
  {
    step: 2,
    title: 'Vision assessment',
    detail: 'Your child\u2019s vision is checked to see how well they can see.',
    citationIds: [4, 7],
  },
  {
    step: 3,
    title: 'Examination for inflammation',
    detail:
      'The clinician looks closely for inflammatory cells and other changes inside the eye.',
    citationIds: [1, 2, 16],
  },
  {
    step: 4,
    title: 'Identify the pattern and possible cause',
    detail:
      'The type and pattern of uveitis is identified, and possible causes or associated conditions are considered.',
    citationIds: [1, 2, 7, 20],
  },
  {
    step: 5,
    title: 'Further tests, if clinically indicated',
    detail:
      'Additional tests or referral to another specialist may be considered when clinically indicated.',
    citationIds: [2, 7, 12],
  },
  {
    step: 6,
    title: 'Treatment discussion',
    detail: 'Your child\u2019s care team discusses treatment options with you.',
    citationIds: [5, 7],
  },
  {
    step: 7,
    title: 'Follow-up and monitoring',
    detail:
      'Regular reviews check how the eye is responding and watch for complications.',
    citationIds: [5, 7],
  },
]
