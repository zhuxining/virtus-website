import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import type React from 'react'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header({ className, ...props }: HeaderProps) {
	return (
		<header
			className={cn(
				'bg-background sticky top-0 z-50 w-full border-b py-2',
				className,
			)}
			{...props}
		>
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center gap-6">
					<Link to="/" className="flex items-center space-x-2">
						<img src="/logo.webp" alt="Logo" className="h-12  object-full" />
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
						<Link to="/" className="transition-colors hover:text-primary">
							首页
						</Link>
						<Link to="/dream" className="transition-colors hover:text-primary">
							助学活动
						</Link>
						<Link to="/event" className="transition-colors hover:text-primary">
							日常活动
						</Link>
						<Link
							to="/donation"
							className="transition-colors hover:text-primary"
						>
							捐助渠道
						</Link>
						<Link to="/about" className="transition-colors hover:text-primary">
							关于我们
						</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}
