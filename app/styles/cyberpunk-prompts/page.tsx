export default function CyberpunkPromptsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 max-w-3xl">

      <a href="/styles" className="text-blue-600 underline">
        ← Back to Styles
      </a>

      <h1 className="text-3xl font-bold mt-4 mb-4">
        Cyberpunk AI Prompts
      </h1>

      <p className="mb-6 text-gray-700">
        Cyberpunk scenes combine futuristic cities, neon lighting and atmospheric environments.
        The key to generating strong cyberpunk images with AI is structuring the scene clearly.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Environment
      </h2>

      <p className="mb-4 text-gray-700">
        Cyberpunk environments usually include dense futuristic cities, narrow alleys,
        holographic advertisements and reflective wet streets.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Lighting
      </h2>

      <p className="mb-4 text-gray-700">
        Neon lighting is a defining element of cyberpunk visuals.
        Colored reflections and strong light contrasts create the signature look.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Atmosphere
      </h2>

      <p className="mb-6 text-gray-700">
        Rain, fog and dense urban atmosphere help create depth and cinematic mood.
      </p>

      <div className="mt-10">
        <a
          href="/"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Try the AI Prompt Builder →
        </a>
      </div>

    </main>
  )
}
