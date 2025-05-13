import { createServerFn } from '@tanstack/react-start'
import { getCookie, setCookie } from '@tanstack/react-start/server'

import { UI_THEME_STORAGE_KEY } from '~/constants'
import { DEFAULT_THEME, type Theme } from '~/contexts/theme-context'

export const getThemeServerFn = createServerFn().handler(() => {
	return (getCookie(UI_THEME_STORAGE_KEY) || DEFAULT_THEME) as Theme
})

export const setThemeServerFn = createServerFn({ method: 'POST' })
	.validator((data: unknown) => {
		return data as Theme
	})
	.handler(({ data }) => {
		setCookie(UI_THEME_STORAGE_KEY, data)
	})
