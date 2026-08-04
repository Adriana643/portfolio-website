import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom'; 

export default function Header(){

    return(
        <header className="sticky top-0 z-50">
            <nav className="relative bg-stone-500 text-white px-8 py-5">
                <div className="flex items-center justify-between">
                    {/* name, github, linkedin icons */}
                    <div>
                    <h1 className="font-semibold text-lg">Adriana Ruscitti-Titto</h1>

                    <div className="flex gap-3 mt-1 text-xlg">
                        <a
                          href="https://github.com/Adriana643"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="cursor-pointer hover:opacity-80" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/adriana-ruscitti-titto-61349b296/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin className="cursor-pointer hover:opacity-80" />
                        </a>
                    </div>
                    </div>

                    {/* navbar sections */}
                    <ul className="flex items-center gap-8 font-semibold text-xl">
                    <li>
                        <NavLink
                          to="/"
                          end
                          className={({ isActive }) =>
                            `cursor-pointer pb-1 border-b-2 transition ${
                              isActive ? 'border-white' : 'border-transparent hover:text-gray-200'
                            }`
                          }
                        >
                        Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                          to="/aboutme"
                          className={({ isActive }) =>
                            `cursor-pointer pb-1 border-b-2 transition ${
                              isActive ? 'border-white' : 'border-transparent hover:text-gray-200'
                            }`
                          }
                        >
                        About Me
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                          to="/projects"
                          className={({ isActive }) =>
                            `cursor-pointer pb-1 border-b-2 transition ${
                              isActive ? 'border-white' : 'border-transparent hover:text-gray-200'
                            }`
                          }
                        >
                        Projects
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                          to="/skills"
                          className={({ isActive }) =>
                            `cursor-pointer pb-1 border-b-2 transition ${
                              isActive ? 'border-white' : 'border-transparent hover:text-gray-200'
                            }`
                          }
                        >
                        Skills
                        </NavLink>
                    </li>

                    </ul>
                </div>
            </nav>
        </header>
    );

}