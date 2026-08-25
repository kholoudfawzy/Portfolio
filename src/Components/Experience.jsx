import { useState } from "react";

const experiences = [
  {
    id: 1,
    period: "Jul 2026 — Aug 2026",         
    title: "Frontend Trainee",
    place: "SEF Academy — Internship",
    description:
      "Hands-on training working within a team environment, building real-world projects using React.js, REST APIs, and modern frontend tools. Collaborated using Git & GitHub for code reviews and project delivery. Accumulated 120+ training hours covering component design, state management, API integration, and responsive UI.",
    tags: ["React", "JavaScript", "REST APIs", "Tailwind", "Git", "GitHub", "Team Collaboration"],
    side: "left",
  },
  {
  id: 2,
  period: "May 2026 — Aug 2026",
  title: "Backend Development Diploma (Node.js)",
  place: "SEF Academy",
  description:
    "Studied server-side development with Node.js and Express.js, building RESTful APIs connected to MongoDB. Covered authentication with JWT and data modeling using Mongoose.",
  tags: ["Node.js", "Express.js", "REST APIs", "MongoDB", "JWT", "Mongoose"],
  side: "right",
  },
  {
    id: 3,
    period: "Jul 2025 — Apr 2026",
    title: "Frontend Development Diploma",
    place: "SEF Academy",
    description:
      "Completed a structured diploma covering the full frontend stack — from semantic HTML5 and CSS3 to JavaScript, Tailwind, Bootstrap, and React.js. Delivered multiple graded projects and tasks throughout the program.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind", "Bootstrap", "React", "Responsive Design"],
    side: "left",
  },
];

//  COMPONENT  //
const Experience = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="experience-section" id="experience">
      <div className="exp-header">
        <span className="exp-eyebrow">Career Journey</span>
        <h2 className="exp-title">
          Experience that{" "}
          <em>shapes the code.</em>
        </h2>
        <p className="exp-sub">
          A timeline of growth from first line of code to building real products.
        </p>
      </div>

      <div className="timeline">
        {/* Vertical line */}
        <div className="timeline-line" />

        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`timeline-item ${exp.side}`}
          >
            <div className="timeline-dot"></div>

            {/* Card */}
            <div className={`exp-card ${active === exp.id ? "active-card" : ""}`}
              onClick={() => setActive(active === exp.id ? null : exp.id)}
            >
              <span className="exp-period">{exp.period}</span>
              <h3 className="exp-role">{exp.title}</h3>
              <p className="exp-place">{exp.place}</p>
              <p className="exp-desc">{exp.description}</p>
              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exp-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;