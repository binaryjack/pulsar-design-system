# Art-Kit Generator Guide

## 🎯 Problem Solved

Previously, adding/removing icons required manually updating the hardcoded registry in `art-kit/index.ts`. This was error-prone and tedious.

Now, the registry is **auto-generated at build time** by scanning the SVG directory!

## ✨ How It Works

### Architecture

```
packages/design-tokens/
├── art-kit/
│   ├── SVG/                    # Source of truth
│   │   ├── icon-*.svg         # 63 icons
│   │   └── pulsar-*.svg       # 3 logos
│   ├── index.ts               # 🤖 AUTO-GENERATED (208 lines)
│   └── README.md
├── build/
│   └── art-kit-generator.ts   # Generator script
└── package.json               # build:art-kit script
```

### Generator Process

1. **Scans** `art-kit/SVG/` directory
2. **Categorizes** files (logos vs icons)
3. **Converts** filenames to camelCase constants
   - `icon-typescript.svg` → `typescript`
   - `icon-git-branch.svg` → `gitBranch`
   - `pulsar-logo-name.svg` → `logoWithName`
4. **Generates** TypeScript code with:
   - Export constants
   - ICONS object (type-safe)
   - Helper functions
   - TypeScript types

## 🚀 Usage

### Adding a New Icon

**Step 1:** Add SVG file
```bash
# Save your icon with the naming convention
art-kit/SVG/icon-docker.svg
```

**Step 2:** Regenerate
```bash
pnpm build:art-kit
```

**Step 3:** Done! ✅

The icon is now available as:
```typescript
import { ICONS } from '@synetics/design-tokens/art-kit'

ICONS.docker  // ✅ Type-safe!
```

### Removing an Icon

**Step 1:** Delete the SVG file
```bash
rm art-kit/SVG/icon-old-icon.svg
```

**Step 2:** Regenerate
```bash
pnpm build:art-kit
```

**Step 3:** Done! ✅

The icon is removed from the registry automatically.

## 📝 Example: Before & After

### Before (Manual) ❌

**Adding icon-kubernetes.svg:**
1. Add SVG file
2. Open `art-kit/index.ts`
3. Find the ICONS object
4. Add line: `kubernetes: '${GITHUB_RAW_BASE}/SVG/icon-kubernetes.svg',`
5. Make sure it's alphabetically sorted
6. Update icon count in comments
7. Test TypeScript types
8. Hope you didn't make a typo!

### After (Automated) ✅

**Adding icon-kubernetes.svg:**
1. Add SVG file
2. Run `pnpm build:art-kit`
3. Done!

## 🔧 Build Integration

The generator runs **automatically** as part of the build process:

```json
{
  "scripts": {
    "build": "pnpm build:art-kit && tsc",
    "build:art-kit": "tsx build/art-kit-generator.ts"
  }
}
```

This ensures the registry is always in sync before compilation.

## 📊 Statistics

Current state:
- **3 logos** (icon, logo, logoWithName)
- **63 icons** (angular, api, calendar, chart, etc.)
- **66 total assets**
- **208 lines** of generated TypeScript
- **100% type-safe** with auto-completion

## 🎨 Naming Convention

The generator follows strict naming conventions:

### Icons
```
icon-{name}.svg → ICONS.{camelCaseName}

Examples:
icon-typescript.svg      → ICONS.typescript
icon-git-branch.svg      → ICONS.gitBranch
icon-checkbox-checked.svg → ICONS.checkboxChecked
```

### Logos
```
pulsar-{variant}.svg → PULSAR_{VARIANT}_SVG

Examples:
pulsar-icon.svg      → PULSAR_ICON_SVG
pulsar-logo.svg      → PULSAR_LOGO_SVG
pulsar-logo-name.svg → PULSAR_LOGO_WITH_NAME_SVG
```

## ⚠️ Important Notes

1. **Don't edit** `art-kit/index.ts` manually - it's regenerated on every build
2. **Follow naming conventions** - the generator expects `icon-*.svg` and `pulsar-*.svg`
3. **Run generator** after adding/removing files
4. **Commit SVG files only** - the generated index.ts is .gitignored

## 🧪 Testing the Generator

```bash
# Clean test
rm art-kit/index.ts
pnpm build:art-kit

# Should output:
# 🎨 Generating art-kit index...
#    Found 3 logos
#    Found 63 icons
# ✅ Generated art-kit/index.ts
#    Total assets: 66
```

## 🎯 Benefits

✅ **Zero maintenance** - No manual registry updates
✅ **Type-safe** - Generated TypeScript types
✅ **Consistent** - Automated naming conventions
✅ **Fast** - Regenerates in <1 second
✅ **Reliable** - No human error
✅ **Scalable** - Works with any number of icons

## 🔮 Future Enhancements

Possible improvements:
- Generate icon preview gallery (HTML)
- Validate SVG file structure
- Optimize SVG files automatically
- Generate different export formats (ESM, CJS)
- Create icon search/filter utilities
