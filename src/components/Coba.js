import React, { useState } from "react";

function ParentComponent() {
  const [selectedSkill, setSelectedSkill] = useState("");

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div>
      <Fungsi1 handleSkillSelect={handleSkillSelect} />
      <Fungsi2 selectedSkill={selectedSkill} />
    </div>
  );
}

function Fungsi1({ handleSkillSelect }) {
  const skills = [
    { name: "Front End" },
    { name: "Back End" },
    { name: "Design Graphic" }
  ];

  return (
    <div>
      {skills.map((skill, index) => (
        <button key={index} onClick={() => handleSkillSelect(skill.name)}>
          {skill.name}
        </button>
      ))}
    </div>
  );
}

function Fungsi2({ selectedSkill }) {
  const skills = [
    {
      name: "Front End",
      description: [
        "Responsible for the visual and interactive elements of a website or application.",
        "Uses HTML, CSS, and JavaScript to create user interfaces.",
        "Collaborates with UX designers to implement designs.",
        "Optimizes websites for maximum speed and scalability."
      ]
    },
    {
      name: "Back End",
      description: [
        "Responsible for the server-side logic and database management of a website or application.",
        "Uses server-side programming languages such as PHP, Python, or Node.js.",
        "Designs and maintains databases using SQL or NoSQL.",
        "Implements security measures to protect against attacks."
      ]
    },
    {
      name: "Design Graphic",
      description: [
        "Responsible for creating visual concepts and designs for various mediums such as print, digital, or multimedia.",
        "Uses software such as Adobe Photoshop, Illustrator, or Sketch.",
        "Collaborates with clients to understand their design needs.",
        "Presents design concepts and makes revisions based on feedback."
      ]
    }
  ];

  const skill = skills.find((s) => s.name === selectedSkill);

  return (
    <div>
      {skill && (
        <ul>
          {skill.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ParentComponent;
