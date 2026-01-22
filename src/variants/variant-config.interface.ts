/**
 * Variant configuration interface
 */

export interface IVariantConfig {
  readonly background: string
  readonly color: string
  readonly border: string
  readonly hover: {
    readonly background: string
    readonly color: string
    readonly border: string
  }
  readonly active: {
    readonly background: string
    readonly color: string
    readonly border: string
  }
  readonly disabled: {
    readonly background: string
    readonly color: string
    readonly border: string
  }
}
