'server only'

import { RPCHandler } from '@orpc/server/fetch'
import { CORSPlugin } from '@orpc/server/plugins'

import { orpcRouter } from './router'

export const orpcHandler = new RPCHandler(orpcRouter, {
	plugins: [new CORSPlugin()],
})
