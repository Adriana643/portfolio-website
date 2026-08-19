import React from 'react';
import { useNavigate } from 'react-router-dom';

const relevantCourses = [
  "Computer Graphics",
  "Software Testing",
  "Databases",
  "Algorithms & Data Structures",
];

const currentlyTaking = [
  "Intro to Game Development",
  "Advanced Program Design with C++",
];

const favoriteGames = [
  "Resident Evil 4",
  "League of Legends",
  "Apex Legends",
];

function InfoBox({ title, items }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="font-semibold text-base text-stone-700 mb-2">
        {title}
      </h2>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs font-medium bg-stone-200 text-stone-700 px-2.5 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Aboutme() {

  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* image */}
        <div className="w-full md:w-2/5 flex-shrink-0">
          <img
            src="images/me.jpg"
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
            Hi!! I'm Adriana, a fourth-year software engineering student at Concordia University, just about to start working on my Capstone project, an end-of-degree engineering project.
             I'm someone who enjoys learning new tools, in both coding and arts!
          </p>

          <p className="text-stone-500 text-lg leading-relaxed mb-4">
            I took a liking to backend development, and it is what draws me most in the coding world! Lately, I've also been curious about the game development industry and where that interest might take me.
            I keep exploring new technologies, notably Unreal Engine, and improving my C++ skills!
          </p>

          <p className="text-stone-500 text-lg leading-relaxed">
            Outside of code, you'll usually find me drawing or gaming. I've been drawing digitally and painting for more than 7 years, always eager to make fanart of things I enjoy.  &#9786;
          </p>
        </div>

      </div>

      {/* info boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <InfoBox title="Relevant Courses" items={relevantCourses} />
        <InfoBox title="Currently Taking" items={currentlyTaking} />
        <InfoBox title="Favorite Games" items={favoriteGames} />
      </div>

        <div className="flex items-center justify-center gap-4 mt-8">

          <button
            type="button"
            onClick={() => navigate('/home')}
            className="bg-stone-500 text-white rounded-full px-6 py-2 hover:bg-stone-900/80 transition"
          >
            View Home
          </button>
          <button
            type="button"
            onClick={() => navigate('/projects')}
            className="bg-stone-500 text-white rounded-full px-6 py-2 hover:bg-stone-900/80 transition"
          >
            View projects
          </button>
        </div>

    </div>
  );
}

export default Aboutme;