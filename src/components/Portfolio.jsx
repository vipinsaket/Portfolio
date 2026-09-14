import { useEffect, useRef, useState } from "react";
const GITHUB = "https://github.com/vipinsaket";
function useReducedMotion() {
  const [value, setValue] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const q = matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setValue(q.matches);
    q.addEventListener("change", change);
    return () => q.removeEventListener("change", change);
  }, []);
  return value;
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        aria-label="V I P home"
        onClick={() => setOpen(false)}
      >
        V I P<span className="brand-dot">.</span>
      </a>
      <nav
        id="main-navigation"
        className={open ? "is-open" : ""}
        aria-label="Main navigation"
      >
        {[
          ["home", "Home"],
          ["about", "About"],
          ["skills", "Stack"],
          ["projects", "Projects"],
          ["experience", "Experience"],
        ].map(([id, title]) => (
          <a
            key={id}
            href={"#" + id}
            aria-current={active === id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {title}
          </a>
        ))}
        <a
          className="mobile-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk ↗
        </a>
      </nav>
      <a className="nav-contact" href="#contact">
        Let’s talk <span>↗</span>
      </a>
      <button
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-controls="main-navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? "Close ×" : "Menu ☰"}
      </button>
    </header>
  );
}
const boot =
  "> booting system...\n> connecting to server... OK\n> initializing VIP.exe\n> welcome, I’m Vipin Kumar Saket";
export function Loader() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(reduce);
  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const interval = setInterval(
      () => setCount((n) => Math.min(n + 1, boot.length)),
      19,
    );
    const timeout = setTimeout(() => setDone(true), 2500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [reduce]);
  return (
    <div id="loader" className={done ? "done" : ""} aria-hidden="true">
      <div>
        <span className="brand">
          V I P<span>.</span>
        </span>
        <pre>{boot.slice(0, count)}</pre>
        <div className="loadbar" />
      </div>
    </div>
  );
}
const skillGroups = [
  [
    "Languages",
    [
      ["Java", "java"],
      ["C", "c"],
      ["C++", "cplusplus"],
      ["HTML", "html5"],
      ["CSS", "css3"],
      ["JavaScript", "javascript"],
    ],
  ],
  [
    "Backend technologies",
    [
      ["Spring Boot", "spring"],
      ["REST APIs"],
      ["JDBC"],
      ["Servlets"],
      ["Hibernate", "hibernate"],
      ["OOP"],
      ["Collections"],
    ],
  ],
  [
    "Databases",
    [["MySQL", "mysql"], ["PostgreSQL", "postgresql"], ["TimescaleDB"]],
  ],
  [
    "Tools & software",
    [
      ["Git", "git"],
      ["GitHub", "github"],
      ["Docker", "docker"],
      ["DBeaver", "dbeaver"],
      ["Flyway"],
      ["Postman", "postman"],
      ["IntelliJ IDEA", "intellij"],
      ["VS Code", "vscode"],
      ["Eclipse", "eclipse"],
      ["ClickUp"],
    ],
  ],
  [
    "Soft skills",
    [
      ["Problem Solving"],
      ["Team Collaboration"],
      ["Communication"],
      ["Time Management"],
    ],
  ],
];
const simple = {
  TimescaleDB: "timescale",
  Flyway: "flyway",
  ClickUp: "clickup",
};
export function Skills() {
  return (
    <div>
      {skillGroups.map(([title, items]) => (
        <div className="skill-group" key={title}>
          <h3>{title}</h3>
          <div className="skill-list">
            {items.map(([name, icon]) => (
              <div
                className={"skill" + (title === "Soft skills" ? " soft" : "")}
                key={name}
              >
                {icon || simple[name] ? (
                  <img
                    src={
                      icon
                        ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`
                        : `https://cdn.simpleicons.org/${simple[name]}/c4f56b`
                    }
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.hidden = true;
                    }}
                  />
                ) : title !== "Soft skills" ? (
                  <span className="skill-symbol">{"{}"}</span>
                ) : null}
                {name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
const sequence =
  "$ docker-compose up -d\n✔ Starting postgres_db ... done\n✔ Starting backend_service ... done\n\n$ mvn spring-boot:run\nStarting VipinPortfolioApplication...\nTomcat started on port 8080\nApplication started successfully ✔\n\n$ psql -U admin -d ems_db\nems_db=# SELECT status FROM system_health;\n status\n--------\n OK\n(1 row)";
export function Terminal() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(reduced);
  const [count, setCount] = useState(reduced ? sequence.length : 0);
  const pre = useRef(null);
  useEffect(() => {
    if (reduced) {
      setPaused(true);
      setCount(sequence.length);
    }
  }, [reduced]);
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(
      () => {
        setCount((n) => (n >= sequence.length ? 0 : n + 1));
      },
      count === sequence.length ? 3500 : 35,
    );
    return () => clearTimeout(timer);
  }, [paused, count]);
  useEffect(() => {
    if (pre.current) pre.current.scrollTop = pre.current.scrollHeight;
  }, [count]);
  return (
    <div className="terminal">
      <div className="windowbar">
        <div className="dots">
          <b />
          <b />
          <b />
        </div>
        <span>vip@dev ~</span>
        <button
          onClick={() => setPaused(!paused)}
          aria-label={(paused ? "Play" : "Pause") + " terminal animation"}
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>
      <pre
        id="terminal-output"
        ref={pre}
        aria-label="Simulated Docker, Java and SQL terminal"
      >
        {sequence.slice(0, count)}
      </pre>
    </div>
  );
}
const rows = [
  ["esc", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "⌫"],
  ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "\\"],
  ["caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", "↵"],
  ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "shift"],
  ["ctrl", "win", "alt", "SPACE", "alt", "←", "↓", "↑", "→"],
];
export function Keyboard() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduced || paused) return;
    const timer = setInterval(() => {
      if (!document.hidden) setStep((s) => (s + 1) % 8);
    }, 650);
    return () => clearInterval(timer);
  }, [reduced, paused]);
  const letter = step < 4 ? "JAVA"[step] : null;
  return (
    <section
      className={"keyboard-section reveal" + (paused ? " rgb-paused" : "")}
      aria-label="RGB mechanical Java keyboard"
    >
      <div className="section-label">04 / MY LANGUAGE OF CHOICE</div>
      <h2>
        Four letters. <span>Endless possibilities.</span>
      </h2>
      <div
        id="java-word"
        className={step === 4 ? "burst" : ""}
        aria-hidden="true"
      >
        {reduced ? "JAVA" : step < 4 ? "JAVA".slice(0, step + 1) : "JAVA"}
        <span>_</span>
      </div>
      <div className="keyboard mechanical" aria-hidden="true">
        <div className="keyboard-top">
          <span>V I P / MECHANICAL</span>
          <span className="rgb-indicator">RGB ●</span>
        </div>
        {rows.map((row, r) => (
          <div className="keyrow" key={r}>
            {row.map((key, k) => (
              <span
                key={k}
                className={
                  "key" +
                  (key === "SPACE"
                    ? " space"
                    : key.length > 1
                      ? " special"
                      : "") +
                  (key === letter && !reduced ? " pressed" : "")
                }
                style={{
                  "--key-hue": (r * 48 + k * 23) % 360,
                  "--key-delay": `${-(r * 0.3 + k * 0.17)}s`,
                }}
              >
                {key === "SPACE" ? (
                  <>
                    <span>JAVA</span>
                    <small>V I P</small>
                  </>
                ) : (
                  key
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="keyboard-caption">
        <p className="mono muted">TACTILE KEYS. COLOR IN MOTION.</p>
        <button
          className="motion-toggle"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
        >
          {paused ? "Play animation" : "Pause animation"}
        </button>
      </div>
    </section>
  );
}
let repoPromise;
function getRepos() {
  if (!repoPromise)
    repoPromise = fetch(
      "https://api.github.com/users/vipinsaket/repos?per_page=100",
    )
      .then((r) => {
        if (!r.ok) throw Error("GitHub unavailable");
        return r.json();
      })
      .catch(() => []);
  return repoPromise;
}
export function RepoMeta({ kind }) {
  const [repo, setRepo] = useState(null);
  useEffect(() => {
    let active = true;
    getRepos().then((repos) => {
      if (active)
        setRepo(
          repos.find((r) =>
            (kind === "chat" ? /chat.?bot/i : /school/i).test(r.name),
          ) || null,
        );
    });
    return () => {
      active = false;
    };
  }, [kind]);
  if (!repo) return null;
  return (
    <div className="repo-meta">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {repo.name} ↗
      </a>
      <p>
        ★ {repo.stargazers_count} · Updated{" "}
        {new Date(repo.updated_at).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })}
      </p>
      {repo.description && <p>{repo.description}</p>}
      {repo.homepage && /^https?:\/\//.test(repo.homepage) && (
        <a
          className="text-link"
          href={repo.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live demo ↗
        </a>
      )}
    </div>
  );
}
