/**
 * Toggle size classes mapping
 * External constant compiled ONCE!
 */

import type { ComponentSize } from '../sizes/component-size.type'

export const toggleSizeClasses: Record<ComponentSize, string> = {
  xs: 'w-8 h-4',
  sm: 'w-10 h-5',
  md: 'w-11 h-6',
  lg: 'w-14 h-7',
  xl: 'w-16 h-8'
}

export const toggleThumbSizeClasses: Record<ComponentSize, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-7 h-7'
}
