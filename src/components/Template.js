import React from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "./Navbar";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Template({ page }) {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        background: "#081324",
      }}
    >
      <Navbar />

      <Grid item xs={1}>
        <Box
          sx={{
            position: "fixed",
            bottom: "160px",
            left: "85px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <GitHubIcon sx={{ color: "#CBCBD7", mb: "15px" }} />
          <LinkedInIcon sx={{ color: "#CBCBD7", mb: "15px" }} />
          <XIcon sx={{ color: "#CBCBD7", mb: "15px" }} />
          <InstagramIcon sx={{ color: "#CBCBD7" }} />
        </Box>
        <Box
          sx={{
            position: "fixed",
            bottom: "0px",
            left: "95px",
            display: "flex",
            height: "140px",
            width: "2px",
            background: "grey",
          }}
        />
      </Grid>
      <Grid item xs={10}>
        <Box
          sx={{
            height: "calc(100vh - 89px)",
          }}
        >
          {page}
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box
          sx={{
            position: "fixed",
            bottom: "230px",
            right: "20px",
            color: "#A8B2D1",
            fontSize: "12px",
            rotate: "90deg",
            display: "flex",
          }}
          className="roboto"
        >
          <Box> bmanish7777@gmail.com</Box>
        </Box>
        <Box
          sx={{
            position: "fixed",
            bottom: "0px",
            right: "95px",
            display: "flex",
            height: "140px",
            width: "2px",
            background: "grey",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Template;
