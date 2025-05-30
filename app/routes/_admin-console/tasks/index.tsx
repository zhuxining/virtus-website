import { createFileRoute } from '@tanstack/react-router'
import { Header } from '~/components/layout/header'
import { Main } from '~/components/layout/main'
import { TasksDialogs } from './-components/tasks-dialog'
import { TasksTable } from './-components/tasks-table'
import { tasksColumns } from './-components/tasks-table/tasks-columns'
import { TasksPrimaryButtons } from './-components/tasks-table/tasks-primary-buttons'
import TasksProvider from './-contexts/tasks-content'
import { tasks } from './-data/tasks'

export const Route = createFileRoute('/_admin-console/tasks/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Header fixed={true} />

			<TasksProvider>
				<Main>
					<div className="mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4">
						<div>
							<h2 className="text-2xl font-bold tracking-tight">Tasks</h2>
							<p className="text-muted-foreground">
								Here&apos;s a list of your tasks for this month!
							</p>
						</div>
						<TasksPrimaryButtons />
					</div>
					<div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
						<TasksTable data={tasks} columns={tasksColumns} />
					</div>
				</Main>

				<TasksDialogs />
			</TasksProvider>
		</>
	)
}
