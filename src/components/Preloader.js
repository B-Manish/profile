import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Box, Typography } from "@mui/material";

const PreLoader = ({ onComplete, showBM }) => {
  const hexagonRef = useRef(null);
  const bmRef = useRef(null);

  useEffect(() => {
    // Animate the hexagon
    gsap.fromTo(
      hexagonRef.current,
      { strokeDasharray: 600, strokeDashoffset: 600 },
      {
        strokeDashoffset: 0,
        duration: 2, // Hexagon drawing duration
        ease: "power1.inOut",
        onComplete,
      }
    );
  }, [onComplete]);

  useEffect(() => {
    // Animate 'BM' letters when they appear
    if (showBM) {
      gsap.fromTo(
        bmRef.current,
        { opacity: 0, scale: 0.5 }, // Start from 0 opacity and small scale
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" } // Fade and scale up
      );
    }
  }, [showBM]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#0A192F",
      }}
    >
      <svg width="100" height="100" viewBox="0 0 200 200">
        <path
          ref={hexagonRef}
          d="M 100,10 L 170,55 L 170,145 L 100,190 L 30,145 L 30,55 Z"
          fill="none"
          stroke="#5BF2CE"
          strokeWidth="5"
        />
      </svg>

      {showBM && (
        <Typography
          ref={bmRef}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "25px",
            color: "#5BF2CE",
            fontFamily: '"Roboto Mono", monospace',
          }}
        >
          BM
        </Typography>
      )}
    </Box>
  );
};

export default PreLoader;
