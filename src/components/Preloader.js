import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Ship } from "./Art";
import { reduced } from "../lib";

// Route in design coordinates; the SVG viewBox crops it to 100..1340 x 30..140.
const VB = { x: 100, y: 30, w: 1240, h: 110 };
const ROUTE = "M120 120 Q420 40 720 90 T1320 60";
const LINES = ["Raising the anchor…", "Charting the Grand Line", "Reading the Log Pose…", "Land ho!"];

const PreLoader = ({ onReveal, onDone }) => {
  const rootRef = useRef(null);
  const pathRef = useRef(null);
  const shipRef = useRef(null);
  const tlRef = useRef(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    const len = path.getTotalLength();
    const r = reduced();
    const state = { p: 0 };
    const place = (p) => {
      const pt = path.getPointAtLength(len * p);
      shipRef.current.style.left = `${((pt.x - VB.x) / VB.w) * 100}%`;
      shipRef.current.style.top = `${((pt.y - VB.y) / VB.h) * 100}%`;
    };
    place(r ? 0.6 : 0);
    document.body.style.overflow = "hidden";

    const finish = () => {
      document.body.style.overflow = "";
      onReveal();
      if (r) return onDone();
      gsap.to(rootRef.current, { yPercent: -110, duration: 0.5, ease: "power2.in", onComplete: onDone });
    };

    const tl = gsap.timeline({ onComplete: finish });
    tl.to(state, {
      p: 1,
      duration: r ? 0.4 : 1.6,
      ease: r ? "none" : "power1.inOut",
      onUpdate: () => {
        if (!r) place(0.04 + state.p * 0.9);
        setPct(Math.round(state.p * 100));
      },
    });
    tl.to({}, { duration: 0.2 }); // beat on "Land ho!"
    tlRef.current = tl;

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  const skip = (e) => {
    e.preventDefault();
    tlRef.current?.progress(1);
  };

  const line = LINES[Math.min(LINES.length - 1, Math.floor(pct / 34))];
  const status = pct >= 100 ? LINES[3] : line;

  return (
    <div className="preloader" ref={rootRef}>
      <div className="pre-dots" aria-hidden="true" />
      <div className="pre-sun" aria-hidden="true" />
      <div className="pre-sea" aria-hidden="true" />
      <div className="pre-horizon" aria-hidden="true" />

      <div className="pre-route">
        <svg viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`} aria-hidden="true">
          <path ref={pathRef} d={ROUTE} fill="none" stroke="#F2C14E" strokeWidth="4" strokeDasharray="10 12" strokeLinecap="round" />
          <circle cx="1320" cy="60" r="12" fill="none" stroke="#F2C14E" strokeWidth="4" />
          <path d="M1312 52 L1328 68 M1328 52 L1312 68" stroke="#D62828" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <div className="pre-ship" ref={shipRef}>
          <Ship label="Small ship sailing along the route" stroke={5} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      <div className="pre-text">
        <div className="display pre-title" role="status">
          Setting sail…
        </div>
        <div className="pre-bar" role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100" aria-label="Loading">
          <div className="rope-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="pre-status">
          <span>
            {pct}% · {status}
          </span>
          <span className="sep" aria-hidden="true">
            ·
          </span>
          <span>Next stop: the Deck</span>
        </div>
      </div>

      <a className="pre-skip" href="#deck" onClick={skip}>
        Skip intro
      </a>

      <svg className="pre-wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 H1440 V30 Q1380 60 1320 30 T1200 30 T1080 30 T960 30 T840 30 T720 30 T600 30 T480 30 T360 30 T240 30 T120 30 T0 30 Z" />
      </svg>
    </div>
  );
};

export default PreLoader;
