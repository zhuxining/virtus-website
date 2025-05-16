'use client'

/*
  This file is adapted from next-themes to work with tanstack start.
  next-themes can be found at https://github.com/pacocoursey/next-themes under the MIT license.
*/

import React, { useEffect } from 'react'

import {
	COLOR_SCHEMES,
	PREFERS_COLOR_SCHEME,
	THEME_COLOR_MAP,
	THEME_STORAGE_KEY,
} from '~/constants/theme'

interface ValueObject {
	[themeName: string]: string
}

export interface UseThemeProps {
	/** List of all available theme names */
	themes: string[]
	/** Forced theme name for the current page */
	forcedTheme?: string | undefined
	/** Update the theme */
	setTheme: React.Dispatch<React.SetStateAction<string>>
	/** Active theme name */
	theme?: string | undefined
	/** If enableSystem is true, returns the System theme preference ("dark" or "light"), regardless what the active theme is */
	systemTheme?: 'dark' | 'light' | undefined
}

export type Attribute = `data-${string}` | 'class'

export interface ThemeProviderProps extends React.PropsWithChildren {
	/** List of all available theme names */
	themes?: string[] | undefined
	/** Forced theme name for the current page */
	forcedTheme?: string | undefined
	/** Whether to switch between dark and light themes based on prefers-color-scheme */
	enableSystem?: boolean | undefined
	/** Disable all CSS transitions when switching themes */
	disableTransitionOnChange?: boolean | undefined
	/** Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons */
	enableColorScheme?: boolean | undefined
	/** Default theme name (for v0.0.12 and lower the default was light). If `enableSystem` is false, the default theme is light */
	defaultTheme?: string | undefined
	/** HTML attribute modified based on the active theme. Accepts `class`, `data-*` (meaning any data attribute, `data-mode`, `data-color`, etc.), or an array which could include both */
	attribute?: Attribute | Attribute[] | undefined
	/** Mapping of theme name to HTML attribute value. Object where key is the theme name and value is the attribute value */
	value?: ValueObject | undefined
	/** Nonce string to pass to the inline script for CSP headers */
	nonce?: string | undefined
}

const ThemeContext = React.createContext<UseThemeProps | undefined>(undefined)
// biome-ignore lint/suspicious/noEmptyBlockStatements: noop
const defaultContext: UseThemeProps = { setTheme: () => {}, themes: [] }

export const useTheme = () => React.use(ThemeContext) ?? defaultContext

export const ThemeProvider = (props: ThemeProviderProps): React.ReactNode => {
	const context = React.use(ThemeContext)

	// Ignore nested context providers, just passthrough children
	if (context) return props.children
	return <Theme {...props} />
}

const Theme = ({
	forcedTheme,
	disableTransitionOnChange = false,
	enableSystem = true,
	enableColorScheme = true,
	themes = COLOR_SCHEMES,
	defaultTheme = enableSystem ? 'system' : 'light',
	attribute = 'data-theme',
	value,
	children,
	nonce,
}: ThemeProviderProps) => {
	const [theme, setThemeState] = React.useState(() =>
		getTheme(THEME_STORAGE_KEY, defaultTheme),
	)
	const attrs = value ? Object.values(value) : themes

	// apply selected theme function (light, dark, system)
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
	const applyTheme = React.useCallback((theme: string | undefined) => {
		let resolved = theme
		if (!resolved) return

		// If theme is system, resolve it before setting theme
		if (theme === 'system' && enableSystem) {
			resolved = getSystemTheme()
		}

		const name = value ? value[resolved] : resolved
		const enable = disableTransitionOnChange ? disableAnimation() : null
		const d = document.documentElement

		const handleAttribute = (attr: Attribute) => {
			if (attr === 'class') {
				d.classList.remove(...attrs)
				if (name) d.classList.add(name)
			} else if (attr.startsWith('data-')) {
				if (name) {
					d.setAttribute(attr, name)
				} else {
					d.removeAttribute(attr)
				}
			}
		}

		if (Array.isArray(attribute)) attribute.forEach(handleAttribute)
		else handleAttribute(attribute)

		if (enableColorScheme) {
			const fallback = COLOR_SCHEMES.includes(defaultTheme)
				? defaultTheme
				: null
			const colorScheme = COLOR_SCHEMES.includes(resolved) ? resolved : fallback
			// @ts-ignore
			d.style.colorScheme = colorScheme
		}

		enable?.()
	}, [])

	// Set theme state and save to local storage
	const setTheme: React.Dispatch<React.SetStateAction<string>> =
		React.useCallback(
			(value) => {
				const newTheme =
					typeof value === 'function' ? value(theme as string) : value
				setThemeState(newTheme)

				// Save to storage
				try {
					localStorage.setItem(THEME_STORAGE_KEY, newTheme)
				} catch {
					// Unsupported
				}
			},
			[theme],
		)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const handleMediaQuery = React.useCallback(() => {
		if (theme === 'system' && enableSystem && !forcedTheme) {
			applyTheme('system')
		}
	}, [theme, forcedTheme])

	// Always listen to System preference
	React.useEffect(() => {
		const media = window.matchMedia(PREFERS_COLOR_SCHEME)

		// Intentionally use deprecated listener methods to support iOS & old browsers
		media.addListener(handleMediaQuery)
		handleMediaQuery()

		return () => media.removeListener(handleMediaQuery)
	}, [handleMediaQuery])

	// localStorage event handling, allow to sync theme changes between tabs
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		const handleStorage = (e: StorageEvent) => {
			if (e.key !== THEME_STORAGE_KEY) {
				return
			}

			// If default theme set, use it if localstorage === null (happens on local storage manual deletion)
			const theme = e.newValue || defaultTheme
			setTheme(theme)
		}

		window.addEventListener('storage', handleStorage)
		return () => window.removeEventListener('storage', handleStorage)
	}, [setTheme])

	// Whenever theme or forcedTheme changes, apply it
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		applyTheme(forcedTheme ?? theme)
	}, [forcedTheme, theme])

	/* Update theme-color meta tag
	 * when theme is updated */
	useEffect(() => {
		const color =
			theme === 'dark' ? THEME_COLOR_MAP.dark : THEME_COLOR_MAP.light
		const metaThemeColor = document.querySelector("meta[name='theme-color']")
		metaThemeColor?.setAttribute('content', color)
	}, [theme])

	const providerValue = React.useMemo(
		() => ({
			theme,
			setTheme,
			forcedTheme,
			themes: enableSystem ? [...themes, 'system'] : themes,
		}),
		[theme, setTheme, forcedTheme, enableSystem, themes],
	)

	return (
		<ThemeContext value={providerValue}>
			<ThemeScript
				{...{
					forcedTheme,
					attribute,
					enableSystem,
					enableColorScheme,
					defaultTheme,
					value,
					themes,
					nonce,
				}}
			/>
			{children}
		</ThemeContext>
	)
}

const ThemeScript = React.memo(
	({
		forcedTheme,
		attribute,
		enableSystem,
		enableColorScheme,
		defaultTheme,
		value,
		themes,
		nonce,
	}: Omit<ThemeProviderProps, 'children'> & { defaultTheme: string }) => {
		const scriptArgs = JSON.stringify([
			attribute,
			defaultTheme,
			forcedTheme,
			themes,
			value,
			enableSystem,
			enableColorScheme,
		]).slice(1, -1)

		return (
			<script
				suppressHydrationWarning={true}
				nonce={typeof window === 'undefined' ? nonce : ''}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Needed to inject script before hydration
				dangerouslySetInnerHTML={{
					__html: `(${script.toString()})(${scriptArgs})`,
				}}
			/>
		)
	},
)

// Helpers
const getTheme = (key: string, fallback: string): string | undefined => {
	if (typeof window === 'undefined') return undefined
	let theme: string | undefined
	try {
		theme = localStorage.getItem(key) || undefined
	} catch {
		// Unsupported
	}

	if (!theme) return fallback

	return theme
}

const disableAnimation = () => {
	const css = document.createElement('style')
	css.appendChild(
		document.createTextNode(
			'*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
		),
	)
	document.head.appendChild(css)

	return () => {
		// Force restyle
		;(() => window.getComputedStyle(document.body))()

		// Wait for next tick before removing
		setTimeout(() => {
			document.head.removeChild(css)
		}, 1)
	}
}

const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
	const event = e ?? window.matchMedia(PREFERS_COLOR_SCHEME)
	const isDark = event.matches
	const systemTheme = isDark ? 'dark' : 'light'
	return systemTheme
}

/*
  This file is adapted from next-themes to work with tanstack start.
  next-themes can be found at https://github.com/pacocoursey/next-themes under the MIT license.
*/

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const script: (...args: any[]) => void = (
	attribute,
	defaultTheme,
	forcedTheme,
	themes,
	value,
	enableSystem,
	enableColorScheme,
) => {
	const el = document.documentElement
	const isClass = attribute === 'class'
	const classes =
		isClass && value
			? themes.map((t: string | number) => value[t] || t)
			: themes

	function updateDOM(theme: string) {
		if (isClass) {
			el.classList.remove(...classes)
			el.classList.add(theme)
		} else {
			el.setAttribute(attribute, theme)
		}

		setColorScheme(theme)
	}

	function setColorScheme(theme: string) {
		if (enableColorScheme && COLOR_SCHEMES.includes(theme)) {
			el.style.colorScheme = theme
		}
	}

	function getSystemTheme() {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	}

	if (forcedTheme) {
		updateDOM(forcedTheme)
	} else {
		try {
			const themeName = localStorage.getItem(THEME_STORAGE_KEY) || defaultTheme
			const isSystem = enableSystem && themeName === 'system'
			const theme = isSystem ? getSystemTheme() : themeName
			updateDOM(theme)
		} catch {
			//
		}
	}
}
