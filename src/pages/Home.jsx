import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-xl text-center">

        <h1 className="font-semibold text-4xl text-stone-700">
          Hello, I'm Adriana Ruscitti-Titto
        </h1>

        <h3 className="font-semibold text-stone-500">
          Software Engineering | web dev &bull; game dev &bull; mobile dev | java &bull; c++ 
        </h3>

        <p className="mt-4 text-stone-500 text-lg leading-relaxed">
          Welcome to my portfolio! Feel free to travel around the site to learn
          more about me. If you don't know where to start, you can select the About me tab at the top right. &#9786;
        </p>

        {/* socials icons + email */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <p className="text-stone-500 text-lg">
            For any inquiries, you can email me at <a className="underline hover:text-stone-500" href="mailto:adrianart2002@yahoo.ca">adrianart2002@yahoo.ca</a>.
          </p>
        </div>

        {/* internal links */}
        <div className="flex items-center justify-center gap-4 mt-8">

          <button
            type="button"
            onClick={() => navigate('/aboutme')}
            className="bg-stone-500 text-white rounded-full px-6 py-2 hover:bg-stone-900/80 transition"
          >
            About me
          </button>
          <button
            type="button"
            onClick={() => navigate('/projects')}
            className="bg-stone-500 text-white rounded-full px-6 py-2 hover:bg-stone-900/80 transition"
          >
            View projects
          </button>
          <a
            href="https://github.com/Adriana643"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-stone-700 cursor-pointer hover:opacity-80" />
          </a>
          <a
            href="https://www.linkedin.com/in/adriana-ruscitti-titto-61349b296/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-stone-700 cursor-pointer hover:opacity-80" />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Home;