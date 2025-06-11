import { faker } from '@faker-js/faker'
import { db } from '../src/lib/db'
import 'dotenv/config'

async function seed() {
	console.time('🌱 Database has been seeded')

	const findEssay = await db.announcement.findFirst()

	console.log(findEssay)

	await db.announcement.create({
		data: {
			content: faker.lorem.paragraphs(2),
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
		await db.$disconnect()
	})
