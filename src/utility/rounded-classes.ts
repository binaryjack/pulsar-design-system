/**
 * Rounded classes utility
 * Maps rounded size values to Tailwind CSS classes
 */

import { type ComponentRoundedSize } from '../sizes/component-rounded-size.type'

export const roundedClasses: Record<ComponentRoundedSize, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full'
}
