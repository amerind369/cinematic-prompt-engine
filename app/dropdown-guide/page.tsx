export default function DropdownGuide() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        Dropdown Guide for Cinematic Prompts
      </h1>

      <p className="mb-6 text-gray-700">
        The dropdown options in the Cinematic Prompt Engine are designed to help guide scene interpretation. They act as optional hints that influence how your scene is understood, but they never override your original description.
      </p>

      {/* CTA TOP */}

      <div className="mb-10">
        <a
          href="/"
          className="px-6 py-3 bg-black text-white rounded-lg inline-block"
        >
          Try the AI Prompt Builder →
        </a>
      </div>

      {/* Scene Focus */}

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Scene Focus</h2>
        <p className="mb-3 text-gray-700">
          Defines what the scene should emphasize.
        </p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Character focused – emphasizes a person or subject</li>
          <li>Action focused – highlights movement or activity</li>
          <li>Object focused – focuses on a specific item</li>
          <li>Environment focused – emphasizes surroundings</li>
          <li>Balanced scene – no strong emphasis</li>
        </ul>
        <p className="mt-3 text-gray-600">
          Example: "A warrior in battle" + Character focused → more attention on the warrior.
        </p>
      </section>

      {/* Camera */}

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Camera</h2>
        <p className="mb-3 text-gray-700">
          Controls how the scene is framed.
        </p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Close-up – tight framing on subject</li>
          <li>Medium shot – balanced framing</li>
          <li>Wide shot – shows full scene</li>
          <li>Overhead view – top-down perspective</li>
          <li>POV shot – first-person view</li>
        </ul>
        <p className="mt-3 text-gray-600">
          Example: "A detective in an alley" + Wide shot → shows full environment.
        </p>
      </section>

      {/* Lighting */}

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Lighting</h2>
        <p className="mb-3 text-gray-700">
          Defines the light style and visual tone.
        </p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Soft lighting – gentle and diffused</li>
          <li>Dramatic lighting – strong contrast and shadows</li>
          <li>Low light – dark scene</li>
          <li>Backlit – light behind subject</li>
          <li>Neon lighting – colorful artificial lights</li>
          <li>Storm lighting – intense and chaotic lighting</li>
        </ul>
        <p className="mt-3 text-gray-600">
          Example: "A city street at night" + Neon lighting → cyberpunk feel.
        </p>
      </section>

      {/* Environment */}

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Environment</h2>
        <p className="mb-3 text-gray-700">
          Suggests the type of setting.
        </p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Urban – city environment</li>
          <li>Nature – outdoor natural setting</li>
          <li>Indoor – interior scene</li>
          <li>Industrial – factories or mechanical spaces</li>
          <li>Fantasy world – fictional environments</li>
          <li>Minimal environment – simple or empty space</li>
        </ul>
        <p className="mt-3 text-gray-600">
          Example: "A warrior" + Fantasy world → medieval or magical setting.
        </p>
      </section>

      {/* Atmosphere */}

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Atmosphere</h2>
        <p className="mb-3 text-gray-700">
          Defines the emotional tone.
        </p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Calm – peaceful and relaxed</li>
          <li>Tense – suspenseful</li>
          <li>Epic – grand and powerful</li>
          <li>Dark – moody and heavy</li>
          <li>Mysterious – unknown or intriguing</li>
          <li>Peaceful – soft and tranquil</li>
        </ul>
        <p className="mt-3 text-gray-600">
          Example: "A forest" + Mysterious → fog, shadows, unknown elements.
        </p>
      </section>

      {/* Style */}

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Style</h2>
        <p className="mb-3 text-gray-700">
          Defines how the scene is visually rendered.
        </p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Photorealistic – real-world look</li>
          <li>Cinematic – film-like composition</li>
          <li>Anime – stylized animation</li>
          <li>Cartoon – simplified visual style</li>
          <li>Illustration – drawn or painted look</li>
          <li>Concept art – pre-production style</li>
        </ul>
        <p className="mt-3 text-gray-600">
          Example: "A dragon flying" + Photorealistic → realistic creature instead of stylized.
        </p>
      </section>

      {/* CTA BOTTOM */}

      <div className="mt-10">
        <a
          href="/"
          className="px-6 py-3 bg-black text-white rounded-lg inline-block"
        >
          Try the AI Prompt Builder →
        </a>
      </div>

    </main>
  )
}
