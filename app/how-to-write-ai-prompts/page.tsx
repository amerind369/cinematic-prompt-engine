export default function HowToWriteAIPrompts() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-6">
        How to Write AI Prompts for Images and Video
      </h1>

      <p className="mb-6 max-w-2xl">
        Writing effective AI prompts is the key to getting better results
        from image and video generation models. A well structured prompt
        helps the AI understand the subject, environment, lighting and
        overall mood of the scene.
      </p>

      <p className="mb-10 max-w-2xl">
        Instead of writing a simple sentence, strong prompts describe the
        visual structure of a scene. This guide explains the main components
        of a good AI prompt and how to improve your results when generating
        images or videos with AI tools.
      </p>


      <h2 className="text-xl font-semibold mt-10 mb-2">
        The Structure of a Strong AI Prompt
      </h2>

      <p className="mb-6 max-w-2xl">
        Well designed prompts usually contain several visual components that
        guide the AI model. These components describe the visual structure of
        the scene and help the AI generate more consistent results.
      </p>

      <ul className="list-disc ml-6 mb-8 max-w-2xl">
        <li><b>Subject</b> – the main focus of the scene</li>
        <li><b>Environment</b> – where the scene takes place</li>
        <li><b>Camera</b> – how the scene is framed</li>
        <li><b>Lighting</b> – the direction and quality of light</li>
        <li><b>Atmosphere</b> – the mood or visual tone</li>
        <li><b>Style</b> – cinematic, realistic, anime, illustration, etc.</li>
      </ul>

      <div className="bg-white p-4 rounded border mb-10 max-w-2xl">
        Example structure:<br/><br/>
        <b>Subject → Environment → Camera → Lighting → Atmosphere → Style</b>
      </div>


      <h2 className="text-xl font-semibold mt-10 mb-2">
        Simple Prompt vs Structured Prompt
      </h2>

      <p className="mb-4 max-w-2xl">
        Beginners often write very short prompts that contain little visual
        information.
      </p>

      <div className="bg-white p-4 rounded border mb-6 max-w-2xl">
        Simple prompt:<br/><br/>
        <b>a detective sitting in a dark apartment</b>
      </div>

      <p className="mb-4 max-w-2xl">
        A structured prompt provides more visual signals to the AI model.
      </p>

      <div className="bg-white p-4 rounded border mb-10 max-w-2xl">
        Structured prompt:<br/><br/>
        <b>
        A tired detective sitting in a dim apartment while rain hits the
        window behind him, cigarette smoke drifting through the air,
        cinematic lighting, dark noir atmosphere.
        </b>
      </div>


      <h2 className="text-xl font-semibold mt-10 mb-2">
        Why Structured Prompts Work Better
      </h2>

      <p className="mb-6 max-w-2xl">
        AI models respond best to prompts that contain clear visual signals.
        Instead of adding random descriptive words, it is more effective to
        describe the environment, lighting and camera perspective of a scene.
      </p>

      <p className="mb-10 max-w-2xl">
        This approach creates prompts with <b>high signal density</b>,
        meaning every word contributes useful visual information that helps
        the model generate a more coherent image or video.
      </p>


      <h2 className="text-xl font-semibold mt-10 mb-2">
        Keep Prompts Clear and Concise
      </h2>

      <p className="mb-4 max-w-2xl">
        A common mistake is adding too many filler words that do not improve
        the result.
      </p>

      <div className="bg-white p-4 rounded border mb-6 max-w-2xl">
        Example of filler words:<br/><br/>
        <b>epic masterpiece ultra amazing cinematic scene</b>
      </div>

      <p className="mb-10 max-w-2xl">
        A better strategy is to keep prompts concise while preserving the
        important visual signals. Removing unnecessary words helps AI models
        focus on the most important elements of the scene.
      </p>


      <h2 className="text-xl font-semibold mt-10 mb-2">
        Try the AI Prompt Builder
      </h2>

      <p className="mb-6 max-w-2xl">
        If you want to generate structured prompts automatically, you can
        use the AI Prompt Builder. The system analyzes your scene description,
        identifies the key visual elements, and constructs a structured
        prompt optimized for AI image and video generation.
      </p>

      <a
        href="/"
        className="text-blue-600 underline"
      >
        Try the AI Prompt Builder →
      </a>

    </main>
  )
}
