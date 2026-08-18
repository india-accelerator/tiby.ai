import type { SVGProps } from 'react'

type TibyMarkProps = Omit<SVGProps<SVGSVGElement>, 'viewBox' | 'fill' | 'xmlns'> & {
  variant?: 'azure' | 'reversed'
}

const STROKE_WIDTH = 13

const BLADES = [
  { inner: [50, 37.1], outer: [50, 10] },
  { inner: [61.17, 43.55], outer: [84.64, 30] },
  { inner: [61.17, 56.45], outer: [84.64, 70] },
  { inner: [50, 62.9], outer: [50, 90] },
  { inner: [38.83, 56.45], outer: [15.36, 70] },
  { inner: [38.83, 43.55], outer: [15.36, 30] },
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
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}
