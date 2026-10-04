import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Builtcard from "./Builtcard";
import CustomModal from "./CustomModal";
import { batchIn } from "../lib";
import Npm from "../static/npm.png";
import Swiggy from "../static/swiggy.png";
import Generator from "../static/generator.png";
import Pdf from "../static/pdfextractor.png";
import ManishGPT from "../static/manishgpt.png";
import Resume from "../static/resume.png";

const projects = [
  {
    heading: "ManishGPT",
    tagline: "Multi-Agent LLM Platform",
    img: ManishGPT,
    alt: "ManishGPT landing page: AI teams that chat with you",
    technologies: ["React", "FastAPI", "pgvector", "Redis", "Docker", "AWS EC2"],
    liveurl: "https://app.manishbatchu.com",
    route: ["Idea", "FastAPI + agents", "Live on EC2"],
    blurb: "Multi-agent LLM platform with cost-aware model routing, pgvector retrieval and streamed replies — Dockerized on AWS EC2.",
    description:
      "A production-ready multi-agent AI platform with LLM orchestration, cost-aware model routing, and role-based autonomous agents. Uses pgvector embeddings for semantic retrieval, streams responses to a React UI, and runs as Dockerized microservices (FastAPI, PostgreSQL, Redis, MinIO) behind a reverse proxy on AWS EC2, with Redis-backed rate limiting and response caching.",
  },
  {
    heading: "Folio — AI Resume Tailor",
    img: Resume,
    alt: "Folio app screen: Tell us what you are building",
    technologies: ["FastAPI", "Claude API", "SQLite", "MinIO", "LaTeX", "Docker"],
    liveurl: "https://resume.manishbatchu.com/",
    blurb: "Tailors a resume to a job description with Claude, section by section, with side-by-side review and a LaTeX-compiled PDF.",
    description:
      "A web app that tailors a resume to a job description with Claude. Sign in with Google, upload a resume PDF and paste a job description. Claude extracts the resume into structured JSON and rewrites the summary, skills, experience and projects section by section. You review each change side by side, accept or reject it, and download a PDF compiled from a LaTeX template with Tectonic. Contact details and education are never sent to the model, and any rewritten section containing a number missing from the original is flagged and defaults to rejected.",
  },
  {
    heading: "PDF Invoice Extractor",
    img: Pdf,
    alt: "GitHub repository page for pdfextractor",
    technologies: [".NET", "AWS Textract", "AWS S3"],
    githuburl: "https://github.com/B-Manish/pdfextractor",
    blurb: "Extracts text from PDF invoices and turns it into structured CSV — invoice wrangling, automated.",
    description:
      "Developed a PDF Invoice Text Extractor using .NET that automates the process of extracting textual data from PDF invoices and converts it into a structured CSV format. This tool simplifies invoice data handling for businesses or individuals managing large volumes of invoices.",
  },
  {
    heading: "Profile Generator",
    img: Generator,
    alt: "Profile Generator editor with live preview",
    technologies: ["React", "Netlify", "Lambda", "API Gateway", "S3", "Express.js"],
    githuburl: "https://github.com/B-Manish/ProfileGenerator",
    blurb: "Type in your details, get a personal website hosted on Netlify with its own shareable URL.",
    description:
      "Developed a dynamic profile website generator using React, enabling users to input their personal details—such as name, experience, projects, and hobbies—and automatically generate a personalized website. The application hosts the website on Netlify and provides users with a unique URL for easy access and sharing.",
  },
  {
    heading: "Cloud Food Ordering",
    img: Swiggy,
    alt: "Food ordering app home with restaurant cards",
    technologies: ["React", "FastAPI", "Lambda", "API Gateway", "Amplify", "EC2", "DynamoDB"],
    githuburl: "https://github.com/B-Manish/FullStackApp",
    blurb: "Full-stack food ordering: React up front, FastAPI on Lambda, API Gateway, EC2, DynamoDB and S3 behind.",
    description:
      "Developed a full-stack food ordering application using React for the frontend and FastAPI for the backend. The backend APIs are hosted on AWS, utilizing Lambda for serverless functions, API Gateway for routing, EC2 and DynamoDB for compute, and S3 for storage.",
  },
  {
    heading: "react-virtualize-manish",
    img: Npm,
    alt: "npm package page for react-virtualize-manish",
    technologies: ["React", "webpack", "npm"],
    githuburl: "https://github.com/B-Manish/ggpackage",
    liveurl: "https://www.npmjs.com/package/react-virtualize-manish",
    npm: true,
    iphone: true,
    blurb: "A React virtualization package: renders only what is visible, so huge lists load fast and stay light.",
    description:
      "Developed a React package that optimizes rendering performance by implementing virtualization. This package allows for efficient rendering of large data sets by only displaying visible elements, significantly improving load times and reducing memory usage. This package is ideal for developers looking to enhance the performance of their React applications, especially those handling dynamic and large lists.",
  },
];

const TILTS = [-1.5, 1.2, -0.8, 1.6, -1.2, 0.9];

// Playful math, labelled as such on the board: crimes (stack) × ฿100M.
const bountyOf = (p) => (p.technologies.length * 100).toLocaleString("en-US") + ",000,000";
const statusOf = (p) => (p.npm ? "ON NPM · AND · GITHUB" : p.liveurl ? (p.githuburl ? "LIVE · AND · ON GITHUB" : "LIVE · ON THE SEAS") : "WANTED · ON GITHUB");

function Built() {
  const ref = useRef(null);
  const [open, setOpen] = useState(null);
  const [slide, setSlide] = useState(0);

  useGSAP(() => batchIn(".poster", { opacity: 0, y: -40 }), { scope: ref });

  const onBoardScroll = (e) => {
    const board = e.currentTarget;
    const step = board.firstElementChild.offsetWidth + 18;
    setSlide(Math.min(projects.length - 1, Math.round(board.scrollLeft / step)));
  };

  return (
    <section id="bounty" className="wood" aria-labelledby="bounty-h" ref={ref}>
      <div className="bounty-inner">
        <div className="bounty-head">
          <div>
            <p className="eyebrow">03 · Bounty Board</p>
            <h2 id="bounty-h" className="display h2">
              Most wanted builds
            </h2>
            <p className="bounty-intro">
              Each poster lists the crimes (stack) committed. Bounty = crimes × ฿100M. Click a poster for the full treasure map.
            </p>
            <p className="swipe-meta" aria-live="polite">
              Swipe the board · {slide + 1} of {projects.length}
            </p>
          </div>
          <span className="display sfx-word sfx-zoom" aria-hidden="true">
            ZOOM!
          </span>
        </div>

        <div className="board" onScroll={onBoardScroll}>
          {projects.map((p, i) => (
            <Builtcard key={p.heading} {...p} tilt={TILTS[i % TILTS.length]} bounty={bountyOf(p)} status={statusOf(p)} onOpen={() => setOpen(i)} />
          ))}
        </div>
        <div className="dots" aria-hidden="true">
          {projects.map((p, i) => (
            <span key={p.heading} className={i === slide ? "on" : undefined} />
          ))}
        </div>
      </div>

      <CustomModal project={open === null ? null : { ...projects[open], index: open, bounty: bountyOf(projects[open]) }} handleClose={() => setOpen(null)} />
    </section>
  );
}

export default Built;
