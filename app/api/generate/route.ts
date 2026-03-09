import OpenAI from "openai"
import { HANDBOOK_SYSTEM_PROMPT } from "@/lib/handbook"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const SYSTEM_PROMPT = `
${HANDBOOK_SYSTEM_PROMPT}

Important clarification:

Scene Type must describe the type of scene
(e.g. portrait, action scene, dialogue scene, cinematic moment).

Scene Type is NOT a prompt technique.

Prompt techniques must appear ONLY in the "techniques" field.
`

export async function POST(req: Request) {

  try {

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

    console.log("MODEL RESPONSE:", content)

    const parsed = JSON.parse(content!)

    return Response.json(parsed)

  } catch (error) {

    console.error("API ERROR:", error)

    return Response.json({
      error: "API error",
      details: String(error)
    })

  }

}