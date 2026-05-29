const technicalSkills = [
  {
    title: "Languages",
    items: ["C#", "Java", "Python", "JavaScript", "PHP", "HTML", "CSS"],
  },
  {
    title: "Database",
    items: ["MySQL", "SSMS", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["GitHub", "VSCode", "Cursor", "Docker", "Copilot", "Claude"],
  },
  {
    title: "Multimedia",
    items: ["Photoshop", "Canva", "CapCut", "Figma", "Draw.io", "Adobe"],
  },
  {
    title: "OS",
    items: ["Windows", "Raspberry Pi OS", "Linux (Bazzite)"],
  },
];

const projectPlaceholders = [
  {
    id: "p1",
    title: "PRIS - PDL Web-Based Record Tracking System",
    description:
      "Designed and developed a PDL record tracking system that streamlines inmate information management, document processing, and report generation through a centralized web-based platform.",
    tag: "Capstone Project",
    url: "https://vcj-production.up.railway.app"
  },
  {
    id: "p2",
    title: "Lalamig Shop -  Web-based Store System",
    description:
      "A small Python application using Tkinter, PyMySQL, and MatplotlibIt a patient information management system designed to use CRUD to analyze patient vaccination and disease status, supporting data tracking and reporting.",
    tag: "School Project",
    url: "https://lalamig.vercel.app/homepage.html"
  },
  {
    id: "p3",
    title: "Project details coming soon",
    description:
      "Once you send the projects, each card can show what it does, what you built it with, and what problem it solved.",
    tag: "Placeholder",
  },
];

const certificatePlaceholders = [
  {
    id: "c1",
    title: "School Certificate",
    file: "/certificates/cert1.png",
    description: "Strategic Project Management: Aligning Projects with Organizational Goals",
  },
  {
    id: "c2",
    title: "School Certificate",
    file: "/certificates/cert2.png",
    description: "Press Start to Level Up: Best Practices in Game Testing",
  },
  {
    id: "c3",
    title: "School Certificate",
    file: "/certificates/cert3.png",
    description: "Launch Your Tech Career: The High-Demand Skillset of a Full Stack Web Developer",
  },
  {
    id: "c4",
    title: "School Certificate",
    file: "/certificates/cert4.png",
    description: "Securing Connections: Strategies for Cybersecurity and Network Operations",
  },
];

export default function Page() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero">
        <header className="topbar">
          <div className="brand">Cacho, Jeremy Adrian T.</div>
          <nav aria-label="Primary" className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="portrait-card" aria-label="Portrait placeholder">
              <div className="portrait-frame">
                <picture>
                    <img src="/portrait.png" alt="Jeremy Cacho portrait" className="portrait-img" />
                    </picture>
                </div>
            
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>Cacho, Jeremy Adrian T.</h1>
            <p className="subhead">BS Information Technology student</p>
            <p className="body-copy">
              An IT student seeking an OJT opportunity where I can apply my
              knowledge in software development, database management, and system analysis while
              gaining real-world industry experience.
            </p>

            <div className="meta-stack">
              <span>Pamantasan ng Lungsod ng Valenzuela • College</span>
              <span>Valenzuela City, Philippines</span>
            </div>

            <div className="hero-social" aria-label="Quick links">
              <a className="social-link social-link-primary" href="/cv.pdf" target="_blank" rel="noreferrer">
                Get CV
              </a>
              <a className="social-link" href="#contact">
                Send Email
              </a>
              <a className="social-link" href="https://github.com/AdiPLV" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="social-link" href="https://www.linkedin.com/in/jeremycacho/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>


              
          </div>
        </div>
      </section>

      <section className="content-grid content-grid-single" id="about">
        <article className="section-block about-card">
          <p className="section-label">About</p>
          <h2>About me</h2>
          <p>
            I’m a BS Information Technology student focused on software development, database
            management, and system analysis. I like practical work that is clear, structured, and
            useful in real settings.
          </p>
          <p>
            I also have experience with projects and seminars that helped me build confidence in
            web systems, technical problem solving, and collaborative development.
          </p>
        </article>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <p className="section-label">Technical Skills</p>
          <h2>TECHSTACK</h2>
        </div>

        <div className="skills-grid">
          {technicalSkills.map((group) => (
            <article className="skill-group-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-cloud">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="section-label">Projects</p>
          <h2>Recent Work</h2>
        </div>

        <div className="project-grid">
          {projectPlaceholders.map((project) =>
            project.url ? (
              <a
                className="project-card"
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} in a new tab`}
              >
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            ) : (
              <article className="project-card" key={project.id}>
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            )
          )}
        </div>
      </section>

      <section className="certificates-section" id="certificates">
        <div className="section-heading">
          <p className="section-label">Certificates</p>
          <h2>My Certificates</h2>
        </div>

        <div className="certificate-grid">
          {certificatePlaceholders.map((certificate) => (
            <article className="certificate-card" key={certificate.id}>
              <div className="certificate-preview">
                <a href={certificate.file} target="_blank" rel="noreferrer">
                  <img src={certificate.file} alt={certificate.title} className="certificate-img" />
                </a>
              </div>
              <h3>{certificate.title}</h3>
              <p>{certificate.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-card" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Open for OJT opportunities and collaboration.</h2>
        </div>

        <div className="contact-actions">
          <a className="button button-solid" href="mailto:jeremyadriancacho1@gmail.com">
            jeremyadriancacho1@gmail.com
          </a>
          <a className="button button-ghost" href="https://github.com/AdiPLV" target="_blank" rel="noreferrer">
            GitHub
          </a>
         
        </div>
      </section>
    </main>
  );
}