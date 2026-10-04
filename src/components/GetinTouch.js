import React, { useState } from "react";
import { PhoneIcon, SOCIALS } from "./Art";
import { reduced, sfx } from "../lib";

const EMAIL = "manish.batchu7@gmail.com";

const Snail = ({ calling }) => (
  <svg className={`snail${calling ? " calling" : ""}`} width="300" height="190" viewBox="0 0 300 190" role="img" aria-label="Illustration of a snail with a telephone receiver on its shell">
    <path d="M20 160 Q20 120 70 118 L230 118 Q284 120 284 160 Q284 176 262 176 L44 176 Q20 176 20 160 Z" fill="#F2C49B" stroke="#1A1410" strokeWidth="4" />
    <path d="M232 120 Q240 70 266 54" fill="none" stroke="#1A1410" strokeWidth="4" strokeLinecap="round" />
    <path d="M248 120 Q262 82 286 74" fill="none" stroke="#1A1410" strokeWidth="4" strokeLinecap="round" />
    <circle cx="266" cy="52" r="9" fill="#F4F1E8" stroke="#1A1410" strokeWidth="3" />
    <circle cx="286" cy="72" r="9" fill="#F4F1E8" stroke="#1A1410" strokeWidth="3" />
    <circle cx="268" cy="53" r="3.5" fill="#1A1410" />
    <circle cx="288" cy="73" r="3.5" fill="#1A1410" />
    <circle cx="130" cy="88" r="70" fill="#2EC4B6" stroke="#1A1410" strokeWidth="4" />
    <circle cx="130" cy="88" r="48" fill="none" stroke="#1A1410" strokeWidth="3" />
    <circle cx="130" cy="88" r="26" fill="none" stroke="#1A1410" strokeWidth="3" />
    <rect x="76" y="10" width="108" height="26" rx="13" fill="#1A1410" />
    <circle cx="82" cy="28" r="14" fill="#1A1410" />
    <circle cx="178" cy="28" r="14" fill="#1A1410" />
    <path d="M130 36 Q120 60 150 70" fill="none" stroke="#1A1410" strokeWidth="3" strokeDasharray="4 4" />
    <path d="M232 150 Q248 158 262 150" fill="none" stroke="#1A1410" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

function Getintouch() {
  const [calling, setCalling] = useState(false);

  // ponytail: mailto keeps it serverless. Swap for Formspree/EmailJS only if inbox-free sends are needed.
  const send = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Ahoy from " + f.get("name"));
    const body = encodeURIComponent(f.get("message") + "\n\n— " + f.get("email"));
    setCalling(true);
    sfx.play("puru");
    setTimeout(
      () => {
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
        setCalling(false);
      },
      reduced() ? 0 : 1200
    );
  };

  return (
    <section id="snail" className="snail-sec halftone" aria-labelledby="snail-h">
      <div className="contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">04 · What's next?</p>
          <h2 id="snail-h" className="display h2">
            Ring the
            <br />
            <span>Den Den Mushi</span>
          </h2>
          <p>I'm currently open to new opportunities! Whether you have a question or want to talk roles, pick up the snail — I'll call back.</p>
          <Snail calling={calling} />
        </div>

        <form aria-label="Send a message" className="call-form paper" onSubmit={send}>
          <div role="status">
            {calling ? (
              <div className="calling-bar">
                <PhoneIcon />
                <span className="display">Calling… puru puru puru</span>
              </div>
            ) : (
              <div className="form-head">
                <span className="display">Transponder line</span>
                <span className="line-open">Line open</span>
              </div>
            )}
          </div>
          <label className="field">
            Your name
            <input type="text" name="name" autoComplete="name" placeholder="Monkey D. Recruiter" required />
          </label>
          <label className="field">
            Your email
            <input type="email" name="email" autoComplete="email" placeholder="you@yourship.com" required />
          </label>
          <label className="field">
            Message
            <textarea name="message" rows="4" placeholder="We've got a role that needs a captain…" required />
          </label>
          <button className="btn btn-primary" type="submit" disabled={calling}>
            {calling ? "Connecting…" : "Puru puru… send call"}
          </button>
          <p className="form-note">Opens your mail app addressed to {EMAIL}.</p>
        </form>
      </div>

      <div className="poses-wrap">
        <p>Or follow an Eternal Pose straight to me</p>
        <ul className="poses">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a className="pose" href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
                <span className="pose-glass">
                  <Icon size={26} />
                </span>
                <span className="pose-base" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Getintouch;
