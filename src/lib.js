import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const reduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Hides targets from JS (so no-JS crawlers still see content) and drops them in on scroll.
export function batchIn(targets, from, to = {}) {
  const els = gsap.utils.toArray(targets);
  if (!els.length) return;
  const r = reduced();
  gsap.set(els, r ? { opacity: 0 } : from);
  ScrollTrigger.batch(els, {
    start: "top 90%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: r ? 0.2 : 0.5,
        stagger: r ? 0 : 0.08,
        ease: "back.out(1.6)",
        clearProps: "transform,opacity",
        ...(r ? {} : to),
      }),
  });
}

// ponytail: sound files are optional; missing ones fail silently. Muted by default.
const SFX_KEY = "sfx-on";
export const sfx = {
  on() {
    try {
      return localStorage.getItem(SFX_KEY) === "1";
    } catch {
      return false;
    }
  },
  set(v) {
    try {
      localStorage.setItem(SFX_KEY, v ? "1" : "0");
    } catch {}
  },
  play(name) {
    if (sfx.on()) new Audio(`/sfx/${name}.mp3`).play().catch(() => {});
  },
};

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export function useKonami(onUnlock) {
  useEffect(() => {
    let i = 0;
    const onKey = (e) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      // an extra ArrowUp after "↑↑" still counts as a valid "↑↑" prefix
      i = k === KONAMI[i] ? i + 1 : k === "ArrowUp" ? (i === 2 ? 2 : 1) : 0;
      if (i === KONAMI.length) {
        i = 0;
        onUnlock();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onUnlock]);
}
