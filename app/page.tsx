"use client"

import { useState } from "react"

export default function Home() {

  const [scene, setScene] = useState("")
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const [showHints, setShowHints] = useState(false)

  const [hints, setHints] = useState({
    focus: "",
    camera: "",
    lighting: "",
    environment: "",
    atmosphere: "",
    style: ""
  })

  const MAX_CHARS = 500

  const generatePrompt = async () => {

    if (!scene) return

    setLoading(true)

    const filteredHints = Object.fromEntries(
      Object.entries(hints).filter(([_, value]) => value !== "")
    )

    const payload: any = { scene }

    if (Object.keys(filteredHints).length > 0) {
      payload.hints = filteredHints
    }

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
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

  const updateHint = (key: string, value: string) => {
    setHints((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const toggleHints = (checked: boolean) => {

    setShowHints(checked)

    if (!checked) {
      setHints({
        focus: "",
        camera: "",
        lighting: "",
        environment: "",
        atmosphere: "",
        style: ""
      })
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <header className="flex justify-between items-center mb-10">

        <a href="/" className="text-xl font-bold">
          Cinematic Prompt Engine
        </a>

        <nav className="flex gap-6 text-blue-600 underline">
          <a href="/examples">Examples</a>
          <a href="/how-to-write-ai-prompts">Guide</a>
          <a href="/styles">Styles</a>
          <a href="/dropdown-guide">Dropdown Guide</a>
          <a href="/industries">Industries</a>
          <a href="/problems">Problems</a>
        </nav>

      </header>

      <h1 className="text-3xl font-bold mb-2">
        AI Prompt Builder for Images & Video
      </h1>

      <p className="mb-6 text-gray-700">
        Analyze your scene, select prompt engineering techniques, and generate structured prompts optimized for AI image and video models.
      </p>

      <p className="mb-4 text-green-700 font-semibold">
        The AI Prompt Builder is currently free to use. Generate cinematic prompts while the tool remains publicly available.
      </p>

      {/* Scene Input */}

      <div className="mb-2">
        <textarea
          className="w-full p-4 border rounded-lg"
          rows={4}
          maxLength={MAX_CHARS}
          placeholder="Example: A detective standing in a rainy neon-lit alley..."
          value={scene}
          onChange={(e) => setScene(e.target.value)}
        />
      </div>

      <div className="text-sm text-gray-500 mb-4">
        {scene.length} / {MAX_CHARS} characters
      </div>

      {/* Checkbox */}

      <div className="mb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showHints}
            onChange={(e) => toggleHints(e.target.checked)}
          />
          Add scene details (optional)
        </label>
      </div>

      {showHints && (

        <div className="mb-6">

          <p className="text-sm text-gray-600 mb-3">
            Optional scene hints. These help the engine interpret your scene but do not override your description.
          </p>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="block text-sm mb-1">Scene Focus</label>
              <select
                className="w-full p-2 border rounded"
                value={hints.focus}
                onChange={(e) => updateHint("focus", e.target.value)}
              >
                <option value="">Default / None</option>
                <option value="character focused">Character focused</option>
                <option value="action focused">Action focused</option>
                <option value="object focused">Object focused</option>
                <option value="environment focused">Environment focused</option>
                <option value="balanced scene">Balanced scene</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Camera</label>
              <select
                className="w-full p-2 border rounded"
                value={hints.camera}
                onChange={(e) => updateHint("camera", e.target.value)}
              >
                <option value="">Default / None</option>
                <option value="close-up">Close-up</option>
                <option value="medium shot">Medium shot</option>
                <option value="wide shot">Wide shot</option>
                <option value="overhead view">Overhead view</option>
                <option value="POV shot">POV shot</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Lighting</label>
              <select
                className="w-full p-2 border rounded"
                value={hints.lighting}
                onChange={(e) => updateHint("lighting", e.target.value)}
              >
                <option value="">Default / None</option>
                <option value="soft lighting">Soft lighting</option>
                <option value="dramatic lighting">Dramatic lighting</option>
                <option value="low light">Low light</option>
                <option value="backlit">Backlit</option>
                <option value="neon lighting">Neon lighting</option>
                <option value="storm lighting">Storm lighting</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Environment</label>
              <select
                className="w-full p-2 border rounded"
                value={hints.environment}
                onChange={(e) => updateHint("environment", e.target.value)}
              >
                <option value="">Default / None</option>
                <option value="urban">Urban</option>
                <option value="nature">Nature</option>
                <option value="indoor">Indoor</option>
                <option value="industrial">Industrial</option>
                <option value="fantasy world">Fantasy world</option>
                <option value="minimal environment">Minimal environment</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Atmosphere</label>
              <select
                className="w-full p-2 border rounded"
                value={hints.atmosphere}
                onChange={(e) => updateHint("atmosphere", e.target.value)}
              >
                <option value="">Default / None</option>
                <option value="calm">Calm</option>
                <option value="tense">Tense</option>
                <option value="epic">Epic</option>
                <option value="dark">Dark</option>
                <option value="mysterious">Mysterious</option>
                <option value="peaceful">Peaceful</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Style</label>
              <select
                className="w-full p-2 border rounded"
                value={hints.style}
                onChange={(e) => updateHint("style", e.target.value)}
              >
                <option value="">Default / None</option>
                <option value="photorealistic">Photorealistic</option>
                <option value="cinematic">Cinematic</option>
                <option value="anime">Anime</option>
                <option value="cartoon">Cartoon</option>
                <option value="illustration">Illustration</option>
                <option value="concept art">Concept art</option>
              </select>
            </div>

          </div>

        </div>

      )}

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

      {/* Internal Links Section */}

<div className="mt-20 max-w-3xl">

  <h2 className="text-2xl font-bold mb-4">
    Explore More
  </h2>

  <p className="mb-6 text-gray-700">
  Learn how to create better prompts in our{" "}
  <a href="/how-to-write-ai-prompts" className="text-blue-600 underline">
    detailed guide
  </a>
  , explore{" "}
  <a href="/examples" className="text-blue-600 underline">
    real examples
  </a>
  , and discover different styles.
</p>

  <ul className="space-y-3 text-blue-600 underline">

    <li>
      <a href="/how-to-write-ai-prompts">
        How to write AI prompts
      </a>
    </li>

    <li>
      <a href="/examples">
        Prompt examples
      </a>
    </li>

    <li>
      <a href="/styles">
        Explore prompt styles
      </a>
    </li>

    <li>
      <a href="/industries">
        Use cases by industry
      </a>
    </li>

    <li>
      <a href="/problems">
        Solve common AI image problems
      </a>
    </li>

  </ul>

</div>

      {/* SEO Content Section */}

      <div className="mt-20 max-w-3xl">

        <h2 className="text-2xl font-bold mb-4">
          What is an AI Prompt Builder?
        </h2>

        <p className="mb-6">
          An AI prompt builder transforms a simple scene description into a structured prompt that AI image and video generation models can interpret more accurately.
        </p>

        <p className="mb-10">
          Clear prompt structure improves consistency and quality in generated images and videos.
        </p>

      </div>

    </main>
  )
}
