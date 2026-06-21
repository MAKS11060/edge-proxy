export const proxy = async (req: Request): Promise<Response> => {
  const _uri = new URL(req.url)
  if (!_uri.pathname.startsWith('/https://')) return Response.json('err')
  const uri = new URL(_uri.pathname.slice(1) + _uri.search)

  const headers = new Headers()
  for (const [k, v] of req.headers) {
    if (k.startsWith('x-')) headers.set(k.slice(2), v)
  }

  const res = await fetch(uri, {
    method: req.method,
    headers,
    body: req.body,
  })
  if (!res.ok) {
    console.error(Object.fromEntries(req.headers.entries()))
    console.error(Object.fromEntries(res.headers.entries()))
  }
  return res
}
