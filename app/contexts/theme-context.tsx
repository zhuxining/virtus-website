import {
	type ReactNode,
	createContext,
	use,
	useCallback,
	useState,
} from 'react'
import { setThemeServerFn } from '~/lib/theme'

export type Theme = 'dark' | 'light'
export const DEFAULT_THEME: Theme = 'light'

type ThemeProviderProps = {
	children: ReactNode
	defaultTheme: Theme
}

type ThemeProviderState = {
	theme: Theme
	setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | null>(null)

export function ThemeProvider({
	children,
	defaultTheme = DEFAULT_THEME,
}: ThemeProviderProps) {
	const [theme, _setTheme] = useState<Theme>(defaultTheme)

	const setTheme = useCallback((theme: Theme) => {
		setThemeServerFn({ data: theme })
		_setTheme(theme)
	}, [])

	return (
		<ThemeProviderContext value={{ theme, setTheme }}>
			{children}
		</ThemeProviderContext>
	)
}

export const useTheme = () => {
	return use(ThemeProviderContext)
}
