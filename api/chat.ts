export const config = { runtime: 'edge' }

const UPSTREAM = 'https://api.kie.ai/gemini-3.1-pro/v1/chat/completions'

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const apiKey = process.env.KIE_API_KEY
  if (!apiKey) {
    return new Response('Server misconfigured', { status: 500 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  const upstream = await fetch(UPSTREAM, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  })

  // Pipe upstream stream thẳng về client — key không bao giờ ra browser
  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'Content-Type': upstream.headers.get('content-type') ?? 'text/event-stream',
    },
  })
}
