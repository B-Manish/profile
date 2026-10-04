import React, { Suspense, lazy } from "react";
import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import { CloseIcon } from "./Art";
import { reduced } from "../lib";

const Threed = lazy(() => import("./Threed"));

// Project modal styled as a treasure map. MUI Modal handles focus trap, Esc and backdrop.
const CustomModal = ({ project: p, handleClose }) => {
  const r = reduced();
  const route = p?.route || ["Idea", p?.technologies.slice(0, 2).join(" + "), p?.npm ? "On npm" : p?.liveurl ? "Live" : "On GitHub"];
  const shot = p && (
    <div className="map-shot">
      <img src={p.img} alt={p.alt} />
    </div>
  );

  return (
    <Modal
      open={!!p}
      onClose={handleClose}
      aria-labelledby="map-h"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      slotProps={{ backdrop: { sx: { background: "rgba(6,20,40,.78)" } } }}
    >
      {p ? (
        <motion.div
          className="map paper"
          initial={r ? { opacity: 0 } : { scaleY: 0, opacity: 1 }}
          animate={r ? { opacity: 1 } : { scaleY: 1 }}
          transition={r ? { duration: 0.15 } : { duration: 0.38, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <button type="button" className="map-close" aria-label="Roll up the map (close)" onClick={handleClose}>
            <CloseIcon size={22} />
          </button>
          <div className="map-body">
            <div className="map-left">
              {p.iphone ? (
                <Suspense fallback={shot}>
                  <div className="map-shot threed">
                    <Threed height="400px" />
                  </div>
                </Suspense>
              ) : (
                shot
              )}
              <svg className="map-route" aria-hidden="true" viewBox="0 0 520 190">
                <path d="M20 160 Q120 60 220 120 T420 50" fill="none" stroke="#9E1C1C" strokeWidth="4" strokeDasharray="10 10" strokeLinecap="round" />
                <path d="M408 36 L432 60 M432 36 L408 60" stroke="#9E1C1C" strokeWidth="6" strokeLinecap="round" />
                <text x="16" y="186" fontFamily="Bangers" fontSize="18" fill="#5A4630">
                  {route[0]}
                </text>
                <text x="196" y="150" fontFamily="Bangers" fontSize="18" fill="#5A4630">
                  {route[1]}
                </text>
                <text x="380" y="92" fontFamily="Bangers" fontSize="18" fill="#5A4630">
                  {route[2]}
                </text>
                <g transform="translate(470 140)">
                  <circle r="34" fill="none" stroke="#1A1410" strokeWidth="2" />
                  <path d="M0 -30 L6 0 L0 30 L-6 0 Z" fill="#1A1410" />
                  <path d="M-30 0 L0 -5 L30 0 L0 5 Z" fill="#5A4630" />
                  <text y="-38" textAnchor="middle" fontFamily="Rye" fontSize="12" fill="#1A1410">
                    N
                  </text>
                </g>
              </svg>
            </div>

            <div className="map-right">
              <p className="eyebrow">Treasure map · Project {String(p.index + 1).padStart(2, "0")}</p>
              <h2 id="map-h" className="rye">
                {p.heading}
              </h2>
              {p.tagline && <p className="display map-tagline">{p.tagline}</p>}
              <p className="map-desc">{p.description}</p>
              <div className="crimes-label" style={{ marginBottom: 8 }}>
                Crimes committed
              </div>
              <ul className="chips">
                {p.technologies.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="map-bounty">
                <span className="rye" style={{ fontSize: 18 }}>
                  Bounty
                </span>
                <span className="rye" style={{ fontSize: 30 }}>
                  ฿ {p.bounty}-
                </span>
              </div>
              <div className="map-actions">
                {p.liveurl && (
                  <a className="primary" href={p.liveurl} target="_blank" rel="noreferrer">
                    {p.npm ? "See it on npm" : "Board ship (live)"}
                  </a>
                )}
                {p.githuburl && (
                  <a href={p.githuburl} target="_blank" rel="noreferrer">
                    Read the logbook (code)
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <span />
      )}
    </Modal>
  );
};

export default CustomModal;
