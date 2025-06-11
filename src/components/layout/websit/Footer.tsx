import { Link } from '@tanstack/react-router'
Button
import { Button } from '@/components/ui/button'
import type React from 'react'

import { cn } from '@/lib/utils'

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export function Footer({ className, ...props }: FooterProps) {
	return (
		<footer
			className={cn('bg-background border-t py-6 md:py-10', className)}
			{...props}
		>
			<div className="container flex flex-col gap-8">
				<div className=" text-center text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} 明德基金会 Virtus Foundation Limited.
						版权所有
						<Button variant="link" size="sm" asChild>
							<Link to="/sign-in">登录明德园地</Link>
						</Button>
					</p>
				</div>
			</div>
		</footer>
	)
}
