# Han Stack - Modern SaaS Template

> This template is currently under development. Example code will be added soon, but it's ready for production use. (Depends on Tanstack start version)

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

2. Create .env

    ```bash
    cp .env.example .env
    ```

3. Install dependencies

    ```bash
    npm ci
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
├── components/    # Reusable UI components
├── constants/     # Constants
├── features/      # Feature modules (e.g., theme, global search)
├── hooks/         # Reusable React hooks
├── lib/           # Shared utilities and helpers
├── routes/        # Application routes
├── server/        # Backend server code
├── styles/        # Global and component styles
├── utils/         # Utility functions and helpers
public/            # Static assets
prisma/            # Prisma schema and seed files
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

## Inspiration

This project draws inspiration from the following amazing repositories:

- [shadcn-admin](https://github.com/satnaing/shadcn-admin)
- [create-better-t-stack](https://github.com/AmanVarshney01/create-better-t-stack)

---

Built with ❤️ by Insik-Han
