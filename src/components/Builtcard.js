import React from "react";
import { ExternalIcon, GitHubIcon } from "./Art";

// One WANTED poster on the bounty board. The whole card opens the treasure map
// via a stretched button; the Code / live links sit above it.
function Builtcard({ heading, img, alt, technologies, blurb, githuburl, liveurl, npm, tilt, bounty, status, onOpen }) {
  return (
    <article className="poster" style={{ "--tilt": `${tilt}deg` }}>
      <button type="button" className="poster-open" onClick={onOpen} aria-label={`Open the treasure map for ${heading}`} />
      <span className="pin" aria-hidden="true" />
      <div className="rye poster-title" aria-hidden="true">
        WANTED
      </div>
      <div className="poster-shot">
        <img src={img} alt={alt} loading="lazy" width="600" height="375" />
      </div>
      <div className="rye poster-status">{status}</div>
      <h3 className="rye">{heading}</h3>
      <div className="poster-bounty" aria-label={`Bounty ${bounty} berries`}>
        <span className="rye" style={{ fontSize: 22 }} aria-hidden="true">
          ฿
        </span>
        <span className="rye" style={{ fontSize: 26 }} aria-hidden="true">
          {bounty}
        </span>
        <span className="rye" style={{ fontSize: 18 }} aria-hidden="true">
          -
        </span>
      </div>
      <p className="poster-blurb">{blurb}</p>
      <div className="crimes-label">Crimes</div>
      <ul className="chips">
        {technologies.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="poster-links">
        <a className="plink" href={githuburl} target="_blank" rel="noreferrer">
          <GitHubIcon />
          Code
        </a>
        {liveurl && (
          <a className="plink dark" href={liveurl} target="_blank" rel="noreferrer">
            <ExternalIcon />
            {npm ? "npm" : "Board ship"}
          </a>
        )}
      </div>
    </article>
  );
}

export default Builtcard;
