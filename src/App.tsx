import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, Cloud, Code2, Database, Github, Linkedin, Mail, Menu, Server, Workflow, X } from 'lucide-react';
import { useState } from 'react';

const skills = [
  { title: 'Backend engineering', icon: Braces, items: ['Java 17 / 21', 'Spring Boot', 'Spring Security', 'REST APIs', 'Hibernate', 'OAuth2 / SAML'] },
  { title: 'Cloud & platform', icon: Cloud, items: ['Google Cloud Platform', 'AWS', 'Cloud Build', 'Cloud Functions', 'Cloud Storage', 'BigQuery'] },
  { title: 'Data & messaging', icon: Database, items: ['Apache Kafka', 'Apache Beam', 'Apache Flink', 'Pub/Sub', 'Airflow / Composer', 'Distributed processing'] },
  { title: 'Frontend & delivery', icon: Code2, items: ['React', 'TypeScript', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins / CI/CD'] },
];

const experience = [
  { role: 'Senior Software Engineer', company: 'IBM India Pvt Ltd. · Client: American Express', period: 'Oct 2025 — Present', detail: 'Building and supporting cloud-native services and data workflows in a financial-services environment.', tags: ['Java', 'Spring Boot', 'GCP', 'BigQuery', 'Pub/Sub', 'Airflow'] },
  { role: 'Senior Software Engineer', company: 'Tecaholic Solutions LLC · Client: American Express', period: 'Mar 2024 — Aug 2025', detail: 'Building and supporting cloud-native services and data workflows in a financial-services environment.', tags: ['Java', 'Spring Boot', 'GCP', 'BigQuery', 'Pub/Sub', 'Airflow'] },
  { role: 'Senior Software Engineer', company: 'Sintec Informatik GmbH', period: 'Dec 2022 — Jun 2023', detail: 'Contributed to software engineering delivery, collaborating across teams to develop and maintain robust applications.', tags: ['Backend engineering', 'APIs', 'Agile delivery'] },
  { role: 'Software Engineer · R&D', company: 'Treasury Intelligence Solutions (TIS)', period: 'Nov 2020 — Oct 2022', detail: 'Worked on product engineering in a treasury and financial-technology context, with exposure to cloud services and application development.', tags: ['Java', 'AWS', 'Product engineering', 'R&D'] },
  { role: 'Software Engineer', company: 'IBM India Pvt. Ltd. · Client: American Express', period: 'Earlier experience', detail: 'Enterprise engineering experience spanning cloud and data-processing technologies. Add verified project details and dates before publishing.', tags: ['GCP', 'Python', 'Apache Beam', 'Apache Flink'] },
];

const projects = [
  { number: '01', title: 'Cloud-native financial services platform', type: 'BACKEND · CLOUD', description: 'A representative case study of secure, maintainable backend services built for enterprise financial workflows.', stack: ['Java', 'Spring Boot', 'GCP', 'OAuth2 / SAML'], points: ['Design services around clear API and domain boundaries', 'Apply secure authentication and authorization patterns', 'Use cloud-native monitoring and deployment practices'] },
  { number: '02', title: 'Streaming & batch data pipelines', type: 'DATA ENGINEERING', description: 'A reference architecture for processing and moving data through managed cloud services and distributed processing frameworks.', stack: ['Apache Beam', 'Apache Flink', 'Pub/Sub', 'BigQuery'], points: ['Separate ingestion, processing and analytics concerns', 'Design for retries, observability and data quality', 'Support batch and streaming patterns where appropriate'] },
  { number: '03', title: 'Full-stack operations console', type: 'FULL STACK', description: 'A sample product concept connecting a typed React interface to backend APIs for operational visibility and workflow management.', stack: ['React', 'TypeScript', 'Spring Boot', 'REST APIs'], points: ['Build reusable, accessible UI components', 'Keep API contracts and frontend types aligned', 'Provide clear loading, error and empty states'] },
];

const links = {
  linkedin: 'https://www.linkedin.com/in/ramya-dirsumilli/',
  github: 'https://github.com/ramyadirsumilli',
  email: 'mailto:ramya.dirsumilli@gmail.com',
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>('01');
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="topbar">
      <a className="wordmark" href="#home" onClick={closeMenu}><span className="wordmark-mark">R<span>.</span></span><span>RAMYA DIRSUMILLI</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#projects" onClick={closeMenu}>Projects</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> SENIOR SOFTWARE ENGINEER <span className="eyebrow-divider">/</span> CLOUD & BACKEND</div>
          <h1>Engineering systems<br/>that <span className="gradient-text">scale with purpose.</span></h1>
          <p className="hero-intro">I’m Ramya — a software engineer focused on dependable backend systems, cloud platforms and thoughtful full-stack experiences.</p>
          <p className="hero-subtext">Java · Spring Boot · GCP / AWS · Distributed data processing · React</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a><a className="button button-quiet" href="#about">More about me <ArrowDown size={16}/></a><a className="cv-link" href="/Ramya-Dirsumilli-CV.pdf" download>Download CV <ArrowUpRight size={14}/></a></div>
          <div className="social-row"><a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a><a href={links.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a><a href={links.email}><Mail size={16}/> Email</a></div>
        </div>
        <div className="hero-visual profile-visual" aria-label="Professional portrait of Ramya Dirsumilli">
          <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
          <div className="profile-photo-frame">
            <img className="profile-photo" src="/ramya-profile.jpg" alt="Ramya Dirsumilli, Senior Software Engineer" />
            <div className="profile-photo-shade" />
            <div className="profile-photo-label"><span className="status-dot"/> OPEN TO THE NEXT CHALLENGE</div>
          </div>
          <div className="floating-chip chip-cloud"><Cloud size={16}/><span>Cloud-native</span><span className="chip-check"><Check size={11}/></span></div>
          <div className="floating-chip chip-data"><Workflow size={16}/><span>Distributed systems</span></div>
          <div className="visual-caption"><span className="caption-line"/> JAVA <span>·</span> CLOUD <span>·</span> ENGINEERING</div>
        </div>
        <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Curiosity in the details.<br/><span className="muted-heading">Clarity in the architecture.</span></h2></div>
        <div className="about-grid"><div className="about-lead"><p className="large-copy">I turn complex engineering requirements into <span className="text-blue">maintainable, secure and production-minded software.</span></p><p>My experience spans enterprise financial services, product engineering, cloud-native applications and distributed data workflows. I enjoy working across the stack — from API design and backend implementation to delivery pipelines, observability and user-facing tools.</p><p>I value clear communication, pragmatic design, collaborative delivery and systems that are easier to operate as they grow.</p></div>
          <div className="about-aside"><div className="aside-card"><span className="aside-icon"><Server size={19}/></span><div><h3>Systems thinking</h3><p>Designing for reliability, security and maintainability — not just the happy path.</p></div></div><div className="aside-card"><span className="aside-icon"><Cloud size={19}/></span><div><h3>Cloud-first delivery</h3><p>Building with managed services, automation, monitoring and repeatable releases.</p></div></div><div className="aside-card"><span className="aside-icon"><Workflow size={19}/></span><div><h3>End-to-end ownership</h3><p>Connecting technical choices to team workflows and product outcomes.</p></div></div></div>
        </div>
      </section>

      <section className="experience section-wrap section-pad" id="experience">
        <div className="section-heading"><span className="section-index">02 / EXPERIENCE</span><h2>Experience that spans<br/><span className="muted-heading">products, platforms & teams.</span></h2><p className="section-description">A selection of roles across enterprise engineering and financial technology. Please verify dates, titles and descriptions before publishing.</p></div>
        <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={job.company}><div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div><div className="timeline-content"><div className="timeline-meta"><span>{job.period}</span>{i === 0 && <span className="current-label">MOST RECENT</span>}</div><h3>{job.role}</h3><div className="company-name">{job.company}</div><p>{job.detail}</p><div className="tag-row">{job.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div>
        <p className="small-note">*Confirm the current role end date/status and update any dates marked “Earlier experience” to match your final CV.</p>
      </section>

      <section className="skills section-wrap section-pad" id="skills">
        <div className="section-heading"><span className="section-index">03 / TOOLKIT</span><h2>The tools behind<br/><span className="muted-heading">the outcomes.</span></h2><p className="section-description">A practical toolkit across backend development, cloud infrastructure, data engineering and frontend delivery.</p></div>
        <div className="skills-grid">{skills.map((group) => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={20}/></span><span className="skill-count">{String(group.items.length).padStart(2, '0')} SKILLS</span></div><h3>{group.title}</h3><div className="skill-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>; })}</div>
      </section>

      <section className="projects section-wrap section-pad" id="projects">
        <div className="section-heading project-heading"><div><span className="section-index">04 / SELECTED WORK</span><h2>Thoughtful engineering.<br/><span className="muted-heading">Real-world patterns.</span></h2></div><p className="section-description">These are portfolio case-study templates, not claims of public production projects. Replace or supplement them with work you can discuss publicly.</p></div>
        <div className="project-list">{projects.map(project => <article className={expandedProject === project.number ? 'project-card project-expanded' : 'project-card'} key={project.number}><button className="project-toggle" onClick={() => setExpandedProject(expandedProject === project.number ? null : project.number)} aria-expanded={expandedProject === project.number}><span className="project-number">{project.number}</span><span className="project-title-group"><span className="project-type">{project.type}</span><span className="project-title">{project.title}</span></span><span className="project-arrow"><ArrowUpRight size={19}/></span></button>{expandedProject === project.number && <div className="project-details"><p>{project.description}</p><div className="project-detail-grid"><div><h4>ENGINEERING FOCUS</h4><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul></div><div><h4>TECH STACK</h4><div className="tag-row">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></div><div className="case-study-note">Next step: add a diagram, your specific contribution, trade-offs, and verified outcomes.</div></div>}</article>)}</div>
      </section>

      <section className="contact section-wrap section-pad" id="contact"><div className="contact-panel"><div className="contact-glow"/><span className="section-index">05 / CONTACT</span><h2>Have an interesting<br/>problem to <span className="gradient-text">solve?</span></h2><p>I’m interested in senior software engineering opportunities where strong engineering fundamentals, cloud platforms and collaborative delivery matter.</p><div className="contact-actions"><a className="button button-primary" href={links.email}>Get in touch <ArrowUpRight size={17}/></a><a className="button button-outline" href={links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin size={16}/></a></div><div className="contact-footnote">Please replace the example email and social URLs with your real links.</div></div></section>
    </main>
    <footer className="footer section-wrap"><a className="wordmark footer-mark" href="#home"><span className="wordmark-mark">R<span>.</span></span><span>RAMYA DIRSUMILLI</span></a><span>Designed for clarity. Built with React + TypeScript.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}

export default App;
