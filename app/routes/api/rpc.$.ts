import { createAPIFileRoute } from '@tanstack/react-start/api'

import { RPC_PATH_PREFIX } from '~/constants/rpc'
import { serverHandler } from '~/server/handler'

async function handle({ request }: { request: Request }) {
	const { response } = await serverHandler.handle(request, {
		context: {}, // Provide initial context if needed
		prefix: RPC_PATH_PREFIX,
	})

	return response ?? new Response('Not Found', { status: 404 })
}

export const APIRoute = createAPIFileRoute(`${RPC_PATH_PREFIX}/$`)({
	DELETE: handle,
	GET: handle,
	HEAD: handle,
	PATCH: handle,
	POST: handle,
	PUT: handle,
})
