import React from "react";

const Skills = () => {
  const Skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "Tailwind CSS", level: 85 },
  ];
  return (
    <div className="bg-blue-100 m">
      <div className="py-10 px-5">
        <h1 className="font-bold text-3xl underline underline-offset-2 decoration-blue-500 ">
          Skills
        </h1>
        <p className="mt-10 font-semibold">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="md:grid grid-cols-2 gap-2 py-16 px-5">
        {Skills.map((skill) => (
          <div key={skill.name} className="md-4">
            <span className="font-semibold">{skill.name}</span>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
              <div
                className="bg-blue-500 h-2 ronded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-700">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
