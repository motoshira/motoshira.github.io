# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development**: `pnpm dev` - Start Next.js development server
- **Build**: `pnpm build` - Build static site for production (outputs to `./dist/`)  
- **Lint**: `pnpm lint` - Run Biome linter and formatter with auto-fix

## Architecture

This is a personal portfolio website built with Next.js 15 and configured for static export. The site is hosted at https://motoshira.net.

### Key Technologies
- **Next.js 15** with App Router - Static site generation
- **React 19** - UI framework
- **TypeScript** - Type safety with strict mode enabled
- **Tailwind CSS v4** - Styling with custom color scheme (primary: #8bc34a, secondary: #ff9800)
- **Biome** - Linting and formatting (tab indentation, double quotes)

### Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata and Japanese locale
│   ├── page.tsx        # Main page component with complete portfolio content
│   └── globals.css     # Global styles
└── components/         # Reusable UI components
    ├── Heading1-3.tsx  # Typography components
    ├── Text1-2.tsx     # Text components
    ├── Section*.tsx    # Layout components
    ├── LinkText.tsx    # Link component
    └── linkWrap.tsx    # Link wrapper
```

### Configuration Notes
- **Static Export**: Next.js configured with `output: 'export'` for GitHub Pages deployment
- **Build Output**: Custom `distDir: './dist'` instead of default `.next`
- **Path Aliases**: `@/*` maps to `src/*` for clean imports
- **Package Manager**: Uses pnpm (version 9.0.6)
- **ESLint**: Disabled during builds in favor of Biome

### Code Style
- Tab indentation (configured in Biome)
- Double quotes for strings
- Organized imports enabled
- Strict TypeScript configuration with unused variable checks