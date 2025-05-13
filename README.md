# Han Stack - Modern SaaS Template

A powerful, full-stack SaaS starter template built with modern technologies. This template provides a solid foundation for building scalable SaaS applications with best practices and industry-standard tools.

## Features

- 🚀 **Full-Stack TypeScript** - End-to-end type safety
- ⚡ **High Performance** - Built with performance in mind using Vite
- 🔄 **Modern Data Fetching** - Powered by TanStack Query
- 🛣️ **Type-Safe Routing** - Using TanStack Router
- 🔒 **Type-Safe RPC** - End-to-end type safety with ORPC
- ✨ **Best Practices** - Following modern development standards
- 🎨 **Component Architecture** - Well-organized and scalable component structure
- 🛠️ **Developer Experience** - Enhanced with Biome configurations

## Tech Stack

### Frontend

- [React](https://react.dev) - UI Library
- [TanStack Router](https://tanstack.com/router/latest) - Type-safe routing
- [TanStack Query](https://tanstack.com/query/latest) - Data synchronization
- [Vite](https://vitejs.dev) - Build tool and dev server

### Backend & API

- [TanStack Start](https://tanstack.com/start/latest) - Full-stack framework
- [ORPC](https://orpc.unnoq.com) - Type-safe RPC
- [Prisma](https://www.prisma.io/)

### Development & Tooling

- [Zod](https://zod.dev) - Runtime type validation
- [Zod Prisma Types](https://github.com/chrishoermann/zod-prisma-types)

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/Insik-Han/han-stack.git
    cd han-stack
    ```

2. Install dependencies

    ```bash
    npm ci
    ```

3. Create .env

    ```bash
    cp .env.example .env
    ```

4. Generate Prisma client

    ```bash
    npm run generate
    ```

5. Start the development server

    ```bash
    npm run dev
    ```

## Development

### Project Structure

```txt
app/
├── components/     # Reusable UI components
├── generated/      # Generated files
├── lib/           # Shared utilities and hooks
├── routes/        # Application routes
├── server/        # Backend server code
└── api.ts         # API definitions
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run fix:biome` - Run Biome
- `npm run check:ts` - Run TypeScript type checking

## Deployment

### Cloudflare Workers

For deploying to Cloudflare Workers, follow the guide [here](https://gist.github.com/slawton3/509f61c8e764e544d063cdd93b53c363).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you find this template helpful, please consider giving it a star ⭐️

---

Built with ❤️ by Insik-Han
