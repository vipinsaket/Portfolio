import { useEffect } from "react";
import SplashCursor from "./components/SplashCursor";
import {
  Header,
  Loader,
  Skills,
  Keyboard,
  Terminal,
  RepoMeta,
} from "./components/Portfolio";
export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <SplashCursor
        DYE_RESOLUTION={768}
        SIM_RESOLUTION={96}
        PRESSURE_ITERATIONS={16}
      />
      <Loader />
      <Header />
      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <i></i>
              {" JAVA / SPRING BOOT DEVELOPER"}
            </div>
            <h1>
              {"Vipin Kumar"}
              <br />
              <span>{"Saket."}</span>
            </h1>
            <p className="hero-line">
              {"Good systems start"}
              <br />
              {"with a solid backend."}
            </p>
            <p className="muted intro">
              {"Building reliable backend systems with Java,"}
              <br className="desktop" />
              {" Spring Boot & PostgreSQL. Based in Indore, India."}
            </p>
            <div className="actions">
              <a
                className="button primary"
                href="https://github.com/vipinsaket"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"View projects "}
                <span>{"↗"}</span>
              </a>
              <a
                className="button"
                href={import.meta.env.BASE_URL + "Vipin_Kumar_Saket_Resume.pdf"}
                download
              >
                {"Download resume "}
                <span>{"↓"}</span>
              </a>
            </div>
            <a className="hero-contact text-link" href="#contact">
              {"Contact me ↗"}
            </a>
            <div className="hero-social">
              <a
                href="https://github.com/vipinsaket"
                target="_blank"
                rel="noopener"
              >
                {"GitHub ↗"}
              </a>
              <a
                href="https://linkedin.com/in/vipinsaket/"
                target="_blank"
                rel="noopener"
              >
                {"LinkedIn ↗"}
              </a>
              <span>{"22.7196° N, 75.8577° E"}</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit-label mono">{"// engineered to work."}</div>
            <div className="editor">
              <div className="windowbar">
                <div className="dots">
                  <b></b>
                  <b></b>
                  <b></b>
                </div>
                <span>{"Developer.java"}</span>
                <span className="dim">{"Java"}</span>
              </div>
              <div className="code">
                <div>
                  <em>{"01"}</em>
                  <span className="purple">{"@BackendDeveloper"}</span>
                </div>
                <div>
                  <em>{"02"}</em>
                  <span className="purple">{"public class "}</span>
                  <span className="lime">{"Vipin"}</span>
                  {" {"}
                </div>
                <div>
                  <em>{"03"}</em>
                </div>
                <div>
                  <em>{"04"}</em>
                  <span className="purple">{"String"}</span>
                  {" location = "}
                  <span className="str">{'"Indore, IN"'}</span>
                  {";"}
                </div>
                <div>
                  <em>{"05"}</em>
                  <span className="purple">{"String[]"}</span>
                  {" stack = {"}
                </div>
                <div>
                  <em>{"06"}</em>
                  <span className="str">{'"Java", "Spring Boot",'}</span>
                </div>
                <div>
                  <em>{"07"}</em>
                  <span className="str">{'"PostgreSQL", "Docker"'}</span>
                </div>
                <div>
                  <em>{"08"}</em>
                  {"  };"}
                </div>
                <div>
                  <em>{"09"}</em>
                </div>
                <div>
                  <em>{"10"}</em>
                  <span className="purple">{"public void "}</span>
                  <span className="lime">{"build"}</span>
                  {"() {"}
                </div>
                <div>
                  <em>{"11"}</em>
                  {"    solve();"}
                </div>
                <div>
                  <em>{"12"}</em>
                  {"    improve();"}
                </div>
                <div>
                  <em>{"13"}</em>
                  <span className="dim">{"// repeat."}</span>
                  <span className="caret">{"▏"}</span>
                </div>
                <div>
                  <em>{"14"}</em>
                  {"  }"}
                </div>
                <div>
                  <em>{"15"}</em>
                  {"}"}
                </div>
              </div>
              <div className="editor-bottom">
                <span>{"⑂ main"}</span>
                <span>
                  {"UTF-8 "}
                  <b>{"● Java"}</b>
                </span>
              </div>
            </div>
            <div className="system-badge">
              <span className="status-icon">{"✓"}</span>
              <div>
                {"Built for reliability"}
                <small>{"Clean code. Solid foundations."}</small>
              </div>
              <span className="lime">{"↗"}</span>
            </div>
          </div>
          <div className="hero-bottom mono">
            <span>{"BACKEND FIRST. DETAIL ALWAYS."}</span>
            <a href="#about">{"SCROLL TO EXPLORE ↓"}</a>
          </div>
        </section>
        <div className="stack-strip mono">
          <span>{"JAVA"}</span>
          <b>{"✳"}</b>
          <span>{"SPRING BOOT"}</span>
          <b>{"✳"}</b>
          <span>{"POSTGRESQL"}</span>
          <b>{"✳"}</b>
          <span>{"DOCKER"}</span>
          <b>{"✳"}</b>
          <span>{"REST APIs"}</span>
          <b>{"✳"}</b>
          <span>{"CLEAN CODE"}</span>
        </div>
        <section id="about" className="section reveal">
          <div className="section-label">{"01 / ABOUT ME"}</div>
          <div className="about-grid">
            <h2>
              {"Behind every great app,"}
              <br />
              {"there’s a "}
              <span>{"thoughtful backend."}</span>
            </h2>
            <div>
              <p>
                {
                  "I’m Vipin, a backend developer who enjoys turning complex problems into clean, dependable software."
                }
              </p>
              <p className="muted">
                {
                  "At Nextloop Technology, I contribute to Energy Management System and CRM applications — building REST APIs, integrating databases, and improving the code that keeps things running."
                }
              </p>
              <a className="text-link" href="#contact">
                {"Let’s build something together ↗"}
              </a>
            </div>
          </div>
          <div className="facts">
            <div>
              <strong>
                {"400"}
                <span>{"+"}</span>
              </strong>
              <p>{"DSA problems solved"}</p>
            </div>
            <div>
              <strong>
                {"5"}
                <span>{"★"}</span>
              </strong>
              <p>{"HackerRank Java"}</p>
            </div>
            <div>
              <strong>
                {"8.22"}
                <span>{"/10"}</span>
              </strong>
              <p>{"B.Tech CSE · CGPA"}</p>
            </div>
            <div>
              <strong>
                {"Backend"}
                <span>{"↗"}</span>
              </strong>
              <p>{"Java · APIs · Databases"}</p>
            </div>
          </div>
        </section>
        <section id="skills" className="section reveal">
          <div className="section-label">{"02 / THE TOOLKIT"}</div>
          <div className="section-heading">
            <h2>
              {"My everyday "}
              <span>{"stack."}</span>
            </h2>
            <p className="muted">{"The right tools. A strong foundation."}</p>
          </div>
          <Skills />
        </section>
        <section id="terminal" className="section terminal-section reveal">
          <div>
            <div className="section-label">{"03 / UNDER THE HOOD"}</div>
            <h2>
              {"From code"}
              <br />
              {"to "}
              <span>{"running systems."}</span>
            </h2>
            <p className="muted">
              {"Containers up. Database connected."}
              <br />
              {"One command closer to something useful."}
            </p>
            <div className="terminal-tags mono">
              <span>{"DOCKER"}</span>
              <span>{"JAVA"}</span>
              <span>{"SQL"}</span>
            </div>
            <p className="simulation mono">{"ANIMATED DEVELOPMENT DEMO"}</p>
          </div>
          <Terminal />
        </section>
        <Keyboard />
        <section id="projects" className="section reveal">
          <div className="section-label">{"05 / SELECTED WORK"}</div>
          <div className="section-heading">
            <h2>
              {"Ideas, "}
              <span>{"implemented."}</span>
            </h2>
            <a
              className="text-link"
              href="https://github.com/vipinsaket"
              target="_blank"
              rel="noopener"
            >
              {"Explore GitHub ↗"}
            </a>
          </div>
          <div className="projects">
            <article className="project">
              <div className="project-art chatbot">
                <div className="mini-chat">
                  <div className="mini-title">
                    {"✳ spring.ai "}
                    <span>{"AI CHATBOT"}</span>
                  </div>
                  <div className="chat-bubble">
                    {"How does a great backend feel?"}
                  </div>
                  <div className="chat-answer">
                    {"Fast. Reliable. Effortless."}
                    <br />
                    <span>{"Let’s build it together."}</span>
                    <b>{"▍"}</b>
                  </div>
                  <div className="chat-input">
                    {"Ask anything… "}
                    <span>{"↑"}</span>
                  </div>
                </div>
                <span className="art-index">{"01 / AI + JAVA"}</span>
              </div>
              <div className="project-content">
                <div className="project-date mono">{"MAY — JUN 2025"}</div>
                <h3>{"AI Chatbot"}</h3>
                <p className="muted">
                  {
                    "An adaptive conversational app powered by Spring Boot and the OpenAI API, with RESTful integration and a responsive web interface."
                  }
                </p>
                <ul>
                  <li>
                    {
                      "Contributed 80%+ of backend logic; improved response efficiency by 30%."
                    }
                  </li>
                  <li>
                    {
                      "Modular OOP and exception handling reduced runtime errors by 40%."
                    }
                  </li>
                  <li>
                    {
                      "HTML, CSS & JavaScript interface with 95% cross-device responsiveness."
                    }
                  </li>
                </ul>
                <div className="tags">
                  <span>{"Spring Boot"}</span>
                  <span>{"OpenAI API"}</span>
                  <span>{"Java"}</span>
                </div>
                <a
                  className="project-link"
                  data-repo="chat"
                  href="https://github.com/vipinsaket?tab=repositories"
                  target="_blank"
                  rel="noopener"
                >
                  {"View on GitHub "}
                  <span>{"↗"}</span>
                </a>
                <RepoMeta kind="chat" />
              </div>
            </article>
            <article className="project">
              <div className="project-art school">
                <div className="mini-dashboard">
                  <div className="mini-title">
                    {"▦ campus"}
                    <span>{"OVERVIEW"}</span>
                  </div>
                  <div className="dashboard-title">{"School, simplified."}</div>
                  <div className="mini-stats">
                    <div>
                      {"Students"}
                      <b>{"Manage"}</b>
                    </div>
                    <div>
                      {"Teachers"}
                      <b>{"Connect"}</b>
                    </div>
                    <div>
                      {"Attendance"}
                      <b>{"Track"}</b>
                    </div>
                  </div>
                  <div className="table-line">
                    <span>{"Student records"}</span>
                    <b>{"● Connected"}</b>
                  </div>
                  <div className="table-line">
                    <span>{"Attendance management"}</span>
                    <b>{"● Connected"}</b>
                  </div>
                  <div className="table-line">
                    <span>{"MySQL database"}</span>
                    <b>{"● Connected"}</b>
                  </div>
                </div>
                <span className="art-index">{"02 / JAVA + MYSQL"}</span>
              </div>
              <div className="project-content">
                <div className="project-date mono">{"MAR — APR 2025"}</div>
                <h3>{"School Management System"}</h3>
                <p className="muted">
                  {
                    "A central place for student, teacher, and attendance management. Built with Java Servlets, JDBC, and secure MySQL CRUD operations."
                  }
                </p>
                <ul>
                  <li>
                    {"Automated manual workflows with 99.9% data reliability."}
                  </li>
                  <li>{"Cross-browser web interface improved UX by 85%."}</li>
                  <li>
                    {
                      "Scalable OOP structure made future module integration 50% easier."
                    }
                  </li>
                </ul>
                <div className="tags">
                  <span>{"Java Servlets"}</span>
                  <span>{"JDBC"}</span>
                  <span>{"MySQL"}</span>
                </div>
                <a
                  className="project-link"
                  data-repo="school"
                  href="https://github.com/vipinsaket?tab=repositories"
                  target="_blank"
                  rel="noopener"
                >
                  {"View on GitHub "}
                  <span>{"↗"}</span>
                </a>
                <RepoMeta kind="school" />
              </div>
            </article>
          </div>
        </section>
        <section id="experience" className="section reveal">
          <div className="section-label">{"06 / THE JOURNEY"}</div>
          <h2>
            {"Learning by "}
            <span>{"building."}</span>
          </h2>
          <div className="experience">
            <div className="experience-date mono">
              {"JUL 2026 — PRESENT"}
              <span className="current">{"CURRENT"}</span>
            </div>
            <div>
              <h3>{"Tech Intern · Java / Backend Development"}</h3>
              <h4>{"Nextloop Technology"}</h4>
              <ul>
                <li>
                  {
                    "Contribute REST APIs and backend features to Energy Management System (EMS) and CRM applications using Java and Spring Boot."
                  }
                </li>
                <li>
                  {
                    "Integrate PostgreSQL, manage Flyway schema migrations, and troubleshoot Docker development environments."
                  }
                </li>
                <li>
                  {
                    "Develop, test, and debug clean, modular backend functionality using OOP principles."
                  }
                </li>
                <li>
                  {
                    "Manage tasks in ClickUp; create, investigate, and resolve GitHub issues."
                  }
                </li>
                <li>
                  {
                    "Participate in code reviews, address feedback, and collaborate on Git/GitHub pull requests."
                  }
                </li>
              </ul>
            </div>
          </div>
          <div className="experience">
            <div className="experience-date mono">{"OCT — DEC 2022"}</div>
            <div>
              <h3>{"Salesforce Developer Virtual Internship"}</h3>
              <h4>{"Salesforce · 8-week program"}</h4>
              <p className="muted">
                {
                  "Completed Salesforce fundamentals, Apex, and Lightning Web Components (LWC). Earned Trailhead Super Badges in Apex Specialist and Process Automation Specialist."
                }
              </p>
            </div>
          </div>
          <div className="credentials">
            <div>
              <span>{"↗ CERTIFICATION"}</span>
              <h4>{"Java Full Stack Developer"}</h4>
              <p>{"JSpiders Institute, Bengaluru"}</p>
            </div>
            <div>
              <span>{"↗ EDUCATION · 2020–2024"}</span>
              <h4>{"B.Tech · Computer Science & Engineering"}</h4>
              <p>{"Lakshmi Narain College of Technology · CGPA 8.22/10"}</p>
            </div>
          </div>
        </section>
        <section id="contact" className="section contact reveal">
          <div className="section-label">{"07 / LET’S CONNECT"}</div>
          <h2>
            {"Have something"}
            <br />
            {"in mind? "}
            <span>{"Let’s build it."}</span>
          </h2>
          <a className="contact-email" href="mailto:vipinkumar11135@gmail.com">
            {"vipinkumar11135@gmail.com "}
            <span>{"↗"}</span>
          </a>
          <div className="contact-bottom">
            <p>
              {"Indore, Madhya Pradesh, India"}
              <br />
              <a href="tel:+917477097929">{"(+91) 7477097929"}</a>
            </p>
            <div>
              <a
                href="https://github.com/vipinsaket"
                target="_blank"
                rel="noopener"
              >
                {"GitHub ↗"}
              </a>
              <a
                href="https://linkedin.com/in/vipinsaket/"
                target="_blank"
                rel="noopener"
              >
                {"LinkedIn ↗"}
              </a>
              <a href="https://vipinsaket.github.io/Portfolio/" target="_blank" rel="noopener">
                {"VipinSaket.com ↗"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a className="brand" href="#home" aria-label="V I P \u2014 home">
          {"V I P"}
        </a>
        <p>
          {"© "}
          <span>{new Date().getFullYear()}</span>
          {" Vipin Kumar Saket"}
        </p>
        <a href="#home">{"Back to top ↑"}</a>
      </footer>
    </>
  );
}
