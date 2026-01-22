/**
 * Shadow classes utility
 * Maps shadow size values to Tailwind CSS classes
 */

import { type ComponentShadowSize } from '../sizes/component-shadow-size.type'

export const shadowClasses: Record<ComponentShadowSize, string> = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl'
}
