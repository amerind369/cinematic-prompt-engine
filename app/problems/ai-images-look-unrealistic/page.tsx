export default function UnrealisticImagesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 max-w-3xl">

      <a href="/problems" className="text-blue-600 underline">
        ← Back to Problems
      </a>

      <h1 className="text-3xl font-bold mt-4 mb-4">
        Why AI Images Look Unrealistic
      </h1>

      <p className="mb-6 text-gray-700">
        AI-generated images often look unrealistic when the prompt lacks
        clear structure. Missing information about environment, lighting
        and atmosphere can lead to flat or artificial scenes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Lack of Scene Structure
      </h2>

      <p className="mb-4 text-gray-700">
        Many prompts only describe a subject without defining the
        environment or lighting conditions. AI models rely heavily
        on these visual signals.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Weak Lighting
      </h2>

      <p className="mb-4 text-gray-700">
        Lighting direction and intensity play a major role in realism.
        Without clear lighting cues, scenes often appear flat.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Missing Atmosphere
      </h2>

      <p className="mb-6 text-gray-700">
        Elements like fog, rain, dust or volumetric light add depth
        to images. Without them, scenes may look artificial.
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
