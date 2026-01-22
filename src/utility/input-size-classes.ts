/**
 * Input size classes mapping
 * External constant compiled ONCE!
 */

import type { ComponentSize } from '../sizes/component-size.type'

export const inputSizeClasses: Record<ComponentSize, string> = {
  xs: 'px-2 py-1 text-xs h-7',
  sm: 'px-2.5 py-1.5 text-sm h-8',
  md: 'px-3 py-2 text-base h-10',
  lg: 'px-4 py-2.5 text-lg h-12',
  xl: 'px-5 py-3 text-xl h-14'
}
