import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "../App.css";

function Home() {
  return (
    <Box
      sx={{
        border: "1px solid yellow",
        height: "100%",
        display: "grid",
        placeItems: "center",
        border: "1px solid red",
      }}
    >
      <Box>
        <Box className="roboto" sx={{ color: "#5BF2CE" }}>
          Hi, my name is
        </Box>
        <Box
          className="customdmsans"
          sx={{ color: "#A7C3E5", fontSize: "80px", fontWeight: "600" }}
        >
          Manish Batchu
        </Box>
        <Box
          className="customdmsans"
          sx={{ color: "#A19A8F", fontSize: "80px", fontWeight: "600" }}
        >
          I build things for the web
        </Box>
        <Box>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
