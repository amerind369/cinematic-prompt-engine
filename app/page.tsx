"use client"

import { useState } from "react"

export default function Home() {

  const [scene, setScene] = useState("")
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const generatePrompt = async () => {

    if (!scene) return

    setLoading(true)

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ scene }),
    })

    const data = await res.json()

    setResult(data)

    setLoading(false)
  }

  const copyPrompt = () => {
    if (!result?.prompt) return

    navigator.clipboard.writeText(result.prompt)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-6">
        Cinematic Prompt Engine
      </h1>

      {/* Scene Input */}

      <div className="mb-6">
        <textarea
          className="w-full p-4 border rounded-lg"
          rows={4}
          placeholder="Describe your scene..."
          value={scene}
          onChange={(e) => setScene(e.target.value)}
        />
      </div>

      {/* Example Buttons */}

      <div className="flex gap-3 mb-6">

        <button
          onClick={() =>
            setScene(
              "A tired detective sitting in a dim apartment while rain hits the window behind him."
            )
          }
          className="px-3 py-2 bg-gray-200 rounded"
        >
          Noir Detective
        </button>

        <button
          onClick={() =>
            setScene(
              "A neon-lit cyberpunk street at night with rain reflecting colorful lights."
            )
          }
          className="px-3 py-2 bg-gray-200 rounded"
        >
          Cyberpunk Street
        </button>

        <button
          onClick={() =>
            setScene(
              "A medieval tavern filled with travelers, warm candlelight and wooden tables."
            )
          }
          className="px-3 py-2 bg-gray-200 rounded"
        >
          Medieval Tavern
        </button>

      </div>

      {/* Generate Button */}

      <button
        onClick={generatePrompt}
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded-lg mb-10"
      >
        {loading ? "Generating..." : "Generate Prompt"}
      </button>

      {/* Result Section */}

      {result && (
        <div className="grid grid-cols-2 gap-10">

          <div>

            <h2 className="text-xl font-semibold mb-3">Scene Analysis</h2>

            <p><b>Subject:</b> {result.analysis?.subject}</p>
            <p><b>Environment:</b> {result.analysis?.environment}</p>
            <p><b>Lighting:</b> {result.analysis?.lighting}</p>
            <p><b>Mood:</b> {result.analysis?.mood}</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Scene Type</h2>
            <p>{result.scene_type}</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Selected Techniques</h2>

            <ul className="list-disc ml-5">
              {result.techniques?.map((t: string, i: number) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

          </div>

          <div>

            <h2 className="text-xl font-semibold mb-3">Generated Prompt</h2>

            <div className="bg-white p-4 rounded border">
              {result.prompt}
            </div>

            <button
              onClick={copyPrompt}
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
            >
              {copied ? "Copied!" : "Copy Prompt"}
            </button>

          </div>

        </div>
      )}

    </main>
  )
}