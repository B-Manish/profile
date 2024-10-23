import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "../App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
  useGSAP(() => {
    gsap.fromTo(
      ".gg",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 1 }
    );
  }, []);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box>
        <Box
          className="gg"
          sx={{ color: "#5BF2CE", fontFamily: '"Roboto Mono", monospace' }}
        >
          Hi, my name is
        </Box>
        <Box
          className="gg"
          sx={{
            color: "#A7C3E5",
            fontSize: "80px",
            fontWeight: "600",
            fontFamily: '"DM Sans", sans-serif',
            // fontSize: {
            //   xs: "14px", // small screens
            //   sm: "16px", // medium screens
            //   md: "18px", // larger screens
            //   lg: "80px",
            // },
          }}
        >
          Manish Batchu
        </Box>
        <Box
          className="gg"
          sx={{
            color: "#A19A8F",
            fontSize: "80px",
            fontWeight: "600",
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          I build things for the web
        </Box>
        <Box
          className="gg"
          sx={{
            maxWidth: "517px",
            fontFamily: '"DM Sans", sans-serif',
            color: "#CBCBD7",
          }}
        >
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
