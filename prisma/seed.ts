import { faker } from '@faker-js/faker'
import { PrismaD1HTTP } from '@prisma/adapter-d1'
import { PrismaClient } from '~/generated/prisma'
import 'dotenv/config'

const adapter = new PrismaD1HTTP({
	CLOUDFLARE_D1_TOKEN: process.env.CLOUDFLARE_D1_TOKEN!,
	CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID!,
	CLOUDFLARE_DATABASE_ID: process.env.CLOUDFLARE_DATABASE_ID!,
})

const prisma = new PrismaClient({ adapter })

async function seed() {
	console.time('🌱 Database has been seeded')

	const findPost = await prisma.post.findFirst()

	if (findPost) {
		return
	}

	await prisma.post.create({
		data: {
			id: faker.string.uuid(),
			name: faker.person.fullName(),
			description: faker.lorem.paragraph(),
		},
	})

	console.timeEnd('🌱 Database has been seeded')
}

seed()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
