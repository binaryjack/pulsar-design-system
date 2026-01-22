/**
 * Component variants - Outline
 */

import { type ComponentColor } from './component-color.type'
import { type IVariantConfig } from './variant-config.interface'

export const outlineVariants: { readonly [K in ComponentColor]: IVariantConfig } = {
  primary: {
    background: 'bg-transparent',
    color: 'text-primary-600',
    border: 'border-primary-600',
    hover: {
      background: 'hover:bg-primary-50',
      color: 'hover:text-primary-700',
      border: 'hover:border-primary-700'
    },
    active: {
      background: 'active:bg-primary-100',
      color: 'active:text-primary-800',
      border: 'active:border-primary-800'
    },
    disabled: {
      background: 'disabled:bg-transparent',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-neutral-300'
    }
  },
  secondary: {
    background: 'bg-transparent',
    color: 'text-secondary-600',
    border: 'border-secondary-600',
    hover: {
      background: 'hover:bg-secondary-50',
      color: 'hover:text-secondary-700',
      border: 'hover:border-secondary-700'
    },
    active: {
      background: 'active:bg-secondary-100',
      color: 'active:text-secondary-800',
      border: 'active:border-secondary-800'
    },
    disabled: {
      background: 'disabled:bg-transparent',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-neutral-300'
    }
  },
  success: {
    background: 'bg-transparent',
    color: 'text-success-600',
    border: 'border-success-600',
    hover: {
      background: 'hover:bg-success-50',
      color: 'hover:text-success-700',
      border: 'hover:border-success-700'
    },
    active: {
      background: 'active:bg-success-100',
      color: 'active:text-success-800',
      border: 'active:border-success-800'
    },
    disabled: {
      background: 'disabled:bg-transparent',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-neutral-300'
    }
  },
  warning: {
    background: 'bg-transparent',
    color: 'text-warning-600',
    border: 'border-warning-600',
    hover: {
      background: 'hover:bg-warning-50',
      color: 'hover:text-warning-700',
      border: 'hover:border-warning-700'
    },
    active: {
      background: 'active:bg-warning-100',
      color: 'active:text-warning-800',
      border: 'active:border-warning-800'
    },
    disabled: {
      background: 'disabled:bg-transparent',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-neutral-300'
    }
  },
  error: {
    background: 'bg-transparent',
    color: 'text-error-600',
    border: 'border-error-600',
    hover: {
      background: 'hover:bg-error-50',
      color: 'hover:text-error-700',
      border: 'hover:border-error-700'
    },
    active: {
      background: 'active:bg-error-100',
      color: 'active:text-error-800',
      border: 'active:border-error-800'
    },
    disabled: {
      background: 'disabled:bg-transparent',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-neutral-300'
    }
  },
  neutral: {
    background: 'bg-transparent',
    color: 'text-neutral-700',
    border: 'border-neutral-300',
    hover: {
      background: 'hover:bg-neutral-50',
      color: 'hover:text-neutral-800',
      border: 'hover:border-neutral-400'
    },
    active: {
      background: 'active:bg-neutral-100',
      color: 'active:text-neutral-900',
      border: 'active:border-neutral-500'
    },
    disabled: {
      background: 'disabled:bg-transparent',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-neutral-300'
    }
  }
}
