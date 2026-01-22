/**
 * Utility functions for class name composition
 */

/**
 * Combine multiple class names into a single string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Create a class name based on a condition
 */
export function conditional(condition: boolean, truthyClass: string, falsyClass?: string): string {
  return condition ? truthyClass : (falsyClass || '')
}

/**
 * Build class names from a configuration object
 */
export function buildClasses(config: Record<string, boolean>): string {
  return Object.entries(config)
    .filter(([_, value]) => value)
    .map(([key]) => key)
    .join(' ')
}
