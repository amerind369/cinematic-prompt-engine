export default function StylesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 max-w-3xl">

      <h1 className="text-3xl font-bold mb-4">
        AI Prompt Styles
      </h1>

      <p className="mb-8 text-gray-700">
        Different visual styles require different scene elements, lighting conditions and environments.
        Understanding these elements helps you create better prompts for AI image and video generation.
      </p>

      <div className="space-y-6">

        <a href="/styles/cyberpunk-prompts" className="block p-4 bg-white rounded border hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Cyberpunk Prompts</h2>
          <p className="text-gray-600">
            Neon lighting, rain-soaked streets and futuristic cities.
          </p>
        </a>

        <a href="/styles/fantasy-prompts" className="block p-4 bg-white rounded border hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Fantasy Prompts</h2>
          <p className="text-gray-600">
            Epic landscapes, mythical creatures and cinematic fantasy scenes.
          </p>
        </a>

        <a href="/styles/cinematic-prompts" className="block p-4 bg-white rounded border hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Cinematic Prompts</h2>
          <p className="text-gray-600">
            Film-like scenes with controlled lighting, camera and atmosphere.
          </p>
        </a>

      </div>

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
