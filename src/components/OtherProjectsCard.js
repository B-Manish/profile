import React from "react";

function OtherProjectsCard({ heading, description, skills, tilt }) {
  return (
    <article className="haki bottle-card">
      <svg width="56" height="96" viewBox="0 0 56 96" aria-hidden="true">
        <rect x="20" y="4" width="16" height="12" rx="3" fill="#8C6A3C" stroke="#1A1410" strokeWidth="2" />
        <path d="M22 16 V28 Q6 36 6 56 V84 Q6 92 14 92 H42 Q50 92 50 84 V56 Q50 36 34 28 V16 Z" fill="rgba(46,196,182,.25)" stroke="#F4F1E8" strokeWidth="3" style={{ stroke: "var(--foam)" }} />
        <rect x="16" y="50" width="24" height="30" rx="3" fill="#EAD9B0" stroke="#1A1410" strokeWidth="2" transform={`rotate(${tilt} 28 65)`} />
      </svg>
      <div>
        <h3 className="display">{heading}</h3>
        <p>{description}</p>
        <p className="stack">{skills.join(" · ")}</p>
      </div>
    </article>
  );
}

export default OtherProjectsCard;
