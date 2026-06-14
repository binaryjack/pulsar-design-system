# Synetics Art Kit

Brand assets, logos, and icons for the Synetics ecosystem.

> ⚠️ **Note**: The `index.ts` file is auto-generated at build time. Do not edit it manually!

## 📦 Installation

The art-kit is part of `@synetics/design-tokens`:

```bash
pnpm add @synetics/design-tokens
```

## 🎨 Usage

### In TypeScript/JavaScript Code

```typescript
import { 
  PULSAR_LOGO_SVG, 
  ICONS,
  markdownLogo,
  markdownIcon 
} from '@synetics/design-tokens/art-kit'

// Use in your app
const logoUrl = PULSAR_LOGO_SVG
const saveIcon = ICONS.save

// Generate markdown
const logoMd = markdownLogo('logo', 'Synetics Logo', 200)
const iconMd = markdownIcon('typescript', 'TypeScript', 24)
```

### In Markdown Files

All assets are available via GitHub raw URLs. No need to copy files to your project!

#### Logos

<img src="https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/pulsar-icon.svg" alt="Synetics Icon" width="64" />
<img src="https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/pulsar-logo.svg" alt="Synetics Logo" width="200" />
<img src="https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/pulsar-logo-name.svg" alt="Synetics Logo with Name" width="300" />

```markdown
![Synetics Icon](https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/pulsar-icon.svg)
![Synetics Logo](https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/pulsar-logo.svg)
![Synetics Logo with Name](https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/pulsar-logo-name.svg)
```

#### Icons

Available icons (69 total):

| Category | Icons |
|----------|-------|
| **Frameworks** | angular, react, vue, vite, webpack |
| **Programming** | javascript, typescript, function, variable, class, module |
| **UI Elements** | checkbox-checked, checkbox-unchecked, radio-selected, radio-unselected, dropdown, menu, close |
| **Actions** | save, delete, edit, download, upload, export, import, refresh, share |
| **Status** | success, error, warning, pending, info |
| **Development** | git-branch, git-commit, terminal, component, dom, hooks, reactivity |
| **General** | search, settings, home, user, calendar, chart, database, cloud, server |
| **More** | heart, star, thumbs-up, trending-up, megaphone, notification, workflow, pipeline, and more... |

**Example usage:**

```markdown
![TypeScript](https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/icon-typescript.svg)
![React](https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/icon-react.svg)
![Success](https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/icon-success.svg)
```

With custom size:

```html
<img src="https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/icon-typescript.svg" width="24" alt="TypeScript" />
```

## 📁 Available Formats

### SVG (Vector)
- ✅ Scalable to any size
- ✅ Small file size
- ✅ Perfect for web and documentation
- Located in: `art-kit/SVG/`

### PNG (Raster)
Multiple resolutions available:
- `0.5x` - 50% scale
- `0.75x` - 75% scale
- `1x` - Standard resolution
- `1.5x` - 150% scale
- `2x` - Retina displays
- `3x` - High-DPI displays
- `4x` - Ultra high-DPI
- `200w` - Fixed 200px width

## 🔗 URL Pattern

All assets follow this pattern:
```
https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/{format}/{filename}
```

**Examples:**
- SVG Icon: `.../art-kit/SVG/icon-name.svg`
- PNG Logo 2x: `.../art-kit/2x/pulsar-logo@2x.png`

## 🛠️ API Reference

### Constants

- `PULSAR_ICON_SVG` - Synetics icon (just the symbol)
- `PULSAR_LOGO_SVG` - Synetics logo (symbol + PULSAR text)
- `PULSAR_LOGO_NAME_SVG` - Full logo with PULSAR.DEV text
- `PULSAR_LOGOS` - Object with all logo variations
- `ICONS` - Object with all icon URLs (69 icons)

### Functions

#### `markdownLogo(variant, altText, width?)`
Generate markdown/HTML for Synetics logo.

```typescript
markdownLogo('logo', 'Synetics Logo', 200)
// Returns: '<img src="..." alt="Synetics Logo" width="200" />'
```

#### `markdownIcon(iconName, altText?, width?)`
Generate markdown/HTML for an icon.

```typescript
markdownIcon('typescript', 'TypeScript', 24)
// Returns: '<img src="..." alt="TypeScript" width="24" />'
```

#### `getIconNames()`
Get array of all available icon names.

```typescript
const icons = getIconNames()
// Returns: ['angular', 'api', 'calendar', ...]
```

#### `getIconUrl(iconName)`
Get the URL for a specific icon.

```typescript
const url = getIconUrl('typescript')
// Returns: 'https://raw.githubusercontent.com/...'
```

## 📝 Example: README Badge

Create a beautiful README header:

```markdown
<p align="center">
  <img src="https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/pulsar-logo-name.svg" width="400" alt="Synetics.dev" />
</p>

> ⚠️ **REBRANDING & DEPRECATION NOTICE**  
> **Pulsar is now Synetics.** The original `pulsar-framework` packages have been officially deprecated. Please use the new `@synetics/*` namespace for all future development.


<p align="center">
  <img src="https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/icon-typescript.svg" width="20" alt="TypeScript" />
  <img src="https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/icon-react.svg" width="20" alt="React" />
  <img src="https://raw.githubusercontent.com/binaryjack/synetics-design-system/main/art-kit/SVG/icon-vite.svg" width="20" alt="Vite" />
</p>
```

## 🎯 Benefits

✅ **No asset copying** - Reference directly from the design system
✅ **Always up-to-date** - Changes propagate automatically
✅ **Type-safe** - Full TypeScript support
✅ **Framework-agnostic** - Works everywhere
✅ **Consistent branding** - Single source of truth
✅ **Works offline** - Assets cached by browsers

## 📄 License

Part of the Synetics ecosystem. See main project license.

---

## 🛠️ For Maintainers

### Adding New Icons

1. Add SVG file to `art-kit/SVG/` with naming convention:
   - Icons: `icon-{name}.svg` (e.g., `icon-typescript.svg`)
   - Logos: `pulsar-{variant}.svg` (e.g., `pulsar-logo.svg`)

2. Regenerate the index:
   ```bash
   pnpm build:art-kit
   ```

3. The `index.ts` file is automatically generated with:
   - All icon exports
   - Type-safe constants
   - Helper functions
   - TypeScript types

### Generator Details

The art-kit uses a build-time generator ([build/art-kit-generator.ts](../build/art-kit-generator.ts)) that:
- Scans `art-kit/SVG/` directory
- Converts filenames to camelCase constants
- Generates TypeScript with full type safety
- Runs automatically before build (`pnpm build`)

**No manual maintenance required!** Just add/remove SVG files and rebuild.
