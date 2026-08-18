import type { SVGProps } from 'react'

type TibyMarkProps = Omit<SVGProps<SVGSVGElement>, 'viewBox' | 'fill' | 'xmlns'> & {
  variant?: 'azure' | 'reversed'
}

const BLADES = [
  { inner: [50, 40], outer: [50, 8] },
  { inner: [58.66, 45], outer: [86.37, 29] },
  { inner: [58.66, 55], outer: [86.37, 71] },
  { inner: [50, 60], outer: [50, 92] },
  { inner: [41.34, 55], outer: [13.63, 71] },
  { inner: [41.34, 45], outer: [13.63, 29] },
] as const

export function TibyMark({ variant = 'azure', ...props }: TibyMarkProps) {
  const color = variant === 'reversed' ? '#FFFFFF' : '#1D74F5'

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {BLADES.map(({ inner, outer }) => (
        <line
          key={`${inner[0]}-${inner[1]}-${outer[0]}-${outer[1]}`}
          x1={inner[0]}
          y1={inner[1]}
          x2={outer[0]}
          y2={outer[1]}
          stroke={color}
          strokeWidth={7}
          strokeLinecap="round"
        />
      ))}
      <circle cx={50} cy={50} r={11} stroke={color} strokeWidth={7} />
    </svg>
  )
}
