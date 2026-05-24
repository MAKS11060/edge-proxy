export default {
  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url)

    // const targetHost = req.headers.get('x-proxy-host') ?? url.searchParams.get('proxy')
    // if (!targetHost) return Response.json({status: 'online'})

    try {
      const t = new URL(`https://maks11060.keenetic.link${url.pathname + url.search}`)
      console.log('fetch to', t.toString())
      return await fetch(t, req.clone() as Request)
    } catch (e) {
      console.error(e)
      return Response.json({error: 'fetch error'}, {status: 400})
    }
  },
}

// export default {
//   async fetch(req: Request): Promise<Response> {
//     const _uri = new URL(req.url)
//     console.log(_uri.toString())

//     if (!_uri.pathname.startsWith('/https:/')) return Response.json('err')
//     const uri = new URL(_uri.pathname.slice(1) + _uri.search)

//     return await fetch(uri, req)
//   },
// }
