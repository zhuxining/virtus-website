import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_website/about/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="flex flex-col">
			{/* 页面标题 */}
			<section className="bg-muted/30 py-16">
				<div className="container">
					<h1 className="text-center text-4xl font-bold">关于我们</h1>
				</div>
			</section>

			{/* 我们的信念和使命 */}
			<section className="py-16">
				<div className="container">
					<h2 className="mb-10 text-center text-3xl font-bold">
						我们的信念和使命
					</h2>
					<div className="mx-auto max-w-3xl space-y-6 text-center">
						<p className="text-lg">
							明德基金会是在香港注册的慈善机构，一群年轻的内地、香港的朋友。
						</p>
						<p className="text-lg">
							品牌标志「明德」的内涵是：明白「明德」是通过。
						</p>
						<p className="text-lg">
							我们是志愿者，我们服务于我们生活支持的家人：
						</p>
						<p className="text-lg">
							我们家庭在我们成长过程中，对我们最爱的，最好的帮助；
						</p>
						<p className="text-lg">
							我们感谢我们的伙伴，帮助，为善为我们的成长和回馈社会的态度和我们共同努力；
						</p>
						<p className="text-lg">
							我们感谢你们的付出和关爱，世界因为有了我们的付出而更加美好。
						</p>
						<p className="text-lg">我们有一个共同心愿</p>
						<p className="text-lg">回报社会，承担更多的社会责任；</p>
						<p className="text-lg">
							为了让这一心愿成为现实，持续努力，我们在香港注册成立立了明德基金会
						</p>
					</div>
				</div>
			</section>

			{/* 明德的宗旨 */}
			<section className="bg-muted/30 py-16">
				<div className="container">
					<h2 className="mb-10 text-center text-3xl font-bold">明德的宗旨</h2>
					<div className="mx-auto max-w-3xl text-center">
						<p className="text-lg">
							帮助贫困地区的社会福利机构，有志服务社会，回馈社会，资源匮乏的学生完成大学本科教育
						</p>
					</div>
				</div>
			</section>

			{/* 我们的足迹 */}
			<section className="py-16">
				<div className="container">
					<h2 className="mb-10 text-center text-3xl font-bold">我们的足迹</h2>

					<div className="mb-10 overflow-hidden rounded-lg border">
						<div className="relative aspect-[16/9] w-full">
							<img
								src="/assets/footprint-map.svg"
								alt="明德基金会助学足迹地图"
								className="h-full w-full object-contain"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						<div className="rounded-lg border bg-card p-6 shadow-sm">
							<h3 className="mb-4 flex items-center text-xl font-semibold">
								<span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
									1
								</span>
								助学足迹（2006-2021）
							</h3>
							<ul className="space-y-2">
								<li className="flex items-center">
									<span className="mr-2 text-primary">•</span>
									<span>江西宜春 2006、2008、2011</span>
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-primary">•</span>
									<span>安徽黄山 2007</span>
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-primary">•</span>
									<span>江西赣州 2010</span>
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-primary">•</span>
									<span>宁夏银川 2012</span>
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-primary">•</span>
									<span>甘肃兰州 2013</span>
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-primary">•</span>
									<span>甘肃天水 2014、2015、2018</span>
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-primary">•</span>
									<span>甘肃白银 2016、2017</span>
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-primary">•</span>
									<span>黑龙江牡丹江 2019</span>
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-primary">•</span>
									<span>广东清远 2020-2021</span>
								</li>
							</ul>
						</div>

						<div className="rounded-lg border bg-card p-6 shadow-sm">
							<h3 className="mb-4 text-xl font-semibold">赞助机构</h3>
							<p>明德基金会是香港注册的非牟利机构：</p>
							<p className="mt-2">名称公司称：金华顺国有限公司</p>
							<p className="mt-2">名称注册编号：有待更新</p>
							<p className="mt-2">网站设计开发：明德基金会志愿者团队</p>
						</div>

						<div className="rounded-lg border bg-card p-6 shadow-sm">
							<h3 className="mb-4 text-xl font-semibold">联系我们</h3>
							<p>邮箱：enquiry@virtusfoundation.org</p>
							<p className="mt-2">
								香港中环域多利皇后街19-19号爱群商业大厦901室
							</p>
							<p className="mt-2">明德基金会有限公司</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
