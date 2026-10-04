import React from "react";

// Shared illustration + icon SVGs from the Grand Line design.

export const JollyRoger = ({ size = 52, label }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}>
    <g style={{ stroke: "var(--foam)" }} strokeWidth="5" strokeLinecap="round">
      <line x1="10" y1="16" x2="54" y2="58" />
      <line x1="54" y1="16" x2="10" y2="58" />
    </g>
    <circle cx="32" cy="34" r="15" fill="#F4F1E8" stroke="#1A1410" strokeWidth="2" />
    <rect x="24" y="41" width="16" height="10" rx="3" fill="#F4F1E8" stroke="#1A1410" strokeWidth="2" />
    <circle cx="26.5" cy="34" r="3.6" fill="#0B1F3A" />
    <circle cx="37.5" cy="34" r="3.6" fill="#0B1F3A" />
    <text x="32" y="50" textAnchor="middle" fontFamily="Bangers" fontSize="9" fill="#0B1F3A">MB</text>
    <ellipse cx="32" cy="22" rx="21" ry="4.5" className="straw" stroke="#1A1410" strokeWidth="2" />
    <path d="M21 22 C21 9 43 9 43 22 Z" className="straw" stroke="#1A1410" strokeWidth="2" />
    <path d="M21.6 18 C28 15.5 36 15.5 42.4 18 L42.8 21 C36 19 28 19 21.2 21 Z" className="band" />
  </svg>
);

export const StrawHat = ({ width = 132, height = 66, className, weave = false }) => (
  <svg width={width} height={height} viewBox="0 0 120 60" aria-hidden="true" className={className}>
    <ellipse cx="60" cy="44" rx="56" ry="12" className="straw" stroke="#1A1410" strokeWidth="3" />
    <path d="M30 43 C30 12 90 12 90 43 Z" className="straw" stroke="#1A1410" strokeWidth="3" />
    <path d="M30.8 34 C44 29 76 29 89.2 34 L89.8 41 C76 36.5 44 36.5 30.2 41 Z" className="band" stroke="#1A1410" strokeWidth="2" />
    {weave && <path d="M40 20 L44 26 M58 16 L58 22 M76 20 L72 26" stroke="#B88A2A" strokeWidth="2" strokeLinecap="round" />}
  </svg>
);

// Original caravel with a straw-hat flag. `detail` adds the jolly roger + hull ports.
export const Ship = ({ className, style, detail = false, label, stroke = 4 }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 300 220"
    {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
  >
    <rect x="146" y="22" width="6" height="135" fill="#1A1410" />
    <path d="M152 24 L196 15 L152 6 Z" fill="#D62828" stroke={detail ? "#1A1410" : "none"} strokeWidth="2" />
    <path d="M88 44 Q150 34 212 44 Q224 92 212 134 Q150 124 88 134 Q76 92 88 44 Z" fill="#F4F1E8" stroke="#1A1410" strokeWidth={stroke} />
    {detail ? (
      <>
        <circle cx="150" cy="84" r="17" fill="#1A1410" />
        <circle cx="144" cy="84" r="4" fill="#F4F1E8" />
        <circle cx="156" cy="84" r="4" fill="#F4F1E8" />
        <ellipse cx="150" cy="70" rx="20" ry="4" fill="#F2C14E" stroke="#1A1410" strokeWidth="1.5" />
        <path d="M139 70 C139 58 161 58 161 70 Z" fill="#F2C14E" stroke="#1A1410" strokeWidth="1.5" />
        <path d="M128 104 L172 116 M172 104 L128 116" stroke="#1A1410" strokeWidth="6" strokeLinecap="round" />
      </>
    ) : (
      <circle cx="150" cy="86" r="18" fill="#1A1410" />
    )}
    <path d="M24 150 L276 150 L244 196 Q150 212 56 196 Z" fill="#F2C14E" stroke="#1A1410" strokeWidth={stroke} />
    {detail && (
      <>
        <path d="M36 164 L266 164" stroke="#1A1410" strokeWidth="3" />
        <circle cx="90" cy="178" r="6" fill="#0B1F3A" stroke="#1A1410" strokeWidth="2" />
        <circle cx="150" cy="180" r="6" fill="#0B1F3A" stroke="#1A1410" strokeWidth="2" />
        <circle cx="210" cy="178" r="6" fill="#0B1F3A" stroke="#1A1410" strokeWidth="2" />
        <path d="M276 150 Q296 140 290 122" fill="none" stroke="#1A1410" strokeWidth="4" strokeLinecap="round" />
      </>
    )}
  </svg>
);

export const Wheel = ({ size = 30, big = false, style }) =>
  big ? (
    <svg width={size} height={size} viewBox="0 0 150 150" aria-hidden="true" style={style}>
      <g stroke="#8C6A3C" strokeWidth="8" strokeLinecap="round">
        <line x1="75" y1="4" x2="75" y2="146" />
        <line x1="4" y1="75" x2="146" y2="75" />
        <line x1="25" y1="25" x2="125" y2="125" />
        <line x1="125" y1="25" x2="25" y2="125" />
      </g>
      <circle cx="75" cy="75" r="48" fill="none" stroke="#C9A46A" strokeWidth="12" />
      <circle cx="75" cy="75" r="48" fill="none" stroke="#1A1410" strokeWidth="2" />
      <circle cx="75" cy="75" r="14" fill="#F2C14E" stroke="#1A1410" strokeWidth="3" />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 150 150" aria-hidden="true" style={style}>
      <g stroke="#C9A46A" strokeWidth="12" strokeLinecap="round">
        <line x1="75" y1="8" x2="75" y2="142" />
        <line x1="8" y1="75" x2="142" y2="75" />
        <line x1="28" y1="28" x2="122" y2="122" />
        <line x1="122" y1="28" x2="28" y2="122" />
      </g>
      <circle cx="75" cy="75" r="44" fill="none" stroke="#C9A46A" strokeWidth="16" />
      <circle cx="75" cy="75" r="14" fill="#F2C14E" />
    </svg>
  );

// Lucide-style stroke icons used across the design.
const Icon = ({ size = 18, sw = 2, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export const GitHubIcon = (p) => (
  <Icon {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
);
export const LinkedInIcon = (p) => (
  <Icon {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);
export const InstagramIcon = (p) => (
  <Icon {...p}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </Icon>
);
export const MailIcon = (p) => (
  <Icon {...p}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);
export const DownloadIcon = (p) => (
  <Icon sw={2.5} {...p}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </Icon>
);
export const ExternalIcon = (p) => (
  <Icon {...p}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </Icon>
);
export const CloseIcon = (p) => (
  <Icon sw={3} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Icon>
);
export const BoltIcon = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1410" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
export const PhoneIcon = (p) => (
  <Icon size={22} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
);
export const SoundIcon = ({ muted, ...p }) => (
  <Icon size={22} {...p}>
    <path d="M11 5 6 9H2v6h4l5 4V5z" />
    {muted ? (
      <>
        <line x1="22" x2="16" y1="9" y2="15" />
        <line x1="16" x2="22" y1="9" y2="15" />
      </>
    ) : (
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
    )}
  </Icon>
);

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/B-Manish", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manish-batchu/", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/bmanish_msd/", Icon: InstagramIcon },
  { label: "Email", href: "mailto:manish.batchu7@gmail.com", Icon: MailIcon },
];

export const WAVE_FRONT =
  "M0 50 Q120 0 240 50 T480 50 T720 50 T960 50 T1200 50 T1440 50 T1680 50 T1920 50 T2160 50 T2400 50 T2640 50 T2880 50";

// Two drifting wave layers (hero, 404).
export const Waves = () => (
  <div className="waves" aria-hidden="true">
    <svg className="wave slow wave-back" viewBox="0 0 2880 120" preserveAspectRatio="none">
      <path d="M0 60 Q180 10 360 60 T720 60 T1080 60 T1440 60 T1800 60 T2160 60 T2520 60 T2880 60 V120 H0 Z" />
    </svg>
    <svg className="wave wave-front" viewBox="0 0 2880 130" preserveAspectRatio="none">
      <path d={WAVE_FRONT + " V130 H0 Z"} />
      <path d={WAVE_FRONT} fill="none" stroke="#F4F1E8" strokeWidth="3" strokeDasharray="2 14" strokeLinecap="round" />
    </svg>
  </div>
);
