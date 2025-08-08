
import type { NextApiRequest, NextApiResponse } from 'next'

// Basic AI coach endpoint — this is a stub. If you set OPENAI_API_KEY in your server env,
// you can call OpenAI here to generate personalized messages.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body || {}
  if (!prompt) return res.status(400).json({ error: 'prompt required' })

  // If you have OPENAI_API_KEY, you can implement an actual call here.
  // For now, return a safe mocked response:
  const reply = {
    tone: 'gentle',
    message: `Assalamu alaikum — I see you're working on: ${prompt}. Keep going! Start with a dua, break your goal into 10-minute chunks, and make dua for consistency.`
  }
  res.status(200).json({ reply })
}
