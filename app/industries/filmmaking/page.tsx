export default function FilmmakingPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 max-w-3xl">

      <a href="/industries" className="text-blue-600 underline">
        ← Back to Industries
      </a>

      <h1 className="text-3xl font-bold mt-4 mb-4">
        AI Prompts for Filmmaking
      </h1>

      <p className="mb-6 text-gray-700">
        AI image generation can be used by filmmakers to explore scenes,
        visualize shots and experiment with cinematic composition before
        production begins.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Storyboard Visualization
      </h2>

      <p className="mb-4 text-gray-700">
        Directors and cinematographers can use AI prompts to quickly visualize
        potential shots and scene compositions.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Shot Planning
      </h2>

      <p className="mb-4 text-gray-700">
        AI-generated scenes can help explore camera angles, lighting
        conditions and visual mood before filming.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Cinematic Scene Exploration
      </h2>

      <p className="mb-6 text-gray-700">
        Structured prompts allow filmmakers to experiment with environments,
        lighting and atmosphere to discover new visual ideas.
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
