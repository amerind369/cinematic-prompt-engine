export default function GamingPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 max-w-3xl">

      <a href="/industries" className="text-blue-600 underline">
        ← Back to Industries
      </a>

      <h1 className="text-3xl font-bold mt-4 mb-4">
        AI Prompts for Game Development
      </h1>

      <p className="mb-6 text-gray-700">
        Game developers often use AI image generation to explore environments,
        characters and concept art during early development stages.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Environment Concepts
      </h2>

      <p className="mb-4 text-gray-700">
        AI prompts can generate environments such as futuristic cities,
        fantasy landscapes or abandoned worlds for inspiration.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Character Exploration
      </h2>

      <p className="mb-4 text-gray-700">
        Developers can experiment with character appearance, clothing
        and mood before moving into full character design.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Visual Mood
      </h2>

      <p className="mb-6 text-gray-700">
        Lighting, atmosphere and scene composition help define the visual
        identity of a game world.
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
