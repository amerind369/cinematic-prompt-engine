export default function FakeLightingPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 max-w-3xl">

      <a href="/problems" className="text-blue-600 underline">
        ← Back to Problems
      </a>

      <h1 className="text-3xl font-bold mt-4 mb-4">
        Why AI Lighting Looks Fake
      </h1>

      <p className="mb-6 text-gray-700">
        Lighting is one of the most important elements for realism in
        AI-generated images. When lighting is unclear or inconsistent,
        scenes often appear artificial.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Undefined Light Source
      </h2>

      <p className="mb-4 text-gray-700">
        Many prompts do not specify where the light is coming from.
        Without a clear light direction, AI models may produce flat
        or confusing lighting.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Lack of Contrast
      </h2>

      <p className="mb-4 text-gray-700">
        Strong lighting contrast helps define shapes and depth.
        Weak lighting often leads to dull and unrealistic images.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Missing Environmental Interaction
      </h2>

      <p className="mb-6 text-gray-700">
        Realistic lighting interacts with the environment through
        reflections, shadows and atmosphere. Without these cues,
        scenes may look unnatural.
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
