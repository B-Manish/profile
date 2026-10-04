import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import { Ship, StrawHat, Waves } from "./Art";
import { reduced, sfx } from "../lib";

const CONFETTI = ["#F2C14E", "#D62828", "#2EC4B6", "#F77F00", "#F4F1E8"];

function Home() {
  const ref = useRef(null);
  const timer = useRef(0);
  const [yoho, setYoho] = useState(0); // bumps per tip so confetti replays

  useGSAP(
    () => {
      if (reduced()) return;
      gsap.to(".cloud-layer", { y: -60, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true } });
    },
    { scope: ref }
  );

  const tipHat = () => {
    setYoho((n) => n + 1);
    sfx.play("yohoho");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setYoho(0), 1800);
  };

  return (
    <section id="deck" className="hero halftone" ref={ref}>
      <div className="cloud-layer" aria-hidden="true">
        <div className="cloud c1" />
        <div className="cloud c2" />
      </div>
      <div className="sun" aria-hidden="true" />
      <div className="sun-ring" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <button className="hat gg" type="button" aria-label="Tip the straw hat" onClick={tipHat}>
            <StrawHat weave />
            <AnimatePresence>
              {yoho > 0 && (
                <motion.span
                  key="bubble"
                  className="display yoho"
                  role="status"
                  initial={{ opacity: 0, scale: 0.6, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 420, damping: 18 }}
                >
                  Yohohoho!
                </motion.span>
              )}
            </AnimatePresence>
            {yoho > 0 &&
              !reduced() &&
              Array.from({ length: 20 }, (_, i) => {
                const a = (i / 20) * Math.PI * 2;
                const d = 60 + (i % 4) * 22;
                return (
                  <motion.span
                    key={`${yoho}-${i}`}
                    className="confetti"
                    aria-hidden="true"
                    style={{ background: CONFETTI[i % CONFETTI.length] }}
                    initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                    animate={{ x: Math.cos(a) * d, y: Math.sin(a) * d + 40, opacity: 0, rotate: 360 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                );
              })}
          </button>
          <p className="kicker gg">Ahoy — the name's</p>
          <h1 className="display gg">Manish Batchu</h1>
          <p className="display tagline gg">
            <span className="g5-hide">Aspiring King of the Developers.</span>
            <span className="g5-only">The most ridiculous theme on the sea.</span>
          </p>
          <p className="lead gg">I build things that float — and a few that fly.</p>
          <p className="hero-bio gg">
            Full Stack AI Engineer with 4+ years at sea: React frontends, FastAPI backends and multi-agent LLM systems deployed on AWS.
          </p>
          <div className="cta-row gg">
            <a className="btn btn-primary" href="#bounty">
              See the Bounty Board
            </a>
            <a className="btn btn-ghost" href="#snail">
              Ring the snail
            </a>
          </div>
        </div>

        <div className="hero-art">
          <span className="display sfx-word sfx-don" aria-hidden="true">
            <span className="g5-hide">DON!</span>
            <span className="g5-only">BOING!</span>
          </span>
          <Ship className="hero-ship bob" detail label="Illustration of a small pirate ship with a straw-hat flag" />
        </div>
      </div>

      <Waves />
    </section>
  );
}

export default Home;
