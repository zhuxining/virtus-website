import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import type { RouterClient } from '@orpc/server'

import { RPC_PATH_PREFIX } from '~/constants'
import type { orpcRouter } from '~/server/router'

declare global {
	// eslint-disable-next-line
	var $client: RouterClient<typeof orpcRouter> | undefined
}

const link = new RPCLink({
	url: () => {
		if (typeof window === 'undefined') {
			throw new Error('RPCLink is not allowed on the server side.')
		}

		return new URL(RPC_PATH_PREFIX, window.location.href)
	},
})

/**
 * Fallback to client-side client if server-side client is not available.
 */
export const client: RouterClient<typeof orpcRouter> =
	globalThis.$client ?? createORPCClient(link)
