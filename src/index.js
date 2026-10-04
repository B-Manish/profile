import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

console.log(
  "%cAhoy, fellow pirate! 🏴‍☠️",
  "font: 28px Bangers, Impact, sans-serif; letter-spacing: .04em; color: #F2C14E; background: #0B1F3A; padding: 8px 16px; border: 3px solid #1A1410; border-radius: 10px; text-shadow: 3px 3px 0 #1A1410"
);
console.log(
  "%cPoking around the hull? This ship is built with React, GSAP & three.js.\n" +
    "Charts (source): https://github.com/B-Manish/profile\n" +
    "Looking for crew? manish.batchu7@gmail.com\n\n" +
    "Psst… ↑ ↑ ↓ ↓ ← → ← → B A",
  "font: 14px/1.6 Nunito, system-ui, sans-serif; color: #2EC4B6"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
