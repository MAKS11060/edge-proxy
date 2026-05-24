export default {
  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url)

    const targetHost = req.headers.get('x-proxy-host') ?? url.searchParams.get('proxy')
    if (!targetHost) return Response.json({status: 'online'})

    try {
      url.host = targetHost

      console.log('fetch to', url.toString())
      return await fetch(url, req.clone() as Request)
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
