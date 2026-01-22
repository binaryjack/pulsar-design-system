/**
 * Component variants composite type
 */

import { type ComponentColor } from './component-color.type'
import { type ComponentVariant } from './component-variant.type'
import { type IVariantConfig } from './variant-config.interface'

export type IComponentVariants = {
  readonly [K in ComponentVariant]: {
    readonly [C in ComponentColor]: IVariantConfig
  }
}
