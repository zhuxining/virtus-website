
## 技术栈
- 编程语音：TypeScript、React19
- 技术框架：Tanstack Start、OPRC、Tanstack Query
- UI 组件库：Shadcn/ui、TailwindCSS4
- 数据库及ORM：Zod4、Prisma、Cloudflare D1
- 文本编辑器：Plate
- 部署平台：Cloudflare Workers
- 要求：遵循最新官方文档中的最佳实践，使用mcp服务“use context7”查询最新技术文档
 
## 项目结构

```text
app/
├── components/        # Reusable UI components
│   ├── ui/            # Shadcn/ui components
│   ├── layout/        # Layout-related components
│       └── websit/    # Websit layout-related components
│   ├── errors/        # Error handling components
│   └── ...            # Other shared components
├── constants/         # Application constants
├── features/          # Feature modules
│   ├── auth/          # Authentication features
│   ├── global-search/ # Global search features
│   ├── settings/      # Settings features
│   ├── tasks/         # Task management features
│   └── theme/         # Theme features
├── hooks/             # Custom React hooks
├── lib/               # Shared libraries and helpers
├── routes/            # Application routes and pages
│   ├── _admin-console/ # Admin console routes
│   ├── _website/      # Official website routes
│   ├── api/           # API routes
│   ├── (auth)/        # Auth-related routes
│   ├── (errors)/      # Error pages
│   └── __root.tsx     # Root route entry
├── server/            # Backend/server logic
│   ├── routes/        # Server-side routes
│   ├── handler.ts     # Server handler
│   ├── prisma.ts      # Prisma instance
│   └── router.ts      # Server router
├── styles/            # Global and component styles
├── utils/             # Utility functions
├── client.tsx         # Client entry point
├── ssr.tsx            # Server-side rendering entry
├── api.ts             # API client
├── router.tsx         # Client router
├── routeTree.gen.ts   # Auto-generated route tree
└── ...
public/                # Static files (images, favicon, etc.)
├── assets/            # Static assets (e.g., logo)
├── favicon.ico        # Favicon
prisma/                # Prisma schema and seed data
├── schema.prisma      # Prisma DB schema
├── seed.ts            # Seed data script

Other key files:
- package.json         # Project metadata and dependencies
- tsconfig.json        # TypeScript configuration
- postcss.config.js    # PostCSS configuration
- wrangler.jsonc       # Cloudflare Workers configuration
- biome.jsonc          # Biome (formatter/linter) configuration
```