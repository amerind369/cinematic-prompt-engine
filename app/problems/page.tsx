export default function ProblemsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 max-w-3xl">

      <h1 className="text-3xl font-bold mb-4">
        Common AI Image Problems
      </h1>

      <p className="mb-8 text-gray-700">
        Many AI-generated images look unrealistic because the prompt lacks structure.
        Issues with lighting, atmosphere and scene composition often lead to flat or artificial results.
        Understanding these problems can help you create better prompts.
      </p>

      <div className="space-y-6">

        <a href="/problems/ai-images-look-unrealistic" className="block p-4 bg-white rounded border hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Why AI Images Look Unrealistic</h2>
          <p className="text-gray-600">
            Flat scenes, weak lighting and missing atmosphere often cause unrealistic results.
          </p>
        </a>

        <a href="/problems/ai-lighting-looks-fake" className="block p-4 bg-white rounded border hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Why AI Lighting Looks Fake</h2>
          <p className="text-gray-600">
            Lighting direction and intensity are critical for realism in AI images.
          </p>
        </a>

        <a href="/problems/ai-scenes-look-flat" className="block p-4 bg-white rounded border hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Why AI Scenes Look Flat</h2>
          <p className="text-gray-600">
            Missing atmosphere, depth and environmental detail can make scenes look artificial.
          </p>
        </a>

        <div className="mt-12 p-6 bg-gray-100 rounded-lg">

<h3 className="text-lg font-bold mb-2">
Generate Your Own AI Prompt
</h3>

<p className="mb-4">
You can generate structured cinematic prompts instantly using the AI Prompt Builder. Simply describe your scene and the system will analyze it and construct a high-signal prompt.
</p>

<p className="mb-4 font-semibold">
The tool is currently free to use.
</p>

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
