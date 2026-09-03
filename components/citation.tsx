import Link from 'next/link'

export function Cite({ ids }: { ids: number[] }) {
  return (
    <sup className="ml-0.5 text-[0.7em] font-medium text-secondary">
      [
      {ids.map((id, i) => (
        <span key={id}>
          <Link
            href={`/resources#ref-${id}`}
            className="hover:underline"
            aria-label={`Reference ${id}`}
          >
            {id}
          </Link>
          {i < ids.length - 1 ? ',' : ''}
        </span>
      ))}
      ]
    </sup>
  )
}
