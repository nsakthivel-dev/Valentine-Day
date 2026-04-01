# Valentine Quest 💖

An interactive and playful web application designed for a special Valentine's Day proposal. This project features dynamic user interactions, expressive animations, and a smooth storytelling flow.

## 🚀 Features

- **Interactive Proposal Flow**: A multi-step journey with personalized messages and transitions.
- **Dynamic Button Interactions**: Buttons that resize, transform, and respond to user actions.
- **Expressive Animations**: Smooth transitions and "bouncy" effects for a cute and engaging experience.
- **Custom GIF Integration**: Uses Tenor GIFs to add emotion and character to each step of the proposal.
- **Final Surprise**: A unique transformation effect on the final slide that automatically leads to a celebration.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Hooks (useState, useCallback)
- **Asset Management**: Tenor API integration

## 📦 Project Structure

- `artifacts/valentine-proposal`: The main frontend application.
- `artifacts/api-server`: Backend server (if applicable).
- `lib/`: Shared libraries and utilities.

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Run the application locally:
```bash
pnpm dev
```

### Building

To build the project for production:
```bash
pnpm build
```

## 🌐 Deployment (Vercel)

To deploy this project to Vercel, follow these settings:

1. **Framework Preset**: `Vite`
2. **Root Directory**: `artifacts/valentine-proposal`
3. **Build Command**: `pnpm build`
4. **Output Directory**: `dist`
5. **Install Command**: `pnpm install`

Alternatively, you can deploy from the root using the `vercel.json` configuration.

---
Made with ❤️ for a special someone.
