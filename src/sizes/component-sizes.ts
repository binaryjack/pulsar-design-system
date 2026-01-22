/**
 * Component sizes
 */


export interface ISizeConfig {
  readonly height: string
  readonly padding: string
  readonly fontSize: string
}

export interface IComponentSizes {
  readonly xs: ISizeConfig
  readonly sm: ISizeConfig
  readonly md: ISizeConfig
  readonly lg: ISizeConfig
  readonly xl: ISizeConfig
}

export const componentSizes: IComponentSizes = {
  xs: {
    height: '1.5rem',     // 24px
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem'   // 12px
  },
  sm: {
    height: '2rem',       // 32px
    padding: '0.375rem 0.75rem',
    fontSize: '0.875rem'  // 14px
  },
  md: {
    height: '2.5rem',     // 40px
    padding: '0.5rem 1rem',
    fontSize: '1rem'      // 16px
  },
  lg: {
    height: '3rem',       // 48px
    padding: '0.75rem 1.25rem',
    fontSize: '1.125rem'  // 18px
  },
  xl: {
    height: '3.5rem',     // 56px
    padding: '1rem 1.5rem',
    fontSize: '1.25rem'   // 20px
  }
}
