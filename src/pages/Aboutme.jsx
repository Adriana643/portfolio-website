import React from 'react';

function Aboutme() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* image */}
        <div className="w-full md:w-2/5 flex-shrink-0">
          <img
            src="/images/your-photo.jpg"
            alt="Portrait"
            className="w-full h-auto rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* text */}
        <div className="w-full md:w-3/5">
          <h1 className="font-semibold text-3xl text-stone-700 mb-4">
            About Me
          </h1>

          <p className="text-stone-500 text-lg leading-relaxed mb-4">
            Hi!! I'm a fourth-year software engineering student at Concordia University, just about to start working on my Capstone project, an end-of-degree engineering project.
             I'm someone who enjoys learning new tools, in both coding and arts!
          </p>

          <p className="text-stone-500 text-lg leading-relaxed mb-4">
            I took a liking to backend development, and it is what draws me most in the coding world! Lately, I've also been curious about the game development industry and where that interest might take me.
          </p>

          <p className="text-stone-500 text-lg leading-relaxed">
            Outside of code, you'll usually find me drawing or gaming. I've been drawing digitally and painting for more than 7 years, always eager to make fanart of things I enjoy. 
            On the gaming side, I'm drawn to fast-paced FPS and MOBAs that can keep my competitive side going. &#9786;
          </p>
        </div>

      </div>
    </div>
  );
}

export default Aboutme;