import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "../App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
  useGSAP(() => {
    gsap.fromTo(
      ".customdmsans",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 1 }
    );
  }, []);
  return (
    <Box
      sx={{
        height: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box>
        <Box className="roboto" sx={{ color: "#5BF2CE" }}>
          Hi, my name is
        </Box>
        <Box
          className="customdmsans"
          sx={{
            color: "#A7C3E5",
            fontSize: "80px",
            fontWeight: "600",
          }}
        >
          Manish Batchu
        </Box>
        <Box
          className="customdmsans"
          sx={{ color: "#A19A8F", fontSize: "80px", fontWeight: "600" }}
        >
          I build things for the web
        </Box>
        <Box className="customdmsans" sx={{ width: "517px" }}>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
