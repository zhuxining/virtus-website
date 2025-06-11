import { createServerFileRoute } from '@tanstack/react-start/server'

import { RPC_PATH_PREFIX } from '@/constants/rpc'

import { APIRoute as BaseAPIRoute } from './rpc.$'

export const APIRoute = createServerFileRoute(RPC_PATH_PREFIX)(
	BaseAPIRoute.methods,
)
