import { db as prisma } from '../app/lib/db'

async function seed() {
	console.time('🌱 Database has been seeded')

	const findEssay = await prisma.essay.findFirst()

	if (findEssay) {
		return
	}

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
