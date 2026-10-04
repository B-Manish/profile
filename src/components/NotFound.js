import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { JollyRoger, Waves } from "./Art";

// 404: no artboard in the design, so it reuses the hero's sea, type and buttons.
function NotFound() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Lost at sea — Manish Batchu";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <main className="lost halftone" aria-labelledby="lost-h">
      <div className="sun" aria-hidden="true" />
      <div className="lost-inner">
        <JollyRoger size={96} />
        <p className="eyebrow">Error 404 · Off the map</p>
        <h1 id="lost-h" className="display">
          Lost at sea!
        </h1>
        <p className="display tagline">This island isn't on any chart.</p>
        <p className="copy">The Log Pose spun, the fog rolled in, and the page you were after sank without a trace. Let's get you back aboard.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" to="/">
            Back to the Deck
          </Link>
          <a className="btn btn-ghost" href="/#snail">
            Ring the snail
          </a>
        </div>
      </div>
      <Waves />
    </main>
  );
}

export default NotFound;
