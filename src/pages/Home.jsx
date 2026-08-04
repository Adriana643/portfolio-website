import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-xl text-center">

        <h1 className="font-semibold text-4xl text-stone-700">
          Hello, I'm Adriana Ruscitti-Titto
        </h1>

        <p className="mt-4 text-stone-500 text-lg leading-relaxed">
          Welcome to my portfolio! Feel free to travel around the site to learn
          more about me. If you don't know where to start, start by selecting the About me tab at the top right. &#9786;
        </p>

        {/* socials icons + email */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <p className="text-stone-500 text-lg">
            For any inquiries, you can email me at <a className="underline hover:text-stone-500" href="mailto:adrianart2002@yahoo.ca">adrianart2002@yahoo.ca</a>.
          </p>
        </div>

        {/* internal links */}
        <p className="mt-8 text-stone-500">
          You can{" "}
          <Link to="/projects" className="text-stone-700 font-semibold underline hover:text-stone-500">
            view my projects here
          </Link>
          , or you can also{" "}
          <Link to="/skills" className="text-stone-700 font-semibold underline hover:text-stone-500">
            learn more about my skills and interests here
          </Link>.
        </p>

      </div>
    </div>
  );
}

export default Home;