/**
 * Typography variant classes mapping
 * External constant compiled ONCE!
 */

import type { TypographyVariant } from '../../components/enums/typography-variant.type'

export const typographyVariantClasses: Record<TypographyVariant, string> = {
  h1: 'text-5xl font-bold leading-tight',
  h2: 'text-4xl font-bold leading-tight',
  h3: 'text-3xl font-semibold leading-snug',
  h4: 'text-2xl font-semibold leading-snug',
  h5: 'text-xl font-medium leading-normal',
  h6: 'text-lg font-medium leading-normal',
  body1: 'text-base font-normal leading-relaxed',
  body2: 'text-sm font-normal leading-relaxed',
  caption: 'text-xs font-normal leading-normal',
  overline: 'text-xs font-medium uppercase tracking-wide leading-normal'
}
