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

const ojtExperiences = [
  {
    name: "BATSU",
    image: "/ojt/BATSU.png",
    description: "Add your BATSU OJT experience paragraph here.",
  },
  {
    name: "LCUP",
    image: "/ojt/LCUP.jpg",
    description: "Add your LCUP OJT experience paragraph here.",
  },
  {
    name: "LPUB",
    image: "/ojt/LPUB.png",
    description: "Add your LPUB OJT experience paragraph here.",
  },
  {
    name: "DLSU Benilde",
    image: "/ojt/LPUC.png",
    description: "Add your LPUC OJT experience paragraph here.",
  },
];

const certificatePlaceholders = [
  {
    id: "c1",
    title: "Strategic Project Management:",
    file: "/certificates/cert1.png",
    description: "Aligning Projects with Organizational Goals",
  },
  {
    id: "c2",
    title: "Press Start to Level Up:",
    file: "/certificates/cert2.png",
    description: "Best Practices in Game Testing",
  },
  {
    id: "c3",
    title: "Launch Your Tech Career:",
    file: "/certificates/cert3.png",
    description: "The High-Demand Skillset of a Full Stack Web Developer",
  },
  {
    id: "c4",
    title: "Securing Connections:",
    file: "/certificates/cert4.png",
    description: "Strategies for Cybersecurity and Network Operations",
  },
];

export default function Page() {
  return (
    <main className="page-shell" id="top">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero">
        <header className="topbar">
          <a className="brand-lockup" href="#top" aria-label="Back to introduction">
            <span className="brand-mark">JAC</span>
          </a>
          <nav aria-label="Primary" className="nav-links">
            <a href="#experience">OJT Experience</a>
            <a href="#certificates">Certificates</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
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
            <p className="eyebrow">Portfolio / 2026</p>
            <h1>Hi! I&apos;m Jeremy Adrian</h1>
            <p className="subhead">A BS Information Technology student</p>

            <div className="hero-focus" aria-label="Areas of focus">
              <span>Web development</span>
              <span>Database systems</span>
              <span>Creative technology</span>
            </div>

            <div className="meta-stack">
              <span>Pamantasan ng Lungsod ng Valenzuela • College</span>
              <span>Valenzuela City, Philippines</span>
            </div>

            <div className="hero-social" aria-label="Quick links">
              <a className="social-link social-link-primary" href="/cv.pdf" target="_blank" rel="noreferrer">
                Get CV
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

      <section className="experience-section" id="experience">
        <div className="section-heading">
          <p className="section-label">OJT Experience</p>
          <h2>Learning beyond the classroom.</h2>
        </div>

        <div className="experience-grid">
          {ojtExperiences.map((experience) => (
            <details className="experience-card" key={experience.name}>
              <summary className="experience-image-link">
                <img
                  src={experience.image}
                  alt={`${experience.name} OJT experience`}
                  className="experience-image"
                />
                <span className="experience-caption">
                  <span className="experience-caption-name">{experience.name}</span>
                </span>
              </summary>
              <p className="experience-description">{experience.description}</p>
            </details>
          ))}
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

      <section className="about-feature" id="about">
        <div className="about-visual">
          <img
            src="/aboutmeselfie.png"
            alt="Jeremy Cacho taking a photo with a camera"
            className="about-image"
          />
          <span className="about-mark">JAC</span>
          <span className="about-pill about-pill-one">Web systems</span>
          <span className="about-pill about-pill-two">Database</span>
          <span className="about-pill about-pill-three">Creative tech</span>
          <p className="about-visual-caption">
            Building useful digital experiences with curiosity and intention.
          </p>
        </div>

        <article className="about-copy">
          <p className="section-label">A little about me</p>
          <h2>Technology with a human side.</h2>
          <p>
            I’m Jeremy, a BS Information Technology student who enjoys turning ideas into
            practical, well-structured systems. I’m especially interested in web development,
            database management, and the details that make a product easier to use.
          </p>
          <p>
            From capstone work to collaborative projects, I’m always looking for ways to learn
            faster, solve problems clearly, and create work that has a real purpose.
          </p>
          <a className="about-link" href="#contact">
            Let’s build something useful <span aria-hidden="true">↗</span>
          </a>
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