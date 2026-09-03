export type EyeStructure = {
  id: string
  name: string
  isUvea: boolean
  where: string
  does: string
  uveitis: string
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
    uveitis: 'Not part of the uvea; can look normal even with inflammation further back.',
  },
  {
    id: 'iris',
    name: 'Iris',
    isUvea: true,
    where: 'The coloured ring around the pupil.',
    does: 'Controls how much light enters the eye.',
    uveitis: 'Inflammation here (anterior uveitis) is the most common type in children, often linked with JIA.',
  },
  {
    id: 'ciliary-body',
    name: 'Ciliary body',
    isUvea: true,
    where: 'A ring of tissue just behind the iris.',
    does: 'Makes fluid for the front of the eye and helps focusing.',
    uveitis: 'Often inflamed with the iris in anterior uveitis, or alone in intermediate uveitis.',
  },
  {
    id: 'lens',
    name: 'Lens',
    isUvea: false,
    where: 'Sits directly behind the iris and pupil.',
    does: 'Focuses light onto the retina.',
    uveitis: 'Not part of the uvea; ongoing inflammation or treatment can occasionally affect its clarity.',
  },
  {
    id: 'vitreous',
    name: 'Vitreous',
    isUvea: false,
    where: 'The clear gel filling the cavity behind the lens.',
    does: 'Helps the eye hold its shape.',
    uveitis: 'Cells can appear here in intermediate and posterior uveitis, sometimes noticed as floaters.',
  },
  {
    id: 'choroid',
    name: 'Choroid',
    isUvea: true,
    where: 'A blood vessel-rich layer between the retina and sclera.',
    does: 'Supplies blood to the outer retina.',
    uveitis: 'Inflammation here is less common in children but can affect vision if untreated.',
  },
  {
    id: 'retina',
    name: 'Retina',
    isUvea: false,
    where: 'Lines the inside of the back of the eye.',
    does: 'Converts light into signals sent to the brain.',
    uveitis: 'Not part of the uvea, but next to the choroid and can be affected by untreated inflammation.',
  },
  {
    id: 'optic-nerve',
    name: 'Optic nerve',
    isUvea: false,
    where: 'Exits the back of the eye to the brain.',
    does: 'Carries visual signals to the brain.',
    uveitis: 'Can occasionally swell with significant inflammation, checked at eye examinations.',
  },
  {
    id: 'sclera',
    name: 'Sclera',
    isUvea: false,
    where: 'The tough, white outer wall of the eye.',
    does: 'Protects the eye and gives it shape.',
    uveitis: 'Not part of the uvea and usually not directly affected, though still checked on examination.',
  },
]
