export default {
  async fetch(req: Request): Promise<Response> {
    const _uri = new URL(req.url)
    if (!_uri.pathname.startsWith('/https://')) return Response.json('err')
    const uri = new URL(_uri.pathname.slice(1) + _uri.search)

    return await fetch(uri, req)
  },
}
