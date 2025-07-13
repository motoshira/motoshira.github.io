# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development**: `pnpm dev` - Start development server
- **Build**: `pnpm build` - Build for production (runs TypeScript check first)
- **Lint**: `pnpm lint` - Run ESLint with TypeScript support
- **Preview**: `pnpm preview` - Preview production build locally

## Architecture

This is a personal portfolio website built with React + TypeScript + Vite, deployed to GitHub Pages at https://motoshira.net.

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite with plugins for React, GLSL shaders, and TypeScript paths
- **Styling**: Tailwind CSS with PostCSS
- **Graphics**: WebGL2 with custom GLSL shaders for animated bubble effects
- **Package Manager**: pnpm

### Code Organization
- `src/App.tsx` - Main portfolio content and structure
- `src/components/` - Reusable UI components (headings, text, sections, links)
- `src/components/Bubbles.tsx` - WebGL bubble animation background effect
- `src/components/*.glsl` - GLSL vertex and fragment shaders for bubbles
- Import paths use `@/` alias pointing to `src/`

### Key Features
- WebGL2 animated bubble background using custom shaders
- Component-based architecture with semantic HTML elements
- TypeScript path mapping for clean imports
- ESLint with TypeScript, React, and Tailwind CSS rules
- Static site optimized for GitHub Pages deployment

The site is a single-page application showcasing personal work, experience, and contact links.