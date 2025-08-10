import React from 'react'

const CreatorDream = () => {
    return (
        <div>
            <section className="bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200 bg-white py-20 px-6 sm:px-10 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left: Visual / Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/creator-dreamer.webp"
                            alt="Dreamer Illustration"
                            className="w-full max-w-md mx-auto drop-shadow-xl rounded-full"
                        />
                    </div>

                    {/* Right: Poetic Copy */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600 leading-tight">
                            You Dream. <br className="hidden sm:block" />We Give It a Stage.
                        </h2>
                        <p className="text-lg text-white mb-8">
                            Turn your passion into power. Create your own space. <br className="hidden sm:block" />
                            Be supported, be seen, be unstoppable.
                        </p>
                        <a
                            href="#create"
                            className="inline-block px-8 py-4 text-white font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            Build Your Creator Page
                        </a>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default CreatorDream
