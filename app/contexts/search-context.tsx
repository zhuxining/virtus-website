import {
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	createContext,
	use,
	useEffect,
	useState,
} from 'react'
import { CommandMenu } from '~/components/command-menu'

interface SearchContextType {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

const SearchContext = createContext<SearchContextType | null>(null)

interface Props {
	children: ReactNode
}

export function SearchProvider({ children }: Props) {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}
		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	return (
		<SearchContext value={{ open, setOpen }}>
			{children}
			<CommandMenu />
		</SearchContext>
	)
}

export const useSearch = () => {
	return use(SearchContext)
}
