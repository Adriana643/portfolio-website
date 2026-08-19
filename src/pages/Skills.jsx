import React from 'react';

const languages = [
    { name: "Java" },
    { name: "JavaScript"},
    { name: "Python" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "C++" },
    { name: "C# (Unity)" },
    { name: "SQL"},
];

const frameworks = [
    { name: "React Native"},
    { name: "React" },
    { name: "Spring Boot" },
    { name: "Node.js" },
];

const tools = [
    { name: "Git / GitHub" },
    { name: "VS Code" },
    { name: "Jest" },
    { name: "JUnit" },
    { name: "Maestro" },
    { name: "Figma" },
    { name: "Jira" },
    { name: "Confluence" },
    { name: "IntelliJ" },
    { name: "Visual Studio" },
];

const databasesCloud = [
    { name: "Supabase" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "Microsoft Azure" },
    { name: "SQLite" },
];

const other = [
    { name: "Clip Studio Paint" },
    { name: "Excel VBA" },
    { name: "Unity" },
    { name: "Power Automate" },
    { name: "Shopify" },
    { name: "Audacity" },
];

const courses = [
    "Computer Graphics",
    "Software Testing, Verification and Quality Assurance",
    "User Interface Design",
    "Databases",
    "Algorithms & Data Structures",
];

const spokenLanguages = [
  { name: "English", level: "Fluent" },
  { name: "French", level: "Fluent" },
  { name: "Spanish", level: "Fluent"}
];

function SkillItem({ name, top }) {
  return (
    <li className="flex items-center gap-2 py-1.5 break-inside-avoid">
      <span className="w-1.5 h-1.5 rounded-full bg-stone-300 ml-1 flex-shrink-0" />
      <span className={"text-stone-700 font-normal"}>
        {name}
      </span>
      {top ? (
        <span className="text-xs font-semibold bg-stone-500 text-white px-2 py-0.5 rounded-full whitespace-nowrap">
          Strength
        </span>
      ) : null }
    </li>
  );
}

function SkillSection({ title, items }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="font-semibold text-2xl text-stone-700 mb-4">
        {title}
      </h2>
      <ul className="columns-1 sm:columns-2 gap-x-8">
        {items.map((item) => (
          <SkillItem key={item.name} name={item.name} top={item.top} />
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-semibold text-3xl text-stone-700 mb-10 text-center">
        Skills
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <SkillSection title="Coding Languages" items={languages} />
        <SkillSection title="Frameworks & Libraries" items={frameworks} />
        <SkillSection title="Tools & Platforms" items={tools} />
        <SkillSection title="Databases & Cloud" items={databasesCloud} />
        <SkillSection title="Others" items={other} />

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="font-semibold text-2xl text-stone-700 mb-4">
            Relevant Courses
          </h2>
          <div className="flex flex-wrap gap-2">
            {courses.map((course) => (
              <span
                key={course}
                className="text-sm font-medium bg-stone-200 text-stone-700 px-4 py-2 rounded-full"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="font-semibold text-2xl text-stone-700 mb-4">
          Spoken Languages
        </h2>
        <div className="flex flex-wrap gap-6">
          {spokenLanguages.map((lang) => (
            <div key={lang.name} className="text-stone-700">
              <span className="font-medium">{lang.name}</span>
              <span className="text-stone-500 text-sm"> - {lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;