import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import { CloseIcon, DownloadIcon, JollyRoger, SoundIcon, Wheel } from "./Art";
import { reduced, sfx } from "../lib";

const NAV = [
  { id: "deck", label: "The Deck", sub: "Home", mobileOnly: true },
  { id: "log", label: "Captain's Log", sub: "About" },
  { id: "voyages", label: "Crew Voyages", sub: "Experience" },
  { id: "bounty", label: "Bounty Board", sub: "Projects" },
  { id: "islands", label: "Side Quests", sub: "Other work" },
  { id: "snail", label: "Den Den Mushi", sub: "Contact" },
];
const RESUME = "/Manish_Batchu_Resume.pdf";

function useScrollSpy() {
  const [active, setActive] = useState("deck");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

// Tucks the bar away while scrolling down, brings it back on scroll up.
function useTucked() {
  const [tucked, setTucked] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 6) return;
      setTucked(y > last && y > 120);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return tucked;
}

function Navbar() {
  const active = useScrollSpy();
  const tucked = useTucked();
  const [open, setOpen] = useState(false);
  const [spin, setSpin] = useState(0);
  const [sound, setSound] = useState(sfx.on);

  const toggleMenu = (next) => {
    setSpin((s) => s + (next ? 180 : -180));
    setOpen(next);
  };

  // Close the drawer first (it locks body scroll), then sail to the section.
  const go = (e, id) => {
    e.preventDefault();
    toggleMenu(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: reduced() ? "auto" : "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }, 50);
  };

  return (
    <header className={`topbar${tucked && !open ? " tucked" : ""}`}>
      <nav aria-label="Primary" className="topnav">
        <a href="#deck" className="brand" aria-label="Manish Batchu, back to the deck">
          <JollyRoger />
          <span className="display brand-name">
            Manish
            <br />
            <span>Batchu</span>
          </span>
        </a>

        <div className="navlinks">
          {NAV.filter((n) => !n.mobileOnly).map(({ id, label, sub }) => (
            <a key={id} className="navlink" href={`#${id}`} aria-current={active === id ? "true" : undefined}>
              <span className="display">{label}</span>
              <span className="sub">{sub}</span>
              {active === id && <motion.span layoutId="nav-underline" className="nav-underline" aria-hidden="true" />}
            </a>
          ))}
          <a className="btn btn-primary nav-resume" href={RESUME} target="_blank" rel="noreferrer">
            <DownloadIcon />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="wheel-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => toggleMenu(true)}
          style={{ transform: `rotate(${spin}deg)` }}
        >
          <Wheel />
        </button>
      </nav>

      <Modal open={open} onClose={() => toggleMenu(false)} aria-label="Site menu">
        <div className="drawer">
          <div className="drawer-head">
            <span className="display">
              Manish <span>Batchu</span>
            </span>
            <button type="button" className="wheel-btn" aria-label="Close menu" aria-expanded="true" onClick={() => toggleMenu(false)}>
              <CloseIcon size={20} />
            </button>
          </div>

          <div className="drawer-wheel">
            <motion.div initial={{ rotate: reduced() ? 22 : -158 }} animate={{ rotate: 22 }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <Wheel big size={150} />
            </motion.div>
          </div>

          <nav aria-label="Primary">
            <ul>
              {NAV.map(({ id, label, sub }) => (
                <li key={id}>
                  <a className="drawer-link" href={`#${id}`} onClick={(e) => go(e, id)} aria-current={active === id ? "true" : undefined}>
                    <span className="display">{label}</span>
                    <span className="sub">{sub}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="drawer-foot">
            <a className="btn btn-primary" href={RESUME} download>
              Download resume
            </a>
            <button
              type="button"
              className="sfx-btn"
              aria-pressed={sound}
              aria-label={sound ? "Sound effects: on" : "Sound effects: muted"}
              onClick={() => {
                sfx.set(!sound);
                setSound(!sound);
              }}
            >
              <SoundIcon muted={!sound} />
            </button>
          </div>
        </div>
      </Modal>
    </header>
  );
}

export default Navbar;
