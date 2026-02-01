import { joinURL } from 'ufo'

export default defineEventHandler(async event => {
  const proxyUrl = useRuntimeConfig().apiDomain
  const target = joinURL(proxyUrl, event.path)

  return proxyRequest(event, target)
})
