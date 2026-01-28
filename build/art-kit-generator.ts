/**
 * Art-Kit Generator
 * Automatically generates art-kit/index.ts from SVG files
 * Run at build time to keep the registry in sync with actual files
 */

import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit';
const ART_KIT_DIR = join(process.cwd(), 'art-kit');
const SVG_DIR = join(ART_KIT_DIR, 'SVG');
const OUTPUT_FILE = join(ART_KIT_DIR, 'index.ts');

interface IconEntry {
  filename: string;
  name: string;
  constantName: string;
}

interface LogoEntry {
  filename: string;
  variant: 'icon' | 'logo' | 'logoWithName';
  constantName: string;
}

/**
 * Convert filename to camelCase constant name
 * icon-typescript.svg -> typescript
 * pulsar-logo-name.svg -> logoWithName
 */
function filenameToConstantName(filename: string): string {
  // Remove .svg extension
  let name = filename.replace('.svg', '');
  
  // Remove prefixes
  name = name.replace(/^icon-/, '').replace(/^pulsar-/, '');
  
  // Convert kebab-case to camelCase
  return name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Scan SVG directory and categorize files
 */
function scanSvgDirectory(): { logos: LogoEntry[], icons: IconEntry[] } {
  const files = readdirSync(SVG_DIR);
  const svgFiles = files.filter(f => f.endsWith('.svg'));
  
  const logos: LogoEntry[] = [];
  const icons: IconEntry[] = [];
  
  for (const filename of svgFiles) {
    if (filename.startsWith('pulsar-')) {
      // It's a logo
      const name = filenameToConstantName(filename);
      let variant: 'icon' | 'logo' | 'logoWithName';
      
      if (filename === 'pulsar-icon.svg') {
        variant = 'icon';
      } else if (filename === 'pulsar-logo.svg') {
        variant = 'logo';
      } else if (filename === 'pulsar-logo-name.svg') {
        variant = 'logoWithName';
      } else {
        // Unknown logo variant, skip or handle
        continue;
      }
      
      logos.push({
        filename,
        variant,
        constantName: `PULSAR_${variant.toUpperCase().replace('WITHNAME', '_WITH_NAME')}_SVG`
      });
    } else if (filename.startsWith('icon-')) {
      // It's an icon
      const name = filenameToConstantName(filename);
      icons.push({
        filename,
        name,
        constantName: name
      });
    }
  }
  
  // Sort alphabetically for consistent output
  icons.sort((a, b) => a.name.localeCompare(b.name));
  logos.sort((a, b) => a.variant.localeCompare(b.variant));
  
  return { logos, icons };
}

/**
 * Generate PNG logo structure
 */
function generatePngLogosObject(logos: LogoEntry[]): string {
  const resolutions = ['0.5x', '0.75x', '1x', '1.5x', '2x', '3x', '4x', '200w'];
  
  let code = '  png: {\n';
  
  for (const resolution of resolutions) {
    const resKey = resolution === '1x' ? '1x' : resolution;
    const folder = resolution === '1x' ? '1x' : resolution;
    
    code += `    '${resKey}': {\n`;
    
    for (const logo of logos) {
      const variant = logo.variant;
      let filename: string;
      
      if (resolution === '1x') {
        // 1x has no suffix
        if (variant === 'icon') filename = 'pulsar-icon.png';
        else if (variant === 'logo') filename = 'pulsar-logo.png';
        else filename = 'pulsar-logo-name.png';
      } else if (resolution === '200w') {
        // 200w has no suffix
        if (variant === 'icon') filename = 'pulsar-icon.png';
        else if (variant === 'logo') filename = 'pulsar-logo.png';
        else filename = 'pulsar-logo-name.png';
      } else {
        // Other resolutions have @resolution suffix
        if (variant === 'icon') filename = `pulsar-icon@${resolution}.png`;
        else if (variant === 'logo') filename = `pulsar-logo@${resolution}.png`;
        else filename = `pulsar-logo-name@${resolution}.png`;
      }
      
      code += `      ${variant}: \`\${GITHUB_RAW_BASE}/${folder}/${filename}\`,\n`;
    }
    
    code += `    },\n`;
  }
  
  code += '  },';
  
  return code;
}

/**
 * Generate the TypeScript code
 */
function generateTypeScriptCode(logos: LogoEntry[], icons: IconEntry[]): string {
  const iconCount = icons.length;
  
  let code = `/**
 * Pulsar Art Kit
 * Brand assets, logos, and icons for the Pulsar ecosystem
 * 
 * ⚠️ AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * This file is generated at build time by build/art-kit-generator.ts
 * 
 * To add/remove icons:
 * 1. Add/remove SVG files in art-kit/SVG/
 * 2. Run: pnpm run build:art-kit
 * 
 * Usage in code:
 *   import { PULSAR_LOGO_SVG, ICONS } from '@pulsar-framework/design-tokens/art-kit'
 * 
 * Usage in Markdown:
 *   ![Pulsar Logo](https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit/SVG/pulsar-logo.svg)
 */

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/binaryjack/pulsar-design-system/main/art-kit';

// ============================================
// Brand Logos
// ============================================

`;

  // Generate logo constants
  for (const logo of logos) {
    code += `export const ${logo.constantName} = \`\${GITHUB_RAW_BASE}/SVG/${logo.filename}\`;\n`;
  }
  
  code += `
// Logo variations by resolution
export const PULSAR_LOGOS = {
  svg: {
`;
  
  for (const logo of logos) {
    code += `    ${logo.variant}: ${logo.constantName},\n`;
  }
  
  code += `  },\n`;
  code += generatePngLogosObject(logos);
  code += `
};

// ============================================
// Icon Set (${iconCount} icons)
// ============================================

export const ICONS = {
`;

  // Generate icon entries
  for (const icon of icons) {
    code += `  ${icon.constantName}: \`\${GITHUB_RAW_BASE}/SVG/${icon.filename}\`,\n`;
  }
  
  code += `} as const;

// ============================================
// Helper Functions
// ============================================

/**
 * Generate markdown image tag for an icon
 * @param iconName - Name of the icon (from ICONS keys)
 * @param altText - Alt text for the image
 * @param width - Optional width
 */
export function markdownIcon(
  iconName: keyof typeof ICONS,
  altText?: string,
  width?: number
): string {
  const url = ICONS[iconName];
  const alt = altText || iconName;
  const widthAttr = width ? \` width="\${width}"\` : '';
  return \`<img src="\${url}" alt="\${alt}"\${widthAttr} />\`;
}

/**
 * Generate markdown image tag for Pulsar logo
 * @param variant - Logo variant ('icon' | 'logo' | 'logoWithName')
 * @param altText - Alt text for the image
 * @param width - Optional width
 */
export function markdownLogo(
  variant: 'icon' | 'logo' | 'logoWithName' = 'logo',
  altText: string = 'Pulsar',
  width?: number
): string {
  const url = PULSAR_LOGOS.svg[variant];
  const widthAttr = width ? \` width="\${width}"\` : '';
  return \`<img src="\${url}" alt="\${altText}"\${widthAttr} />\`;
}

/**
 * Get all icon names
 */
export function getIconNames(): Array<keyof typeof ICONS> {
  return Object.keys(ICONS) as Array<keyof typeof ICONS>;
}

/**
 * Get icon URL by name
 */
export function getIconUrl(iconName: keyof typeof ICONS): string {
  return ICONS[iconName];
}

// ============================================
// Type Exports
// ============================================

export type IconName = keyof typeof ICONS;
export type LogoVariant = 'icon' | 'logo' | 'logoWithName';
export type LogoResolution = '0.5x' | '0.75x' | '1x' | '1.5x' | '2x' | '3x' | '4x' | '200w';
`;

  return code;
}

/**
 * Main generator function
 */
function generateArtKit() {
  console.log('🎨 Generating art-kit index...');
  
  try {
    const { logos, icons } = scanSvgDirectory();
    
    console.log(`   Found ${logos.length} logos`);
    console.log(`   Found ${icons.length} icons`);
    
    const code = generateTypeScriptCode(logos, icons);
    
    writeFileSync(OUTPUT_FILE, code, 'utf-8');
    
    console.log(`✅ Generated ${OUTPUT_FILE}`);
    console.log(`   Total assets: ${logos.length + icons.length}`);
  } catch (error) {
    console.error('❌ Error generating art-kit:', error);
    process.exit(1);
  }
}

// Run generator
generateArtKit();
