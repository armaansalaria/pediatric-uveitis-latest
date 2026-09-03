export type TimelineStep = {
  step: number
  title: string
  detail: string
}

export const careTimeline: TimelineStep[] = [
  {
    step: 1,
    title: 'Eye assessment',
    detail:
      'A clinician examines the eye, often with a slit lamp, to look for signs of inflammation.',
  },
  {
    step: 2,
    title: 'Vision assessment',
    detail: 'Your child\u2019s vision is checked to see how well they can see.',
  },
  {
    step: 3,
    title: 'Examination for inflammation',
    detail:
      'The clinician looks closely for inflammatory cells and other changes inside the eye.',
  },
  {
    step: 4,
    title: 'Identify the pattern and possible cause',
    detail:
      'The type and pattern of uveitis is identified, and possible causes or associated conditions are considered.',
  },
  {
    step: 5,
    title: 'Further tests, if clinically indicated',
    detail:
      'Blood tests, imaging or referral to other specialists may be arranged where needed.',
  },
  {
    step: 6,
    title: 'Treatment discussion',
    detail: 'Your child\u2019s care team discusses treatment options with you.',
  },
  {
    step: 7,
    title: 'Follow-up and monitoring',
    detail:
      'Regular reviews check how the eye is responding and watch for complications.',
  },
]
