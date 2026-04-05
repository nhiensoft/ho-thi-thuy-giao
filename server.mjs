import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import 'dotenv/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(express.json())

const KIE_API_KEY = process.env.KIE_API_KEY
const UPSTREAM = 'https://api.kie.ai/gemini-3.1-pro/v1/chat/completions'

app.post('/api/chat', async (req, res) => {
  if (!KIE_API_KEY) {
    return res.status(500).json({ error: 'Server misconfigured: missing API key' })
  }

  let upstream
  try {
    upstream = await fetch(UPSTREAM, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${KIE_API_KEY}`,
      },
      body: JSON.stringify(req.body),
    })
  } catch {
    return res.status(502).json({ error: 'Failed to reach upstream API' })
  }

  res.status(upstream.status)

  const ct = upstream.headers.get('content-type')
  if (ct) res.setHeader('Content-Type', ct)

  if (!upstream.body) return res.end()

  // Pipe SSE stream directly to client — key never touches the browser
  const reader = upstream.body.getReader()
  const pump = async () => {
    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) { res.end(); break }
        res.write(value)
      }
    } catch {
      res.end()
    }
  }
  pump()
})

// Serve built frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))
  app.get('*splat', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
}

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Proxy server → http://localhost:${PORT}`)
})
