import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { batchIn, reduced } from "../lib";

// Newest first, as before; rendered oldest-first so the route reads chronologically.
const jobs = [
  {
    company: "Innings2",
    title: "AI Engineer",
    period: "May 2025 – Present",
    current: true,
    points: [
      "Architecting a multi-agent orchestration platform using the Agno framework and FastAPI, enabling LLM-powered task-specific agents, real-time dashboards, and automated data workflows.",
      "Designed a pluggable agent-tool architecture with dynamic agents and tools (schema loaders, data analysts, dashboard generators).",
      "Co-designed the distributed task scheduler for recurring and trigger-based agent workflows.",
      "Implemented MinIO signed URLs for time-bound, secure access to AI-generated artifacts.",
      "Engineered centralized structured logging with log rotation for production-grade observability.",
      "Integrated cURL command execution so agents can call external APIs through natural language workflows.",
    ],
  },
  {
    company: "Psiog Digital",
    title: "Software Engineer",
    period: "Jun 2022 – May 2025",
    points: [
      "Built scalable React frontends integrated with AWS services (Lambda, API Gateway, EC2, S3, DynamoDB).",
      "Specialized in virtualized UIs, optimizing DOM rendering and data handling for large datasets, for a 60% performance improvement.",
      "Built and deployed a customized documentation platform using Docusaurus within 3 months.",
      "Raised unit and integration test coverage from 60% to 87%.",
    ],
  },
];

const Island = () => (
  <svg className="marker-desk" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
    <path d="M6 46 Q32 20 58 46 Z" fill="#2E7D4F" stroke="#1A1410" strokeWidth="3" />
    <path d="M4 46 H60" stroke="#F2C14E" strokeWidth="4" strokeLinecap="round" />
    <path d="M36 34 L36 14" stroke="#1A1410" strokeWidth="3" />
    <path d="M36 14 Q26 10 22 18 M36 14 Q46 8 50 16 M36 14 Q36 6 30 6" fill="none" stroke="#2E7D4F" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const LogPose = () => (
  <svg className="marker-desk" width="76" height="76" viewBox="0 0 76 76" aria-hidden="true">
    <circle cx="38" cy="38" r="30" fill="#0B1F3A" stroke="#F2C14E" strokeWidth="4" />
    <circle cx="38" cy="38" r="22" fill="rgba(46,196,182,.25)" stroke="#F4F1E8" strokeWidth="2" />
    <path d="M38 18 L44 38 L38 58 L32 38 Z" fill="#D62828" stroke="#1A1410" strokeWidth="2" />
    <path d="M38 38 L44 38 L38 58 L32 38 Z" fill="#F4F1E8" />
    <circle cx="38" cy="38" r="3" fill="#1A1410" />
  </svg>
);

const SHOWN = 4;

function Stop({ job, index }) {
  const [expanded, setExpanded] = useState(false);
  const right = index % 2 === 1;
  const extra = job.points.length - SHOWN;
  return (
    <li className={`stop${right ? " right" : ""}`}>
      <article className={`island-card${job.current ? " current" : ""}${expanded ? " expanded" : ""}`}>
        {job.current && <p className="display here">You are here</p>}
        <div className="card-head">
          <h3 className="display">{job.company}</h3>
          <span className="dates">{job.period}</span>
        </div>
        <p className="job-role">
          {job.title}
          <span className="dates"> · {job.period}</span>
        </p>
        <ul id={`log-${index}`}>
          {job.points.map((p, i) => (
            <li key={p} className={i >= SHOWN ? "extra" : undefined}>
              {p}
            </li>
          ))}
        </ul>
        {extra > 0 && (
          <button type="button" className="show-all" aria-expanded={expanded} aria-controls={`log-${index}`} onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show fewer ▴" : `Show all ${job.points.length} log entries ▾`}
          </button>
        )}
      </article>
      <div className="marker">
        {job.current ? <LogPose /> : <Island />}
        <span className="marker-dot" aria-hidden="true" />
      </div>
      <div className="stop-label">
        <span className="display">{job.current ? `Island ${index + 1} · you are here` : `Island ${index + 1} · where the voyage began`}</span>
      </div>
    </li>
  );
}

function Worked() {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (!reduced()) {
        gsap.fromTo(
          ".route-line",
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".route", start: "top 70%", end: "bottom 70%", scrub: true } }
        );
      }
      batchIn(".stop:not(.right) .island-card", { opacity: 0, x: -40 });
      batchIn(".stop.right .island-card", { opacity: 0, x: 40 });
    },
    { scope: ref }
  );

  return (
    <section id="voyages" className="chart" aria-labelledby="voy-h" ref={ref}>
      <div className="voy-inner">
        <p className="eyebrow">02 · Crew Voyages</p>
        <h2 id="voy-h" className="display h2">
          Islands I've docked at
        </h2>
        <p className="voy-intro">Follow the Log Pose — every island taught me a new way to keep a ship afloat.</p>

        <ol className="route">
          <li className="route-line" aria-hidden="true" />
          {[...jobs].reverse().map((job, i) => (
            <Stop job={job} index={i} key={job.company} />
          ))}
          <li className="stop fog">
            <a className="fog-link" href="#snail">
              <span className="display fog-title">Next island: your crew?</span>
              <span className="fog-sub">The fog's thick past here. Send a signal and chart it with me →</span>
            </a>
            <div className="marker">
              <span className="fog-dot" aria-hidden="true" />
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Worked;
