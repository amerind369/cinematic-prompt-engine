import OpenAI from "openai"
import { HANDBOOK_SYSTEM_PROMPT } from "@/lib/handbook"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(30, "24 h"),
})

const SYSTEM_PROMPT = `
IMPORTANT: You must return the final result as a JSON object.

${HANDBOOK_SYSTEM_PROMPT}

Important clarification:

Scene Type must describe the type of scene
(e.g. portrait, action scene, dialogue scene, cinematic moment).

Scene Type is NOT a prompt technique.

Prompt techniques must appear ONLY in the "techniques" field.

OUTPUT FORMAT (json):

{
  "analysis": {
    "subject": "",
    "environment": "",
    "lighting": "",
    "mood": ""
  },
  "scene_type": "",
  "techniques": [],
  "prompt": ""
}

LANGUAGE RULE:

The generated prompt must always be written in English,
even if the user input is written in another language.
`

export async function POST(req: Request) {
  try {

    const ip =
      req.headers.get("x-forwarded-for") ??
      req.headers.get("x-real-ip") ??
      "anonymous"

    const { success } = await ratelimit.limit(ip)

    if (!success) {
      return Response.json({
        error: "Rate limit exceeded. Maximum 30 prompts per 24 hours."
      }, { status: 429 })
    }

    const { scene } = await req.json()

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: scene
        }
      ],
      response_format: { type: "json_object" }
    })

    const content = response.choices[0].message.content

    if (!content) {
      throw new Error("Empty response from model")
    }

    let parsed

    try {
      parsed = JSON.parse(content)
    } catch (parseError) {

      return Response.json({
        error: "Invalid JSON returned by model",
        raw: content
      })
    }

    return Response.json(parsed)

  } catch (error) {

    return Response.json({
      error: "API error",
      details: String(error)
    })

  }
}
