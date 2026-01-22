/**
 * Badge size classes mapping
 * External constant compiled ONCE!
 */

import type { ComponentSize } from '../sizes/component-size.type'

export const badgeSizeClasses: Record<ComponentSize, string> = {
  xs: 'px-1.5 py-0.5 text-xs',
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1 text-base',
  xl: 'px-4 py-1.5 text-lg'
}
