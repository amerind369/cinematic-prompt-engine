export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 max-w-3xl">

      <h1 className="text-3xl font-bold mb-4">
        AI Prompts by Industry
      </h1>

      <p className="mb-8 text-gray-700">
        Different industries use AI prompts in different ways. 
        From cinematic scene creation to marketing visuals and concept art, 
        structured prompts help generate more consistent results.
      </p>

      <div className="space-y-6">

        <a href="/industries/filmmaking" className="block p-4 bg-white rounded border hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Filmmaking</h2>
          <p className="text-gray-600">
            Generate cinematic scenes, shot ideas and storyboard visuals.
          </p>
        </a>

        <a href="/industries/marketing" className="block p-4 bg-white rounded border hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Marketing</h2>
          <p className="text-gray-600">
            Create visual concepts for ads, campaigns and brand storytelling.
          </p>
        </a>

        <a href="/industries/gaming" className="block p-4 bg-white rounded border hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Gaming</h2>
          <p className="text-gray-600">
            Generate environments, characters and concept art for games.
          </p>
        </a>

        <a href="/industries/architecture" className="block p-4 bg-white rounded border hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Architecture</h2>
          <p className="text-gray-600">
            Explore spatial composition, light and atmosphere in architectural scenes.
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
