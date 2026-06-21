import {proxy} from './proxy.ts'

export default {
  async fetch(req, env, ctx) {
    return await proxy(req)

    // const headers = new Headers()
    // for (const [k, v] of req.headers) {
    //   if (k.startsWith('x-')) headers.set(k.slice(2), v)
    // }

    // const res = await fetch(uri, {
    //   method: req.method,
    //   headers,
    //   body: req.body,
    //   signal: req.signal
    // })

    // return res
  },
} satisfies ExportedHandler<Env>
