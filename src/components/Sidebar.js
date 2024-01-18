import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import "./Custom.css";
import Logo from "../static/logo.png";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Sidebar() {
  return (
    <Box
      sx={{
        height: "90vh",
        border: "0px solid red",
        color: "white",
        position: "absolute",
        left: "2%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "50%",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ cursor: "pointer" }}>
          {/* <img
            src={Logo}
            alt="logo"
            style={{ width: "20px", height: "20px" }}
          /> */}
          BM
        </Box>
        <Box sx={{ mt: "30px" }} className="sidebar-item">
          Projects
        </Box>
        <Box className="sidebar-item">Details</Box>
        <Box className="sidebar-item">Articles</Box>
        <Box className="sidebar-item">Contact</Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "20%",
          justifyContent: "space-evenly",
        }}
      >
        <GitHubIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </Box>
    </Box>
  );
}

export default Sidebar;
