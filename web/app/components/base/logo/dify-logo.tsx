import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@langgenius/dify-ui/cn'
import { cva } from 'class-variance-authority'
import { basePath } from '@/utils/var'

const difyLogoVariants = cva(
  'block w-auto rounded-full object-contain',
  {
    variants: {
      size: {
        small: 'h-6',
        medium: 'h-8',
        large: 'h-10',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
)

export type DifyLogoProps = Omit<
  ComponentProps<'img'>,
  'alt' | 'height' | 'size' | 'src' | 'width'
> &
  VariantProps<typeof difyLogoVariants> & {
    alt: string
  }

export function DifyLogo({ alt, className, size, ...props }: DifyLogoProps) {
  const classes = cn(difyLogoVariants({ size, className }))

  return (
    <img
      {...props}
      src={`${basePath}/logo/logo-site.png`}
      height={40}
      className={classes}
      alt={alt}
    />
  )
}
