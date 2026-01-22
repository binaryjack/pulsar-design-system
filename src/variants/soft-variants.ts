/**
 * Component variants - Soft
 */

import { type ComponentColor } from './component-color.type'
import { type IVariantConfig } from './variant-config.interface'

export const softVariants: { readonly [K in ComponentColor]: IVariantConfig } = {
  primary: {
    background: 'bg-primary-100',
    color: 'text-primary-700',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-primary-200',
      color: 'hover:text-primary-800',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-primary-300',
      color: 'active:text-primary-900',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-100',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-transparent'
    }
  },
  secondary: {
    background: 'bg-secondary-100',
    color: 'text-secondary-700',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-secondary-200',
      color: 'hover:text-secondary-800',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-secondary-300',
      color: 'active:text-secondary-900',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-100',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-transparent'
    }
  },
  success: {
    background: 'bg-success-100',
    color: 'text-success-700',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-success-200',
      color: 'hover:text-success-800',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-success-300',
      color: 'active:text-success-900',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-100',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-transparent'
    }
  },
  warning: {
    background: 'bg-warning-100',
    color: 'text-warning-700',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-warning-200',
      color: 'hover:text-warning-800',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-warning-300',
      color: 'active:text-warning-900',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-100',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-transparent'
    }
  },
  error: {
    background: 'bg-error-100',
    color: 'text-error-700',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-error-200',
      color: 'hover:text-error-800',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-error-300',
      color: 'active:text-error-900',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-100',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-transparent'
    }
  },
  neutral: {
    background: 'bg-neutral-100',
    color: 'text-neutral-700',
    border: 'border-transparent',
    hover: {
      background: 'hover:bg-neutral-200',
      color: 'hover:text-neutral-800',
      border: 'hover:border-transparent'
    },
    active: {
      background: 'active:bg-neutral-300',
      color: 'active:text-neutral-900',
      border: 'active:border-transparent'
    },
    disabled: {
      background: 'disabled:bg-neutral-100',
      color: 'disabled:text-neutral-400',
      border: 'disabled:border-transparent'
    }
  }
}
