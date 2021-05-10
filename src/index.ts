import type { Plugin } from 'vite'
import type { UserOptions } from './lib/options'
import { sleep } from './lib/utils'
import { name } from '../package.json'

export default function sleepPlugin(userOptions: UserOptions = {}): Plugin {
  const options = {
    ...userOptions,
  }
  let firstStart = true
  return {
    name,
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use(async (req, __, next) => {
        // if not html, next it.
        // @ts-expect-error
        if (!req.url.endsWith('.html') && req.url !== '/') {
          return next()
        }
        if (firstStart) {
          await sleep(options.devServerStartDelay || 20000)
          firstStart = false
        }
        next()
      })
    },
    async load() {
      await sleep(options.hmrDelay || 2000)
      return null
    },
  }
}
