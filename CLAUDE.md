# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a 2D vacuum cleaner game for children built with Phaser 3.90.0, Svelte 5, and TypeScript. The game uses the official Phaser-Svelte template as its foundation. The target audience is young children, requiring colorful, fun, and intuitive gameplay.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (port 8080)
npm run build        # Create production build in build/ folder
npm run dev-nolog    # Dev server without analytics
npm run build-nolog  # Production build without analytics

# Code Quality Commands
npm run check        # Run svelte-check and TypeScript type checking concurrently
npm run typecheck    # Run TypeScript type checking only
npm run svelte-check # Run svelte-check only
npm run lint         # Alias for npm run check
npm run format       # Format all files with Prettier
npm run format:check # Check if files are properly formatted
```

## Architecture

### Technology Stack
- **Game Engine**: Phaser 3.90.0 with Arcade Physics
- **UI Framework**: Svelte 5.23.1 with SvelteKit
- **Language**: TypeScript 5.7.2
- **Bundler**: Vite 6.3.1
- **Code Formatter**: Prettier 3.6.2 with prettier-plugin-svelte
- **Type Checking**: svelte-check 4.0.2

### Core Game Configuration
- **Resolution**: 1024x768
- **Physics**: Arcade with gravity (x: 0, y: 500)
- **Background**: Sky blue (#87CEEB)
- **Scene Flow**: Boot → Preloader → MainMenu → Game → GameOver

### Key Architecture Decisions

1. **Svelte-Phaser Bridge**: The `PhaserGame.svelte` component bridges Svelte and Phaser, using EventBus for bidirectional communication.

2. **Scene Communication**: All Phaser scenes must emit `'current-scene-ready'` via EventBus in their `create()` method to expose themselves to Svelte components.

3. **SSR Disabled**: Server-side rendering is disabled (`export const ssr = false` in `src/routes/+layout.js`) as Phaser requires client-side execution.

4. **Physics Bodies**: All interactive game objects use Phaser's Arcade Physics for collision detection and movement.

5. **TypeScript Configuration**: Project extends from `.svelte-kit/tsconfig.json` following SvelteKit standards, with `@types/node` installed for Node.js type definitions.

## Code Quality Setup

### TypeScript Configuration
- Extends from `.svelte-kit/tsconfig.json` (SvelteKit generated)
- Strict mode is disabled to allow for Phaser's flexible typing
- Both `svelte-check` and `tsc` run concurrently for comprehensive type checking

### Prettier Configuration
- **Style**: Tabs, single quotes, no trailing commas
- **Print Width**: 100 characters
- **Svelte Support**: Uses `prettier-plugin-svelte` for `.svelte` files
- **Ignored Files**: `node_modules/`, build outputs, static files, config JSONs

## Game-Specific Implementation Details

### Vacuum Mechanics
- Horizontal movement controlled by arrow keys (200 px/sec)
- Jump capability with up arrow (velocity: -350)
- Collision detection with ground and objects
- Object collection via physics overlap

### Planned Features (from docs/about.md)
- **Mesh Deformation**: Vacuum hose bulging animation when objects are sucked up (not frame-by-frame sprites)
- **Separate Nozzle Control**: Vacuum nozzle/tube controllable independently from body
- **Incremental Development**: Build features step-by-step for beginner understanding

### Visual Design
Current placeholder art (to be replaced with custom assets):
- Blue rectangle: Vacuum body
- Gray rectangle: Vacuum hose  
- Colored circles/squares: Collectible objects
- Brown rectangle: Ground/floor

## MCP Tool Access

The project has access to:
- **svelte-llm**: Official Svelte 5 and SvelteKit documentation
- **context7**: Phaser 3 documentation (search specifically for "Phaser")

When implementing Svelte features, use `mcp__svelte-llm__list_sections` and `mcp__svelte-llm__get_documentation`.
When implementing Phaser features, use `mcp__context7__resolve-library-id` with "Phaser" and `mcp__context7__get-library-docs`.

## Important Files

- `src/game/main.ts`: Game configuration and initialization
- `src/game/scenes/Game.ts`: Main gameplay logic
- `src/game/EventBus.ts`: Svelte-Phaser communication bridge
- `src/PhaserGame.svelte`: Phaser initialization component
- `static/assets/`: Static game assets location
- `tsconfig.app.json`: TypeScript configuration
- `.prettierrc`: Prettier formatting configuration
- `.prettierignore`: Files excluded from formatting

## Code Standards

- Use TypeScript with proper typing for all game objects
- Maintain 60 FPS update cycle in Phaser scenes
- Preserve `this` context in Scene methods
- Keep physics bodies separate from visual sprites
- Use `this.physics.add.collider()` for collisions
- Animations are global and reusable across sprites
- Format all code with Prettier using `npm run format`
- Run type checks before committing using `npm run check`