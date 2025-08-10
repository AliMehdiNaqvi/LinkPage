import React from 'react'

const Value = () => {
  return (
    <div>
      <section className="w-full bg-white text-gray-800">
  {/* Segment 1 – The Calling */}
  <div className="bg-gradient-to-br from-yellow-200 to-pink-300 py-24 px-6 sm:px-10">
    <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Every Voice <br />Deserves to Be Heard.
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Somewhere in a quiet room, a creator dreams big.  
          A melody, a thought, a story, a talent — waiting to be shared.
        </p>
      </div>
      <div className="lg:w-1/2">
        <img src="/dreamer.jpg" alt="Creator dreaming" className="w-full max-w-md mx-auto drop-shadow-xl rounded-full" />
      </div>
    </div>
  </div>

  {/* Segment 2 – The Struggle */}
  <div className="bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300 py-24 px-6 sm:px-10">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2">
        <img src="/struggle.jpg" alt="Struggling creator" className="w-full max-w-md mx-auto drop-shadow-xl rounded-full" />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          But It’s Not Easy.  
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Algorithms hide them. Brands ignore them.  
          They juggle, hustle, and still feel unseen.
        </p>
        <p className="mt-4 text-md text-gray-600 italic">
          "Where do I even begin?"
        </p>
      </div>
    </div>
  </div>

  {/* Segment 3 – The Rise (With CTA) */}
  <div className="bg-gradient-to-bl from-yellow-200 via-pink-200 to-orange-200 py-24 px-6 sm:px-10">
    <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          You Change That. <br />You Give Them a Stage.
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          With just a few clicks, they create a page.  
          And suddenly — they’re seen, supported, and celebrated.
        </p>
        <a 
          href="#create"
          className="inline-block px-8 py-4 text-white font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Help Creators Shine 🌟
        </a>
      </div>
      <div className="lg:w-1/2">
        <img src="/success.webp" alt="Creator rising" className="w-full max-w-md mx-auto drop-shadow-xl rounded-full" />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Value
