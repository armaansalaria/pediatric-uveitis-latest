export type EyeStructure = {
  id: string
  name: string
  isUvea: boolean
  where: string
  does: string
  uveitis: string
  citationIds: number[]
}

// Simplified patient-education cross-section. Structures are positioned to
// preserve correct anatomical relationships (cornea anterior, lens behind
// the iris, ciliary body and choroid within the wall of the eye, retina
// innermost at the back, optic nerve exiting posteriorly) rather than exact
// clinical measurements.
export const eyeStructures: EyeStructure[] = [
  {
    id: 'cornea',
    name: 'Cornea',
    isUvea: false,
    where: 'The clear front window of the eye.',
    does: 'Lets light in and helps focus it.',
    uveitis: 'Not part of the uvea. Uveitis is classified by the area of the eye involved.',
    citationIds: [1, 2],
  },
  {
    id: 'iris',
    name: 'Iris',
    isUvea: true,
    where: 'The coloured ring around the pupil.',
    does: 'Controls how much light enters the eye.',
    uveitis: 'Inflammation here is described as anterior uveitis and is associated with juvenile idiopathic arthritis in some children.',
    citationIds: [1, 6, 8, 20],
  },
  {
    id: 'ciliary-body',
    name: 'Ciliary body',
    isUvea: true,
    where: 'A ring of tissue just behind the iris.',
    does: 'Makes fluid for the front of the eye and helps focusing.',
    uveitis: 'The ciliary body is part of the uvea and may be involved in anterior uveitis.',
    citationIds: [1, 2],
  },
  {
    id: 'lens',
    name: 'Lens',
    isUvea: false,
    where: 'Sits directly behind the iris and pupil.',
    does: 'Focuses light onto the retina.',
    uveitis: 'Not part of the uvea. Cataract is one of the complications monitored in JIA-associated uveitis.',
    citationIds: [7, 13],
  },
  {
    id: 'vitreous',
    name: 'Vitreous',
    isUvea: false,
    where: 'The clear gel filling the cavity behind the lens.',
    does: 'Helps the eye hold its shape.',
    uveitis: 'Inflammatory activity in the vitreous is considered in intermediate and posterior uveitis.',
    citationIds: [1, 2, 16],
  },
  {
    id: 'choroid',
    name: 'Choroid',
    isUvea: true,
    where: 'A blood vessel-rich layer between the retina and sclera.',
    does: 'Supplies blood to the outer retina.',
    uveitis: 'The choroid is part of the uvea; posterior uveitis describes inflammation toward the back of the eye.',
    citationIds: [1, 2],
  },
  {
    id: 'retina',
    name: 'Retina',
    isUvea: false,
    where: 'Lines the inside of the back of the eye.',
    does: 'Converts light into signals sent to the brain.',
    uveitis: 'The retina is assessed when inflammation affects the back of the eye and when complications are monitored.',
    citationIds: [2, 7, 13],
  },
  {
    id: 'optic-nerve',
    name: 'Optic nerve',
    isUvea: false,
    where: 'Exits the back of the eye to the brain.',
    does: 'Carries visual signals to the brain.',
    uveitis: 'The optic nerve is assessed as part of an eye examination when clinically indicated.',
    citationIds: [2, 7],
  },
  {
    id: 'sclera',
    name: 'Sclera',
    isUvea: false,
    where: 'The tough, white outer wall of the eye.',
    does: 'Protects the eye and gives it shape.',
    uveitis: 'The sclera is not part of the uvea; the eye examination identifies which structures are involved.',
    citationIds: [1, 2],
  },
]
