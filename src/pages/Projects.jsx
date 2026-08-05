import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//projects list
//{ type: "video", src: `${process.env.PUBLIC_URL}/images/projects/videoformat.mp4` },
const projects = [
  {
    id: 1,
    title: "Where2Go Campus Navigation Mobile App",
    description: "Mobile campus navigation app for Concordia University, incorporating the Google Maps API to provide directions to buildings, classrooms, and points of interest across both campuses. Served as the team lead for an 11-member team, applying the SCRUM methodology to coordinate development.",
    category: "software",
    images: [
    `${process.env.PUBLIC_URL}/images/projects/where2go.1.png`,
    `${process.env.PUBLIC_URL}/images/projects/where2go.2.png`,
    `${process.env.PUBLIC_URL}/images/projects/where2go.3.png`,
    `${process.env.PUBLIC_URL}/images/projects/where2go.4.png`,
    `${process.env.PUBLIC_URL}/images/projects/where2go.5.png`,
    `${process.env.PUBLIC_URL}/images/projects/where2go.6.png`,
    ],
    tags: ["Javascript", "ReactNative", "ExpoGo", "Maestro", "Jest", "CodeCov", "SonarQube", "SCRUM", "Team Lead"],
    link: "https://github.com/SOEN390-Winter2026/Where2Go-Project",
  },
  {
    id: 2,
    title: "HappyLilacs Plant Care Mobile App",
    description: "Built with a team of 5 for the User Interface Design course, this mobile plant care app pulls plant information from the Perenual API and lets users track watering schedules through a customizable calendar feature tailored to each registered plant.",
    category: "software",
    images: [
    `${process.env.PUBLIC_URL}/images/projects/happylilacs.0.png`,
    `${process.env.PUBLIC_URL}/images/projects/happylilacs.1.png`,
    `${process.env.PUBLIC_URL}/images/projects/happylilacs.2.png`,
    `${process.env.PUBLIC_URL}/images/projects/happylilacs.3.png`,
    `${process.env.PUBLIC_URL}/images/projects/happylilacs.4.png`,
    `${process.env.PUBLIC_URL}/images/projects/happylilacs.5.png`,
    ],
    tags: ["Typescript", "ReactNative", "ExpoGo", "Supabase (PostgreSQL)"],
    link: "https://github.com/Adriana643/HappyLilacs",
  },
  {
    id: 3,
    title: "EcoPath - Bike Management System",
    description: "Team project developed with 5 collaborators. EcoPath is a bike-sharing web application allowing users to locate, reserve, and manage bike rentals through an intuitive platform while operators can manage bike availability.",
    category: "software",
    images: [
    `${process.env.PUBLIC_URL}/images/projects/ecopath.1.png`,
    `${process.env.PUBLIC_URL}/images/projects/ecopath.2.png`,
    `${process.env.PUBLIC_URL}/images/projects/ecopath.3.png`,
    `${process.env.PUBLIC_URL}/images/projects/ecopath.4.png`,
    ],
    tags: ["Java", "HTML", "CSS", "Springboot", "H2 DB", "SCRUM"],
  },
  {
    id: 4,
    title: "Events Handler Mobile App",
    description: "Built for the Software Testing course, this mobile app lets managers create and edit events while users browse and register for them. The project emphasized test coverage, incorporating unit tests, performance tests, end-to-end tests, and integration testing throughout development.",
    category: "software",
    images: [
    `${process.env.PUBLIC_URL}/images/projects/events.2.png`,
    {type:"video", src: `${process.env.PUBLIC_URL}/images/projects/events.1.mp4`}
    ],
    tags: ["Java", "Springboot", "ReactNative", "Maestro", "JUnit", "Jest", "Flashlight"],
    link: "https://github.com/Adriana643/SOEN345-Project",
  },
  {
    id: 5,
    title: "Train Connections Setup System",
    description: "Java application for managing train connections, with a user interface for viewing and saving data to the database. Uses Java data structures to derive indirect connections from direct ones, plus search/filtering by multiple parameters and a multi-person reservation feature.",
    category: "software",
    tags: ["Java", "SQLite"],
  },
];

const games = [

  {
      id: 101,
      title: "After Midnight",
      description: "An ambiance horror game developed during McGameJam 2026 in a team of 6. It was developed using Unity's version control, where players interacting with the right items will be able to move through the dark story of our protagonist. The theme of the event was: Hunt.",
      category: "game",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/midneight.1.png`,
        `${process.env.PUBLIC_URL}/images/projects/midneight.2.png`,
        `${process.env.PUBLIC_URL}/images/projects/midneight.3.png`,
        `${process.env.PUBLIC_URL}/images/projects/midneight.4.png`,
      ],
      tags: ["Unity", "C#", "Unity Version Control"],
      link: "https://kanpekiwi.itch.io/after-midneight",
  },
  {
      id: 102,
      title: "Lost in Carnival",
      description: "A Point and Click Game which includes a cohesive storyline of a lost little boy in a circus, minigames and different endings. The game was our entry for McGameJam 2025 where we used Unity version control to develop a game within the theme: Lost and Found",
      category: "game",
      tags: ["Unity", "C#", "Unity Version Control"],
  },

];

// normalizing different medias (image & vid)
function getMediaItem(item) {
  if (typeof item === "string") {
    return { type: "image", src: item };
  }
  return item;
}

function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);

  //handling projects with no images
  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-64 overflow-hidden bg-stone-100 flex items-center justify-center">
        <p className="text-stone-400">No image available</p>
      </div>
    );
  }

  const hasMultiple = images.length > 1;
  const media = getMediaItem(images[current]);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-64 overflow-hidden group bg-stone-100">
        {media.type === "video" ? (
          <video
            src={media.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        ) : (
          <img
            src={media.src}
            alt={`${title} screenshot ${current + 1}`}
            className="w-full h-full object-contain"
          />
        )}

      {hasMultiple && (
        <>
          <button 
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-stone-700/60 text-white rounded-full p-2 hover:bg-stone-700/80 transition"
          >
            <FaChevronLeft />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-stone-700/60 text-white rounded-full p-2 hover:bg-stone-700/80 transition"
          >
            <FaChevronRight />
          </button>

          {/* dots indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((image, index) => {
            const media = getMediaItem(image);
            return (
              <span
                key={media.src}
                className={`w-1.5 h-1.5 rounded-full transition ${
                  index === current ? 'bg-white' : 'bg-white/50'
                }`}
              />
            );
          })}
          </div>
        </>
      )}
    </div>
  );
}

//format each card
function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
      <ImageCarousel images={project.images} title={project.title} />

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-semibold text-2xl text-stone-700 mb-3">
          {project.title}
        </h3>

        <p className="text-stone-500 text-base leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-stone-200 text-stone-700 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* link */}
        {project.link && (
            <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-stone-700 underline hover:text-stone-500"
            >
            View project
            </a>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const [activeTab, setActiveTab] = useState("software");
  const activeProjects = activeTab === "software" ? projects : games;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-semibold text-3xl text-stone-700 mb-8 text-center">
        Projects
      </h1>

      {/* tab toggle */}
      <div className="flex justify-center gap-3 mb-10">
        <button
          type="button"
          onClick={() => setActiveTab("software")}
          className={`px-10 py-3 rounded-full font-semibold text-sm transition ${
            activeTab === "software"
              ? "bg-stone-500 text-white"
              : "bg-stone-200 text-stone-700 hover:bg-stone-300"
          }`}
        >
          Software
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("game")}
          className={`px-10 py-3 rounded-full font-semibold text-sm transition ${
            activeTab === "game"
              ? "bg-stone-500 text-white"
              : "bg-stone-200 text-stone-700 hover:bg-stone-300"
          }`}
        >
          Games
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {activeProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;