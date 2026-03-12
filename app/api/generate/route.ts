import OpenAI from "openai"
import { HANDBOOK_SYSTEM_PROMPT } from "@/lib/handbook"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
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

    if (!content) {
      throw new Error("Empty response from model")
    }

    let parsed

    try {
      parsed = JSON.parse(content)
    } catch (parseError) {

      console.error("JSON PARSE ERROR:", parseError)
      console.error("RAW MODEL OUTPUT:", content)

      return Response.json({
        error: "Invalid JSON returned by model",
        raw: content
      })
    }

    return Response.json(parsed)

  } catch (error) {

    console.error("API ERROR:", error)

    return Response.json({
      error: "API error",
      details: String(error)
    })

  }
}
