import {proxy} from './proxy.ts'

Deno.serve(async (req) => {
  return await proxy(req)
})
