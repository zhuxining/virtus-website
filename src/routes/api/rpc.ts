import { createServerFileRoute } from '@tanstack/react-start/server'

import { RPC_PATH_PREFIX } from '@/constants/rpc'

import { ServerRoute as BaseAPIRoute } from './rpc.$'

export const ServerRoute = createServerFileRoute(RPC_PATH_PREFIX).methods(
	BaseAPIRoute.methods,
)
