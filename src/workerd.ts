export default {
  async fetch(req, env, ctx) {
    const _uri = new URL(req.url)
    if (!_uri.pathname.startsWith('/https://')) return Response.json('err')
    const uri = new URL(_uri.pathname.slice(1) + _uri.search)

    const res = await fetch(uri, req)
    console.dir(res)

    return res

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
