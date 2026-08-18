import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@langgenius/dify-ui/cn'
import { cva } from 'class-variance-authority'
import { TibyMark } from './tiby-mark'

const tibyLogoVariants = cva('inline-flex w-auto shrink-0 items-center', {
  variants: {
    size: {
      small: 'h-6 gap-[7px]',
      medium: 'h-8 gap-[9px]',
      large: 'h-10 gap-3',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

const wordmarkVariants = cva('font-semibold tracking-[-0.035em] text-text-primary', {
  variants: {
    size: {
      small: 'text-base',
      medium: 'text-lg',
      large: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export type TibyLogoProps = Omit<ComponentProps<'div'>, 'children'> &
  VariantProps<typeof tibyLogoVariants> & {
    alt: string
  }

export function TibyLogo({ alt, className, size, ...props }: TibyLogoProps) {
  const isDecorative = alt === ''

  return (
    <div
      {...props}
      role={isDecorative ? undefined : 'img'}
      aria-label={isDecorative ? undefined : alt}
      aria-hidden={isDecorative ? true : undefined}
      className={cn(tibyLogoVariants({ size, className }))}
    >
      <TibyMark className="h-full w-auto shrink-0" />
      <span className={cn(wordmarkVariants({ size }))}>Tiby</span>
    </div>
  )
}
