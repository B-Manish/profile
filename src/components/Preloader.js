import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Box, Typography } from "@mui/material";

const PreLoader = () => {
  const hexagonRef = useRef(null);
  const bmRef = useRef(null);
  const [showBM, setShowBM] = useState(false); // State to control 'BM' visibility

  useEffect(() => {
    // Animate the hexagon
    gsap.fromTo(
      hexagonRef.current,
      { strokeDasharray: 600, strokeDashoffset: 600 },
      {
        strokeDashoffset: 0,
        duration: 2, // Hexagon drawing duration
        ease: "power1.inOut",
        onComplete: () => {
          setShowBM(true); // Show 'BM' after hexagon animation completes
        },
      }
    );
  }, []);

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
      <svg width="300" height="300" viewBox="0 0 200 200">
        <path
          ref={hexagonRef}
          d="M 100,10 L 170,55 L 170,145 L 100,190 L 30,145 L 30,55 Z"
          fill="none"
          stroke="black"
          strokeWidth="5"
        />
      </svg>

      {showBM && (
        <Typography
          ref={bmRef}
          variant="h1"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: "bold",
            fontSize: "3rem",
          }}
        >
          BM
        </Typography>
      )}
    </Box>
  );
};

export default PreLoader;
