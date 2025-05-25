import { createFileRoute } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/_website/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="flex flex-col">
			{/* 横幅区域 */}
			<section className="relative h-[500px] w-full overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-10" />
				<div
					className="absolute inset-0 bg-cover bg-center z-0"
					style={{ backgroundImage: "url('/assets/banner-bg.svg')" }}
				/>
				<div className="container relative z-20 flex h-full flex-col items-start justify-center text-white">
					<h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
						明德基金会是在香港注册的慈善机构
					</h1>
					<p className="mb-8 max-w-2xl text-lg md:text-xl">
						明德的宗旨是帮助贫困学生完成学业，有责任服务社会，回馈社会。
						实现贫困学生完成大学本科教育。
					</p>
					<Button size="lg" className="bg-primary hover:bg-primary/90">
						了解更多
					</Button>
				</div>
			</section>

			{/* 项目介绍区域 */}
			<section className="py-16 bg-background">
				<div className="container text-center">
					<h2 className="mb-12 text-3xl font-bold">"缔造梦想"公益项目</h2>
					<p className="mx-auto mb-8 max-w-3xl text-muted-foreground">
						明德的宗旨是帮助贫困学生完成学业，《缔造梦想》项目，资助学生完成大学本科教育。学生毕业后通过自己的努力，回馈社会，学生毕业后通过自己的努力，回馈社会。
					</p>
				</div>
			</section>

			{/* 数据统计区域 */}
			<section className="py-16 bg-muted/30">
				<div className="container">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="flex flex-col items-center justify-center text-center">
							<h3 className="mb-2 text-4xl font-bold">2006年</h3>
							<p className="text-muted-foreground">创始时间</p>
						</div>
						<div className="flex flex-col items-center justify-center text-center">
							<h3 className="mb-2 text-4xl font-bold">900+</h3>
							<p className="text-muted-foreground">受助学生</p>
						</div>
						<div className="flex flex-col items-center justify-center text-center">
							<h3 className="mb-2 text-4xl font-bold">9城市</h3>
							<p className="text-muted-foreground">覆盖地区</p>
						</div>
					</div>
				</div>
			</section>

			{/* 活动展示区域 */}
			<section className="py-16 bg-background">
				<div className="container">
					<h2 className="mb-12 text-center text-3xl font-bold">"助学行"活动</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{/* 活动卡片 1 */}
						<div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
							<div className="aspect-video w-full overflow-hidden bg-muted">
								<img
									src="/assets/event-1.svg"
									alt="2021广东-清远"
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="p-4">
								<h3 className="mb-2 text-xl font-semibold">2021广东-清远</h3>
								<p className="text-sm text-muted-foreground">
									大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导，帮助他们树立信心，实现梦想。大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导。
								</p>
							</div>
						</div>

						{/* 活动卡片 2 */}
						<div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
							<div className="aspect-video w-full overflow-hidden bg-muted">
								<img
									src="/assets/event-2.svg"
									alt="2020广东-肇庆"
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="p-4">
								<h3 className="mb-2 text-xl font-semibold">2020广东-肇庆</h3>
								<p className="text-sm text-muted-foreground">
									大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导，帮助他们树立信心，实现梦想。大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导。
								</p>
							</div>
						</div>

						{/* 活动卡片 3 */}
						<div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
							<div className="aspect-video w-full overflow-hidden bg-muted">
								<img
									src="/assets/event-3.svg"
									alt="2019黑龙江-牡丹江"
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="p-4">
								<h3 className="mb-2 text-xl font-semibold">
									2019黑龙江-牡丹江
								</h3>
								<p className="text-sm text-muted-foreground">
									大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导，帮助他们树立信心，实现梦想。大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导。
								</p>
							</div>
						</div>

						{/* 活动卡片 4 */}
						<div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
							<div className="aspect-video w-full overflow-hidden bg-muted">
								<img
									src="/assets/event-4.svg"
									alt="2018甘肃-天水"
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="p-4">
								<h3 className="mb-2 text-xl font-semibold">2018甘肃-天水</h3>
								<p className="text-sm text-muted-foreground">
									大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导，帮助他们树立信心，实现梦想。大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导。
								</p>
							</div>
						</div>

						{/* 活动卡片 5 */}
						<div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
							<div className="aspect-video w-full overflow-hidden bg-muted">
								<img
									src="/assets/event-5.svg"
									alt="2017甘肃-兰州"
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="p-4">
								<h3 className="mb-2 text-xl font-semibold">2017甘肃-兰州</h3>
								<p className="text-sm text-muted-foreground">
									大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导，帮助他们树立信心，实现梦想。大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导。
								</p>
							</div>
						</div>

						{/* 活动卡片 6 */}
						<div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
							<div className="aspect-video w-full overflow-hidden bg-muted">
								<img
									src="/assets/event-6.svg"
									alt="2016甘肃-白银"
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="p-4">
								<h3 className="mb-2 text-xl font-semibold">2016甘肃-白银</h3>
								<p className="text-sm text-muted-foreground">
									大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导，帮助他们树立信心，实现梦想。大学生志愿者，走进贫困山区，为当地学生提供教育支持和心理辅导。
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
