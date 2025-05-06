import { createORPCReactQueryUtils } from '@orpc/react-query'

import { client } from './orpc'

export const orpcReactQuery = createORPCReactQueryUtils(client)
