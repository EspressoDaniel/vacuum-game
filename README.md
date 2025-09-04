# Vacuum Game 🎮

A fun and colorful 2D vacuum cleaner game for young children built with Phaser 3 and Svelte.

## 🎯 Game Concept

Control a cartoon vacuum cleaner to clean up colorful objects scattered around the screen! This educational game is designed for young children with simple controls and engaging animations.

### Features
- 🕹️ Simple arrow key controls for movement
- 🌈 Colorful, kid-friendly graphics
- ✨ Physics-based object collection
- 🎨 Placeholder art ready for custom assets

### Planned Features
- Animated hose bulging when objects are sucked up
- Separate nozzle control for advanced gameplay
- Score tracking and achievements
- Sound effects and background music
- Multiple levels with increasing difficulty

## 🚀 Quick Start

### Prerequisites

- Node.js 22.16.0 (see `.nvmrc`)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]
cd vacuum-game

# Use correct Node version (if using nvm)
nvm use

# Install dependencies
npm install

# Start development server
npm run dev
```

The game will be available at `http://localhost:8080`

## 📝 Available Scripts

### Development
- `npm run dev` - Start development server with hot reload
- `npm run dev-nolog` - Start development server without analytics

### Building
- `npm run build` - Create production build
- `npm run build-nolog` - Production build without analytics
- `npm run preview` - Preview production build

### Code Quality
- `npm run check` - Run TypeScript and Svelte checks concurrently
- `npm run lint` - Run all linting (TypeScript, Svelte, ESLint)
- `npm run lint:eslint` - Run ESLint only
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎮 How to Play

1. Use **arrow keys** to move the vacuum cleaner
   - ⬅️ Left arrow: Move left
   - ➡️ Right arrow: Move right
   - ⬆️ Up arrow: Jump

2. Move the vacuum over colorful objects to collect them

3. Try to collect all objects on the screen!

## 🛠️ Technology Stack

- **Game Engine**: [Phaser 3.90.0](https://phaser.io/)
- **UI Framework**: [Svelte 5](https://svelte.dev/) with SvelteKit
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Code Quality**: ESLint, Prettier, svelte-check

## 📁 Project Structure

```
vacuum-game/
├── src/
│   ├── game/           # Phaser game logic
│   │   ├── scenes/     # Game scenes
│   │   ├── main.ts     # Game configuration
│   │   └── EventBus.ts # Svelte-Phaser communication
│   ├── routes/         # SvelteKit routes
│   └── lib/            # Shared utilities
├── static/             # Static assets
├── public/             # Public files
└── .vscode/            # VS Code settings
```

## 🎨 Art Assets

Currently using colored rectangles and shapes as placeholders. Custom art assets will include:
- Cartoon vacuum cleaner sprite
- Animated vacuum hose with mesh deformation
- Various collectible objects (toys, dust, leaves, etc.)
- Background scenes

## 🔧 Development

### VS Code Setup

This project includes VS Code settings for optimal development experience. Recommended extensions:
- Svelte for VS Code
- Prettier
- ESLint
- TypeScript

### Code Style

The project uses:
- **Prettier** for code formatting (tabs, single quotes)
- **ESLint** for code quality
- **TypeScript** for type safety

Run `npm run format` to format code and `npm run lint` to check for issues.

## 🤝 Contributing

This is a learning project for understanding game development with Phaser and Svelte. Contributions and suggestions are welcome!

## 📄 License

MIT

## 🙏 Acknowledgments

- Built with the [Phaser-Svelte template](https://github.com/phaserjs/template-svelte)
- Phaser 3 by [Phaser Studio](https://phaser.io/)
- Svelte by the [Svelte team](https://svelte.dev/)

---

Made with ❤️ for young gamers everywhere!