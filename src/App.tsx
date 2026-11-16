import { Activity, ArrowDown, ArrowRight, ArrowUpRight, Braces, Cloud, Code2, Database, Github, Linkedin, Mail, Menu, Server, ShieldCheck, Sparkles, Workflow, X } from 'lucide-react';
import { useState } from 'react';

const skills = [
  { title: 'Languages & backend', icon: Braces, items: ['Java 8 – 21', 'Python', 'PySpark', 'Kotlin', 'SQL', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices'] },
  { title: 'Data pipelines & streaming', icon: Database, items: ['Apache Flink', 'Apache Beam', 'Apache Kafka', 'Pub/Sub', 'GCP Dataflow', 'Airflow / Composer', 'Real-time streaming', 'Batch ETL / ELT'] },
  { title: 'Cloud platforms', icon: Cloud, items: ['Google Cloud Platform', 'BigQuery', 'Cloud Storage', 'Cloud Build', 'Cloud Functions', 'AWS', 'S3', 'IAM', 'Lambda', 'CloudWatch'] },
  { title: 'CI/CD & containers', icon: Workflow, items: ['Jenkins', 'GitHub', 'Gerrit', 'Docker', 'Kubernetes', 'Terraform', 'Release automation'] },
  { title: 'Monitoring & observability', icon: Activity, items: ['Splunk', 'Grafana', 'Kibana', 'Prometheus', 'CloudWatch', 'Production debugging', 'Performance tuning'] },
  { title: 'Security & identity', icon: ShieldCheck, items: ['OAuth2', 'SAML', 'JWT', 'IAM', 'Role-based access control', 'Spring Security', 'API security'] },
  { title: 'Frontend', icon: Code2, items: ['React', 'TypeScript', 'Angular', 'AngularJS', 'VueJS'] },
  { title: 'AI-assisted development', icon: Sparkles, items: ['GitHub Copilot', 'ChatGPT', 'Claude'] },
];

const experience = [
  { role: 'Senior Software Engineer / Tech Lead', company: 'IBM India Pvt Ltd. · Client: American Express', period: 'Oct 2025 — Present', detail: 'Hands-on engineer on American Express financial platforms, writing production code in Java 21, Python and PySpark. I built reusable Apache Flink and Apache Beam frameworks, run real-time pipelines on Kafka and Pub/Sub, and manage batch workflows with Cloud Composer/Airflow and Dataflow into BigQuery. I own Jenkins CI/CD through to Kubernetes, troubleshoot production with Splunk, mentor a 5-member team, and use GitHub Copilot, ChatGPT and Claude to speed up delivery, with every change reviewed.', tags: ['Java 21', 'Python', 'PySpark', 'Spring Boot', 'Flink', 'Beam', 'Kafka', 'GCP', 'Dataflow', 'BigQuery', 'Pub/Sub', 'Airflow', 'Splunk', 'Jenkins', 'Docker', 'Kubernetes'] },
  { role: 'Senior Software Engineer', company: 'Tecaholic Solutions LLC · Client: American Express', period: 'Mar 2024 — Aug 2025', detail: 'Designed high-performance Java/Spring Boot fintech microservices on GCP supporting 2M+ daily transactions. Cut backend latency by 30% through caching, asynchronous processing and tuning, and release times by 45% through CI/CD automation. Built Python/SQL tooling for validation, reconciliation and data-quality checks, ran pipelines on Dataflow, and supported 99.9% uptime across distributed US/India teams.', tags: ['Java', 'Spring Boot', 'Python', 'SQL', 'GCP', 'Dataflow', 'BigQuery', 'Pub/Sub', 'Docker', 'Kubernetes', 'Jenkins'] },
  { role: 'Senior Software Engineer', company: 'Sintec Informatik GmbH', period: 'Dec 2022 — Jun 2023', detail: 'Led backend and frontend delivery of Java/Spring Boot services and AngularJS applications, and designed secure REST APIs with OAuth2 and JWT. Contributed to AWS delivery patterns (S3, IAM, monitoring) and Jenkins/GitHub CI/CD with automated quality checks, alongside code reviews and mentoring.', tags: ['Java', 'Spring Boot', 'AngularJS', 'OAuth2', 'JWT', 'AWS', 'Jenkins'] },
  { role: 'Software Engineer · Full Stack (R&D)', company: 'Treasury Intelligence Solutions (TIS) · Heidelberg', period: 'Nov 2020 — Oct 2022', detail: 'Strengthened IAM, authentication, authorization and role-based access control for treasury systems serving 50K+ enterprise users, and addressed penetration-test findings. Reduced manual release effort by 60% with Docker and Jenkins CI/CD pipelines, and supported AWS infrastructure and monitoring.', tags: ['Java', 'Spring Boot', 'Hibernate', 'IAM', 'OAuth2', 'AWS', 'Docker', 'Jenkins'] },
  { role: 'Full Stack Developer', company: 'Form Solutions GmbH · Karlsruhe', period: 'May 2019 — Oct 2020', detail: 'Delivered React and VueJS front ends with Spring Boot backends and MongoDB, evaluated Kotlin with React/VueJS, and contributed to code reviews and Agile/Kanban practices.', tags: ['React', 'VueJS', 'Java', 'Kotlin', 'MongoDB', 'AWS', 'JUnit'] },
  { role: 'Software Developer · DevOps', company: 'Hermes Germany GmbH · Hamburg', period: 'Sep 2018 — Apr 2019', detail: 'Built CI/CD pipelines that cut deployments from hours to under 30 minutes, developed Java/Spring microservices for logistics systems handling 100K+ parcels a day, and set up Grafana, Kibana and Prometheus monitoring.', tags: ['Java', 'Spring', 'CI/CD', 'Grafana', 'Kibana', 'Prometheus'] },
  { role: 'Software Developer · Solution Design', company: 'Arvato SCM Solutions (Bertelsmann) · Germany', period: 'Jun 2016 — Aug 2018', detail: 'Built enterprise solutions for Volkswagen, Porsche, Audi and Zurich Insurance using Java Spring MVC, Angular/AngularJS, Kotlin and Docker. Started as an intern developing an internal Resource Planning Portal.', tags: ['Java', 'Spring MVC', 'Angular', 'Kotlin', 'Docker', 'MySQL'] },
];

const projects = [
  { number: '01', title: 'Cloud-native financial services', type: 'BACKEND · CLOUD', description: 'High-volume Java/Spring Boot microservices on GCP for enterprise financial workflows, supporting 2M+ daily transactions. Shown at a high level to respect client confidentiality.', stack: ['Java', 'Spring Boot', 'GCP', 'BigQuery', 'Pub/Sub', 'OAuth2'], points: ['30% lower backend latency through caching, asynchronous processing and tuning', '99.9% uptime and SLA adherence across distributed US/India teams', 'Secure APIs with OAuth2 / JWT and cloud-native monitoring'] },
  { number: '02', title: 'Streaming & batch data pipelines', type: 'DATA ENGINEERING', description: 'Reusable Apache Flink and Apache Beam frameworks, plus real-time and batch pipelines that move data through managed cloud services.', stack: ['Apache Flink', 'Apache Beam', 'Kafka', 'Pub/Sub', 'Dataflow', 'Airflow', 'BigQuery', 'PySpark'], points: ['Reusable frameworks so teams share transformation and processing patterns', 'Real-time streams on Kafka and Pub/Sub; scheduled batch loads through Airflow into BigQuery', 'Built for retries, observability and data quality, with Python/SQL validation and reconciliation tooling'] },
  { number: '03', title: 'CI/CD & release automation', type: 'DEVOPS', description: 'Automated build, test and deployment pipelines with containerized releases, applied across several employers.', stack: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub', 'Splunk', 'Grafana'], points: ['45% faster releases at Tecaholic and 60% less manual release effort at TIS', 'Deployments cut from hours to under 30 minutes at Hermes', 'Monitoring and log analysis with Splunk, Grafana, Kibana and Prometheus'] },
  { number: '04', title: 'Full-stack operations console', type: 'FULL STACK · CONCEPT', description: 'A concept project connecting a typed React interface to backend APIs for operational visibility and workflow management.', stack: ['React', 'TypeScript', 'Spring Boot', 'REST APIs'], points: ['Reusable, accessible UI components', 'API contracts and frontend types kept aligned', 'Clear loading, error and empty states'] },
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
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#projects" onClick={closeMenu}>Projects</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> SENIOR SOFTWARE ENGINEER <span className="eyebrow-divider">/</span> CLOUD, BACKEND & DATA</div>
          <h1>Engineering systems<br/>that <span className="gradient-text">scale with purpose.</span></h1>
          <p className="hero-intro">I’m Ramya, a software engineer with 10+ years of experience building dependable backend systems, cloud platforms and real-time and batch data pipelines for financial services.</p>
          <p className="hero-subtext">Java · Python · Spring Boot · GCP / AWS · Flink · Beam · Kafka · CI/CD</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a><a className="button button-quiet" href="#about">More about me <ArrowDown size={16}/></a><a className="cv-link" href="/Ramya_Dirsumilli_Senior_Software_Engineer_Tech_Lead.pdf" download>Download CV <ArrowUpRight size={14}/></a></div>
          <div className="social-row"><a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a><a href={links.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a><a href={links.email}><Mail size={16}/> Email</a></div>
        </div>
        <div className="hero-visual profile-visual" aria-label="Professional portrait of Ramya Dirsumilli">
          <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
          <div className="profile-photo-frame">
            <img className="profile-photo" src="/ramya-profile.jpg" alt="Ramya Dirsumilli, Senior Software Engineer" />
            <div className="profile-photo-shade" />
          </div>
        </div>
        <div className="visual-caption"><span className="caption-line"/> JAVA <span>·</span> CLOUD <span>·</span> DATA PIPELINES</div>
        <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Curiosity in the details.<br/><span className="muted-heading">Clarity in the architecture.</span></h2></div>
        <div className="about-grid"><div className="about-lead"><p className="large-copy">I turn complex engineering requirements into <span className="text-blue">maintainable, secure and production-minded software.</span></p><p>Over 10 years I have worked across financial services, logistics, insurance, automotive and treasury software in Germany, the USA and India. My focus today is backend engineering and data platforms: Java and Python services on GCP, reusable Apache Flink and Beam frameworks, and streaming and batch pipelines built on Kafka, Pub/Sub and Airflow.</p><p>I own work from design and code through CI/CD and monitoring to production support, mentor a small team, and use AI tools such as GitHub Copilot, ChatGPT and Claude to move faster while keeping every change reviewed.</p></div>
          <div className="about-aside"><div className="aside-card"><span className="aside-icon"><Server size={19}/></span><div><h3>Systems thinking</h3><p>Designing for reliability, security and maintainability, not just the happy path.</p></div></div><div className="aside-card"><span className="aside-icon"><Database size={19}/></span><div><h3>Data pipelines</h3><p>Real-time streams and scheduled batch loads, built for retries, observability and data quality.</p></div></div><div className="aside-card"><span className="aside-icon"><Cloud size={19}/></span><div><h3>Cloud-first delivery</h3><p>Managed services, automated releases and monitoring that keep production steady.</p></div></div><div className="aside-card"><span className="aside-icon"><Sparkles size={19}/></span><div><h3>AI-assisted engineering</h3><p>Copilot, ChatGPT and Claude for speed, with review and testing before anything ships.</p></div></div></div>
        </div>
      </section>

      <section className="experience section-wrap section-pad" id="experience">
        <div className="section-heading"><span className="section-index">02 / EXPERIENCE</span><h2>Experience that spans<br/><span className="muted-heading">products, platforms & teams.</span></h2><p className="section-description">Roles across enterprise engineering, financial technology and logistics, from full-stack development to cloud and data platforms.</p></div>
        <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={`${job.company}-${job.period}`}><div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div><div className="timeline-content"><div className="timeline-meta"><span>{job.period}</span>{i === 0 && <span className="current-label">MOST RECENT</span>}</div><h3>{job.role}</h3><div className="company-name">{job.company}</div><p>{job.detail}</p><div className="tag-row">{job.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="skills section-wrap section-pad" id="skills">
        <div className="section-heading"><span className="section-index">03 / TOOLKIT</span><h2>The tools behind<br/><span className="muted-heading">the outcomes.</span></h2><p className="section-description">Skills grouped by area: languages, data pipelines, cloud, delivery, observability, security and AI-assisted development.</p></div>
        <div className="skills-grid">{skills.map((group) => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={20}/></span><span className="skill-count">{String(group.items.length).padStart(2, '0')} SKILLS</span></div><h3>{group.title}</h3><div className="skill-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>; })}</div>
      </section>

      <section className="projects section-wrap section-pad" id="projects">
        <div className="section-heading project-heading"><div><span className="section-index">04 / SELECTED WORK</span><h2>Thoughtful engineering.<br/><span className="muted-heading">Real-world patterns.</span></h2></div></div>
        <div className="project-list">{projects.map(project => <article className={expandedProject === project.number ? 'project-card project-expanded' : 'project-card'} key={project.number}><button className="project-toggle" onClick={() => setExpandedProject(expandedProject === project.number ? null : project.number)} aria-expanded={expandedProject === project.number}><span className="project-number">{project.number}</span><span className="project-title-group"><span className="project-type">{project.type}</span><span className="project-title">{project.title}</span></span><span className="project-arrow"><ArrowUpRight size={19}/></span></button>{expandedProject === project.number && <div className="project-details"><p>{project.description}</p><div className="project-detail-grid"><div><h4>ENGINEERING FOCUS</h4><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul></div><div><h4>TECH STACK</h4><div className="tag-row">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></div></div>}</article>)}</div>
      </section>

      <section className="contact section-wrap section-pad" id="contact"><div className="contact-panel"><div className="contact-glow"/><span className="section-index">05 / CONTACT</span><h2>Have an interesting<br/>problem to <span className="gradient-text">solve?</span></h2><p>I’m interested in senior software engineering and tech lead roles where backend engineering, cloud platforms and data pipelines matter.</p><div className="contact-actions"><a className="button button-primary" href={links.email}>Get in touch <ArrowUpRight size={17}/></a><a className="button button-outline" href={links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin size={16}/></a></div></div></section>
    </main>
    <footer className="footer section-wrap"><a className="wordmark footer-mark" href="#home"><span className="wordmark-mark">R<span>.</span></span><span>RAMYA DIRSUMILLI</span></a><span>Designed for clarity. Built with React + TypeScript.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}

export default App;
