/**
 * Component variants - Solid
 */

import { type ComponentColor } from './component-color.type'
import { type IVariantConfig } from './variant-config.interface'

export const solidVariants: { readonly [K in ComponentColor]: IVariantConfig } = {
  primary: {
    background: 'bg-primary-600',
    color: 'text-white',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-primary-700',
      color: 'hover:text-white',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-primary-800',
      color: 'active:text-white',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-300',
      color: 'disabled:text-neutral-500',
      border: 'disabled:border-transparent'
    }
  },
  secondary: {
    background: 'bg-secondary-600',
    color: 'text-white',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-secondary-700',
      color: 'hover:text-white',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-secondary-800',
      color: 'active:text-white',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-300',
      color: 'disabled:text-neutral-500',
      border: 'disabled:border-transparent'
    }
  },
  success: {
    background: 'bg-success-600',
    color: 'text-white',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-success-700',
      color: 'hover:text-white',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-success-800',
      color: 'active:text-white',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-300',
      color: 'disabled:text-neutral-500',
      border: 'disabled:border-transparent'
    }
  },
  warning: {
    background: 'bg-warning-600',
    color: 'text-white',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-warning-700',
      color: 'hover:text-white',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-warning-800',
      color: 'active:text-white',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-300',
      color: 'disabled:text-neutral-500',
      border: 'disabled:border-transparent'
    }
  },
  error: {
    background: 'bg-error-600',
    color: 'text-white',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-error-700',
      color: 'hover:text-white',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-error-800',
      color: 'active:text-white',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-300',
      color: 'disabled:text-neutral-500',
      border: 'disabled:border-transparent'
    }
  },
  neutral: {
    background: 'bg-neutral-600',
    color: 'text-white',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-neutral-700',
      color: 'hover:text-white',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-neutral-800',
      color: 'active:text-white',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-300',
      color: 'disabled:text-neutral-500',
      border: 'disabled:border-transparent'
    }
  }
}
