/**
 * Transition duration classes utility
 * Maps duration values to Tailwind CSS classes
 */

import { type TransitionDuration } from '../tokens/legacy/transition-duration.type'

export const transitionDurationClasses: Record<TransitionDuration, string> = {
  fast: 'duration-150',
  normal: 'duration-300',
  slow: 'duration-500'
}
