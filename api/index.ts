export default {
  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url)
    let targetPath = url.pathname

    if (targetPath === '/') {
      return Response.json({status: 'online', message: 'Proxy is running.'})
    }

    if (targetPath.startsWith('/https:/') && !targetPath.startsWith('/https://')) {
      targetPath = '/https://' + targetPath.slice(8)
    }

    if (!targetPath.startsWith('/https://')) {
      return Response.json('error', {status: 400})
    }

    const cleanUrl = targetPath.slice(1) + url.search

    try {
      const targetUri = new URL(cleanUrl)

      return await fetch(targetUri, req)
    } catch (e) {
      return Response.json({error: 'Невалидный целевой URL'}, {status: 400})
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
