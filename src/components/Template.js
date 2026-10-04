import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Aboutme from "./Aboutme";
import Built from "./Built";
import Getintouch from "./GetinTouch";
import OtherProjects from "./OtherProjects";
import Preloader from "./Preloader";
import Worked from "./Worked";
import { Ship, StrawHat, SOCIALS } from "./Art";
import { reduced, useKonami } from "../lib";

const SAILED_KEY = "sailed";
const hasSailed = () => {
  try {
    return sessionStorage.getItem(SAILED_KEY) === "1";
  } catch {
    return false;
  }
};

// Right-rail mini ship that sails down a dashed route as the page scrolls.
function VoyageRail() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      ref.current?.style.setProperty("--p", p.toFixed(4));
      ref.current?.style.setProperty("--tilt", `${Math.sin(p * 18) * 6}deg`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="rail rail-right">
      <div className="rail-track" ref={ref} aria-hidden="true">
        <Ship className="rail-ship" stroke={8} />
      </div>
      <a className="rail-email" href="mailto:manish.batchu7@gmail.com">
        manish.batchu7@gmail.com
      </a>
    </div>
  );
}

function Template({ page }) {
  const [sailing, setSailing] = useState(() => !hasSailed());
  const [gear5, setGear5] = useState(false);

  useKonami(useCallback(() => setGear5((g) => !g), []));

  useEffect(() => {
    const el = document.documentElement;
    if (gear5) el.dataset.theme = "gear5";
    else delete el.dataset.theme;
  }, [gear5]);

  // Hero intro (.gg stagger). Hidden from JS only, then revealed once the preloader lifts.
  useLayoutEffect(() => {
    gsap.set(".gg", { opacity: 0, y: reduced() ? 0 : 30 });
  }, []);

  const reveal = useCallback(() => {
    try {
      sessionStorage.setItem(SAILED_KEY, "1");
    } catch {}
    gsap.to(".gg", { opacity: 1, y: 0, duration: 0.5, stagger: reduced() ? 0 : 0.1, delay: 0.2, clearProps: "transform" });
  }, []);

  const done = useCallback(() => {
    setSailing(false);
    ScrollTrigger.refresh();
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  useEffect(() => {
    if (!sailing) {
      reveal();
      done();
    }
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  return (
    <div className="site">
      {sailing && <Preloader onReveal={reveal} onDone={done} />}

      <Navbar />

      <div className="rail rail-left">
        {SOCIALS.slice(0, 3).map(({ label, href, Icon }) => (
          <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
            <Icon size={20} />
          </a>
        ))}
        <span className="rail-rope" aria-hidden="true" />
      </div>
      <VoyageRail />

      <main>
        {page}
        <div className="rope-band" aria-hidden="true">
          <div className="rope" />
        </div>
        <Aboutme />
        <Worked />
        <div className="wave-strip" aria-hidden="true">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path d="M0 20 Q60 0 120 20 T240 20 T360 20 T480 20 T600 20 T720 20 T840 20 T960 20 T1080 20 T1200 20 T1320 20 T1440 20 V40 H0 Z" />
          </svg>
        </div>
        <Built />
        <OtherProjects />
        <Getintouch />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <StrawHat width={72} height={36} />
          <p className="display footer-quote">"I'm gonna be King of the Developers!"</p>
          <p className="footer-credit">
            Built by Manish Batchu · charted with React, GSAP &amp; three.js · no Devil Fruits were harmed
          </p>
        </div>
      </footer>

      {gear5 && (
        <div className="g5-pill" role="status">
          <span className="display">Gear 5 unlocked</span>
          <small>↑↑↓↓←→←→ B A · press again to exit</small>
          <button type="button" onClick={() => setGear5(false)}>
            Back to normal
          </button>
        </div>
      )}
    </div>
  );
}

export default Template;
