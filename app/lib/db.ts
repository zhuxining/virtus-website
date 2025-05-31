import { serverOnly } from '@tanstack/react-start'
import { PrismaClient } from '~/generated/prisma'
import { PrismaD1HTTP } from '@prisma/adapter-d1'

const createPrismaClient = serverOnly(() => {
	return new PrismaClient({
		adapter: new PrismaD1HTTP({
			CLOUDFLARE_D1_TOKEN: process.env.CLOUDFLARE_D1_TOKEN as string,
			CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID as string,
			CLOUDFLARE_DATABASE_ID: process.env.CLOUDFLARE_DATABASE_ID as string,
		}),
		log: ['error'],
	})
})

const prismaGlobal = globalThis as typeof globalThis & {
	prisma?: PrismaClient
}

export const db = createPrismaClient()

if (import.meta.env.NODE_ENV !== 'production') {
	prismaGlobal.prisma = db
}
