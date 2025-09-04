
Game concept:
- The player controls a cartoon vacuum cleaner that moves horizontally across the screen
- The vacuum can suck up various objects scattered on the screen
- When an object is sucked up, there should be a visible bulging animation that travels through the vacuum hose
- The vacuum nozzle/tube should be controllable separately from the vacuum body
- Target audience is young children, so keep it colorful and fun

Technical requirements:
- Use Phaser 3's physics and collision system
- Implement smooth, cartoon-style animations
- The bulging hose effect should use mesh deformation or procedural animation, not frame-by-frame sprites
- Keep the code well-organized and commented for learning purposes
- Use TypeScript properly with strong typing

Current project structure (from phaserjs/template-svelte):
- src/game/main.ts - Main game configuration
- src/game/scenes/Preloader.ts - Asset loading scene
- src/game/scenes/Game.ts - Main game scene
- src/App.svelte - Svelte root component
- public/ - Static assets directory

Important notes:
- I am a beginner (non-developer)
- I want to build this incrementally, so that I understand each step of what we're building
- I want to understand the mesh deformation approach for the hose animation
- I am relying on you for Svelte 5 compliance
- You have access to the svelte mcp tool which gives you access to all official svelte documentation. Use this!
- You have access to the Context7 MCP, which gives you access to all Phaser documentation. When using this MCP, which is general purpose, you must search for Phaser specifically.

Use the official Phaser 3 documentation **via Context7 MCP tool**.
Key classes we'll use:
- Phaser.Scene for game logic
- Phaser.GameObjects.Sprite for the vacuum
- Phaser.GameObjects.Mesh for hose deformation
- Phaser.Physics.Arcade for collision detection

Project uses:
- Phaser 3.90.0 (check package.json for exact version)
- TypeScript with strict typing
- Vite for bundling
- Svelte for UI components

File structure:
- Game logic goes in src/game/scenes/Game.ts
- Asset loading in src/game/scenes/Preloader.ts  
- UI elements in src/App.svelte
- Assets in public/ folder

When writing Phaser code:
- Always use the 'this' context in Scene methods
- Physics bodies are separate from visual sprites
- Use this.physics.add.collider() for collisions
- Animations are global and reusable across sprites
- The update() method runs 60 times per second