<img src="https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/pulsar-logo.svg" alt="Pulsar" width="400"/>

# @pulsar/design-tokens

Framework-agnostic design tokens and brand assets for the Pulsar ecosystem.

<p align="center">
  <strong><a href="https://www.linkedin.com/in/tadeopiana/">follow me</a></strong>
</p>

## Features

- ✅ Complete color palette (primary, secondary, neutral, success, warning, error)
- ✅ Spacing scale (xs → 4xl)
- ✅ Typography system (fonts, sizes, weights, line heights)
- ✅ Shadow tokens
- ✅ Border radius tokens
- ✅ Transition tokens
- ✅ **Art-Kit**: 66 brand assets (3 logos + 63 icons) auto-generated from SVG files
- ✅ Full TypeScript support with auto-completion
- ✅ Framework agnostic (works with any framework)

## Installation

```bash
pnpm add @pulsar/design-tokens
```

## Usage

### Design Tokens

```typescript
import {
  colorTokens,
  spacingTokens,
  typographyTokens,
  shadowTokens,
  borderRadiusTokens,
  transitionTokens
} from '@pulsar/design-tokens'

// Use in components
const buttonColor = colorTokens.primary[500]
const padding = spacingTokens.md
const fontSize = typographyTokens.fontSize.base
```

### Art-Kit (Logos & Icons)

```typescript
import { PULSAR_LOGO_SVG, ICONS } from '@pulsar/design-tokens/art-kit'

// Use logos
const logo = PULSAR_LOGO_SVG

// Use icons (63 available)
const typescriptIcon = ICONS.typescript
const reactivityIcon = ICONS.reactivity
const saveIcon = ICONS.save

// Generate markdown
import { markdownLogo, markdownIcon } from '@pulsar/design-tokens/art-kit'

const logoMd = markdownLogo('logo', 'Pulsar Logo', 200)
// '<img src="..." alt="Pulsar Logo" width="200" />'

const iconMd = markdownIcon('typescript', 'TypeScript', 24)
// '<img src="..." alt="TypeScript" width="24" />'
```

## Tokens

### Colors

Full color scales (50-950) for:
- `primary` - Blue
- `secondary` - Purple
- `neutral` - Gray
- `success` - Green
- `warning` - Amber
- `error` - Red

### Spacing

- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px
- `4xl`: 96px

### Typography

- Font families: `sans`, `serif`, `mono`
- Font sizes: `xs` → `5xl`
- Font weights: `light`, `normal`, `medium`, `semibold`, `bold`
- Line heights: `tight`, `normal`, `relaxed`

### Shadows

- `none`, `sm`, `md`, `lg`, `xl`, `2xl`, `inner`

### Border Radius

- `none`, `sm`, `md`, `lg`, `xl`, `2xl`, `full`

### Transitions

- Duration: `fast` (150ms), `normal` (300ms), `slow` (500ms)
- Timing: `linear`, `easeIn`, `easeOut`, `easeInOut`

## Art-Kit

The art-kit includes 66 brand assets auto-generated from SVG files:

- **3 Logo Variants**: icon, full logo, logo with name
- **63 Icons**: typescript, react, vue, angular, git, docker, kubernetes, and more

### Adding Custom Icons

1. Add SVG file to `art-kit/SVG/` with naming convention:
   - Icons: `icon-{name}.svg`
   - Logos: `pulsar-{variant}.svg`

2. Regenerate the index:
   ```bash
   pnpm build:art-kit
   ```

The `index.ts` file is automatically generated with full type safety. See [art-kit/GENERATOR.md](./art-kit/GENERATOR.md) for details.

## TypeScript

All tokens and art-kit assets are fully typed with readonly interfaces.

```typescript
import type { IColorTokens, ISpacingTokens, IconName } from '@pulsar/design-tokens'
```

## Roadmap

### Completed ✅
- Core design token system
- Art-kit with auto-generation
- 66 brand assets (logos + icons)
- TypeScript support with full type safety
- Framework-agnostic implementation

### In Progress 🚧
- CSS variable export for runtime theming
- Additional icon categories
- Documentation site integration

### Planned 📋
- Dark mode token variants
- Animation token system
- Component-specific token presets
- Figma design tokens integration
- Additional resolution formats for art-kit

## Pulsar Ecosystem

| Package | Description | Status |
|---------|-------------|--------|
| [pulsar.dev](https://github.com/binaryjack/pulsar.dev) | Core framework with signal-based reactivity | ✅ Active |
| [@pulsar/ui](https://github.com/binaryjack/pulsar-ui.dev) | UI component library | ✅ Active |
| [@pulsar/design-tokens](https://github.com/binaryjack/pulsar-design-system) | Design tokens & art-kit | ✅ Active |
| [@pulsar/transformer](https://github.com/binaryjack/pulsar-transformer) | JSX to DOM compiler | ✅ Active |
| [@pulsar/vite-plugin](https://github.com/binaryjack/pulsar-vite-plugin) | Vite integration | ✅ Active |
| [@pulsar/demo](https://github.com/binaryjack/pulsar-demo) | Example applications | ✅ Active |

## Contributing

We welcome contributions! To get started:

1. **Clone the repository**
   ```bash
   git clone https://github.com/binaryjack/pulsar-design-system.git
   cd pulsar-design-system
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Build design tokens**
   ```bash
   pnpm build
   ```

4. **Add new icons** (optional)
   ```bash
   # Add SVG files to art-kit/SVG/
   pnpm build:art-kit
   ```

5. **Run tests**
   ```bash
   pnpm test
   ```

### Development Workflow

- Design tokens are in `src/tokens/`
- Art-kit SVG files are in `art-kit/SVG/`
- Generator script is in `build/art-kit-generator.ts`
- The `art-kit/index.ts` is auto-generated - don't edit manually

## License

MIT License - Copyright (c) 2026 Pulsar Framework

See [LICENSE](./LICENSE) file for details.

---

**Connect:** [LinkedIn](https://www.linkedin.com/in/tadeopiana/) • **Explore:** [Pulsar Ecosystem](#pulsar-ecosystem)
