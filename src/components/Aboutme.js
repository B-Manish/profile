import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import profile from "../static/profile.JPG";
import { BoltIcon } from "./Art";
import { batchIn, reduced } from "../lib";

const HAKI = [
  { tech: "React", power: "Observation Haki", line: "Sees every re-render coming.", color: "#2EC4B6" },
  { tech: "FastAPI", power: "Armament Haki", line: "Hardened, typed, fast endpoints.", color: "#F77F00" },
  { tech: "Python (LLMs)", power: "Conqueror's Haki", line: "Commands whole crews of agents.", color: "#D62828" },
  { tech: "PostgreSQL", power: "Log Pose Memory", line: "Never forgets where it has been.", color: "#F2C14E" },
  { tech: "AWS", power: "Sky Island Ops", line: "Keeps things afloat in the clouds.", color: "#8FC1E3" },
  { tech: "Docker", power: "Ship-in-a-Bottle", line: "Everything packed, nothing spills.", color: "#B9A0E8" },
];

const TORN =
  "M0 0 H1440 V10 L1410 22 L1380 8 L1340 20 L1300 6 L1262 18 L1220 9 L1180 24 L1140 8 L1098 19 L1060 6 L1020 20 L980 10 L940 22 L900 7 L860 19 L820 8 L780 23 L740 9 L700 20 L660 6 L620 18 L580 10 L540 24 L500 8 L460 19 L420 7 L380 21 L340 9 L300 22 L260 8 L220 19 L180 6 L140 21 L100 9 L60 20 L20 8 L0 16 Z";

function Aboutme() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const poster = ref.current.querySelector(".wanted");
      if (reduced()) {
        gsap.from(poster, { opacity: 0, duration: 0.2, scrollTrigger: { trigger: poster, start: "top 85%" } });
      } else {
        gsap.fromTo(
          poster,
          { y: -40, rotation: -8, opacity: 0 },
          { y: 0, rotation: 2, opacity: 1, duration: 0.6, ease: "back.out(1.6)", clearProps: "transform", scrollTrigger: { trigger: poster, start: "top 85%" } }
        );
      }
      batchIn(".haki-card", { opacity: 0, y: 20 }, { stagger: 0.06 });
    },
    { scope: ref }
  );

  return (
    <section id="log" className="log paper" aria-labelledby="log-h" ref={ref}>
      <svg className="torn" aria-hidden="true" viewBox="0 0 1440 26" preserveAspectRatio="none">
        <path d={TORN} />
      </svg>
      <div className="log-inner">
        <div className="log-head">
          <p className="eyebrow">01 · Captain's Log</p>
          <h2 id="log-h" className="display h2">
            Who's steering this ship?
          </h2>
        </div>

        <div className="log-copy">
          <p>
            Hello! I'm Manish — a full stack AI engineer who set sail on the frontend and now builds end-to-end systems, from polished React
            interfaces to LLM-powered backends.
          </p>
          <p>
            At Innings2 I architect multi-agent platforms with FastAPI and the Agno framework. On the side I built and deployed ManishGPT, a
            multi-agent LLM platform with model routing and pgvector search, running as Dockerized services on AWS EC2. I like turning rough
            seas into reliable, production-ready software.
          </p>
          <p className="abilities">My abilities, as of this log entry:</p>
          <div className="haki-grid">
            {HAKI.map((h) => (
              <div className="haki haki-card" key={h.tech}>
                <div className="haki-top">
                  <span className="haki-dot" aria-hidden="true" style={{ background: h.color }}>
                    <BoltIcon />
                  </span>
                  <span className="haki-tech">{h.tech}</span>
                </div>
                <div className="display haki-power">{h.power}</div>
                <div className="haki-line">{h.line}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="log-poster">
          <figure className="wanted">
            <span className="pin" aria-hidden="true" />
            <div className="rye wanted-title">WANTED</div>
            <div className="wanted-photo">
              <img src={profile} alt="Portrait of Manish Batchu smiling, wearing glasses" width="290" height="290" />
            </div>
            <div className="rye wanted-sub">DEPLOYED OR LOCALHOST</div>
            <figcaption className="rye">MANISH BATCHU</figcaption>
            <div className="wanted-bounty">
              <span className="rye" style={{ fontSize: 26 }}>
                ฿
              </span>
              <span className="rye" style={{ fontSize: 30, letterSpacing: ".02em" }}>
                4,000,000,000
              </span>
              <span className="rye" style={{ fontSize: 22 }}>
                -
              </span>
            </div>
            <div className="wanted-note">one billion per year at sea · 4+ yrs · 8 ships launched</div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
