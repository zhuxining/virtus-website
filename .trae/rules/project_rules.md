## 业务需求
1. Virtus Foundation Limited的官网及管理后台
2. 官网包括：首页、助学活动、日常活动、捐助渠道、关于我们
3. 后台包括：学生空间和管理员功能，管理学生学业报告、官网内容、发布通知
4. 网站语言需支持简体中文、繁体中文、英文
5. 网站需支持移动端访问

## 功能设计

1. 官网
    - 首页：
    - 助学活动:去到各地助学的活动
    - 日常活动:日常组织的交流活动
    - 捐助渠道：介绍捐款联系方式及捐款名录
    - 关于我们：明德的组织信念、足迹历程
2. 后台
    - 明德动态：最新公告信息、学生的动态信息
    - 个人空间：学生可以撰写学业报告
    - 管理中心：管理公告、管理审核学业报告
    - 官网管理：管理官网内容，如活动行的内容、捐款名录

## 数据模型


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
src/
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
- wrangler.jsonc       # Cloudflare Workers configuration
- biome.jsonc          # Biome (formatter/linter) configuration
```