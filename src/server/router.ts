'server only'

import { RPCHandler } from '@orpc/server/fetch'
import { CORSPlugin } from '@orpc/server/plugins'

import { usersRouter } from './routes/users'

export const orpcRouter = {
	users: usersRouter,
}

export const orpcHandler = new RPCHandler(orpcRouter, {
	plugins: [new CORSPlugin()],
})
