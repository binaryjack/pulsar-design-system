# Art-Kit Usage Examples

This document demonstrates how to use the Pulsar art-kit in various scenarios.

## 📦 In Documentation (Markdown)

### Logos in README Header

<p align="center">
  <img src="https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/pulsar-logo-name.svg" width="400" alt="Pulsar.dev" />
</p>

```markdown
![Pulsar Logo](https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/pulsar-logo.svg)
```

### Technology Stack Icons

Built with:
<img src="https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/icon-typescript.svg" width="24" alt="TypeScript" />
<img src="https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/icon-react.svg" width="24" alt="React" />
<img src="https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/icon-vite.svg" width="24" alt="Vite" />

```markdown
<img src="https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/icon-typescript.svg" width="24" alt="TypeScript" />
```

### Feature List with Icons

## Features

- <img src="https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/icon-reactivity.svg" width="16" /> **Fine-grained reactivity** - Surgical DOM updates
- <img src="https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/icon-component.svg" width="16" /> **Component-based** - Reusable UI building blocks
- <img src="https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/icon-hooks.svg" width="16" /> **Hooks system** - Composable logic
- <img src="https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/icon-typescript.svg" width="16" /> **TypeScript-first** - Full type safety

## 💻 In TypeScript/JavaScript Code

### Basic Usage

```typescript
import { ICONS, PULSAR_LOGO_SVG } from '@pulsar/design-tokens/art-kit'

// Use in your components
const logoUrl = PULSAR_LOGO_SVG
const saveIcon = ICONS.save
const typescriptIcon = ICONS.typescript

// Example: Dynamic icon component
function Icon({ name }: { name: keyof typeof ICONS }) {
  return <img src={ICONS[name]} alt={name} width={24} />
}
```

### Helper Functions

```typescript
import { markdownLogo, markdownIcon, getIconNames } from '@pulsar/design-tokens/art-kit'

// Generate markdown for documentation
const logoMd = markdownLogo('logo', 'Pulsar Logo', 200)
// '<img src="..." alt="Pulsar Logo" width="200" />'

const iconMd = markdownIcon('typescript', 'TypeScript', 24)
// '<img src="..." alt="TypeScript" width="24" />'

// List all available icons
const allIcons = getIconNames()
// ['angular', 'api', 'calendar', ...]
```

### React Component Example

```tsx
import { ICONS, type IconName } from '@pulsar/design-tokens/art-kit'

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <img 
      src={ICONS[name]} 
      alt={name} 
      width={size} 
      height={size}
      className={className}
    />
  )
}

// Usage
<Icon name="typescript" size={32} />
<Icon name="save" />
```

### Documentation Generator

```typescript
import { getIconNames, getIconUrl, markdownIcon } from '@pulsar/design-tokens/art-kit'

function generateIconCatalog(): string {
  const icons = getIconNames()
  
  return icons.map(iconName => {
    const markdown = markdownIcon(iconName, iconName, 32)
    return `### ${iconName}\n${markdown}\n`
  }).join('\n')
}

// Generate complete icon catalog for docs
const catalog = generateIconCatalog()
```

## 🎨 In Storybook

```tsx
import { ICONS, PULSAR_LOGOS } from '@pulsar/design-tokens/art-kit'

export default {
  title: 'Brand/Logos',
}

export const LogoVariations = () => (
  <div>
    <h3>SVG Logos</h3>
    <img src={PULSAR_LOGOS.svg.icon} alt="Icon" width={64} />
    <img src={PULSAR_LOGOS.svg.logo} alt="Logo" width={200} />
    <img src={PULSAR_LOGOS.svg.logoWithName} alt="Logo with Name" width={300} />
    
    <h3>PNG Logos (2x)</h3>
    <img src={PULSAR_LOGOS.png['2x'].icon} alt="Icon 2x" width={64} />
    <img src={PULSAR_LOGOS.png['2x'].logo} alt="Logo 2x" width={200} />
  </div>
)

export const AllIcons = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '1rem' }}>
    {Object.entries(ICONS).map(([name, url]) => (
      <div key={name} style={{ textAlign: 'center' }}>
        <img src={url} alt={name} width={32} />
        <div style={{ fontSize: '10px', marginTop: '4px' }}>{name}</div>
      </div>
    ))}
  </div>
)
```

## 🌐 URL Pattern Reference

All assets are available at:
```
https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/{format}/{filename}
```

**Examples:**
- Icon: `art-kit/SVG/icon-typescript.svg`
- Logo: `art-kit/SVG/pulsar-logo.svg`
- Logo 2x: `art-kit/2x/pulsar-logo@2x.png`
- Logo 4x: `art-kit/4x/pulsar-logo@4x.png`

## ✅ Benefits

1. **No Duplication** - Single source of truth in design-tokens
2. **Always Up-to-Date** - Changes propagate automatically
3. **Type-Safe** - Full TypeScript support with IconName type
4. **Framework-Agnostic** - Works with React, Vue, Angular, vanilla JS
5. **Works in Markdown** - Perfect for README, docs, GitHub
6. **CDN-like Performance** - GitHub serves raw files fast
7. **Offline Support** - Browser caching handles offline scenarios

## 🔄 Updating Assets

When assets are updated in the design-tokens repo:

1. **In code**: Just rebuild - new assets load automatically
2. **In markdown**: No changes needed - URLs stay the same, content updates
3. **No migration**: All existing references work instantly

## 📝 Best Practices

1. **Use SVG for documentation** - Scalable, smaller file size
2. **Use PNG for specific resolutions** - When exact size matters
3. **Import from art-kit module** - Don't hardcode URLs in code
4. **Use helper functions** - For generating markdown dynamically
5. **Leverage TypeScript** - IconName type prevents typos
