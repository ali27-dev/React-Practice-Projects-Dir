import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <About />
    </div>
  );
}
const skillsData = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function Header() {
  return (
    <header className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUrDP55QFgo9bOrb05YPNdmMg35lkCIHf4DnZ-yivRjgX0D7srXLM--oY5P9qfnHu83I&usqp=CAU"
        alt="Profile coding"
      />
    </header>
  );
}

function About() {
  const skills = skillsData;
  console.log(skills);

  return (
    <main className="about">
      <h2>Abid Ali</h2>
      <p>
        My name is Abid Ali, and I am the son of Muzafar Khan. I have completed
        my FSc (Intermediate) and have a strong interest in the field of
        technology. I am passionate about learning new skills and exploring the
        world of software development. My goal is to become a professional
        developer and contribute to the digital world through innovation and
        hard work. I am currently focused on building my skills in programming
        and software development to achieve my dream.
      </p>

      <ul className="inner-div">
        {skills.map((res) => (
          <Skills skillObj={res} key={res.skill} />
        ))}
      </ul>
    </main>
  );
}

function Skills({ skillObj }) {
  console.log(skillObj);
  return (
    <div className="skills" style={{ backgroundColor: `${skillObj.color}` }}>
      <span>{skillObj.skill}</span>
      <span>
        {/* {skillObj.level === "advanced" ? "💪" : "🐵"} */}
        {skillObj.level === "advanced" && "💪"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "beginner" && "🐵"}
      </span>
    </div>
  );
}
