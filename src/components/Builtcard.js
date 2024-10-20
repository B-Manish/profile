import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Vscode from "../static/vscode.png";
import Threed from "./Threed";

function Builtcard({ reverse = false, margin, iphone }) {
  const technologies = ["React", "Express", "Spotify API", "Styled Components"];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: reverse === true ? "row-reverse" : "row",
        margin: margin,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "50%",
          justifyContent: reverse === true && "right",
        }}
      >
        {iphone ? <Threed /> : <img src={Vscode} style={{ width: "120%" }} />}
      </Box>
      <Box
        sx={{
          width: "50%",
          zIndex: "100",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            color: "#5BF2CE",
            textAlign: reverse === true ? "left" : "right",
            fontSize: "13px",
            mb: "10px",
          }}
          className="roboto"
        >
          Featured Project
        </Box>
        <Box
          className="customdmsans"
          sx={{
            color: "#A7C3E5",
            fontWeight: "600",
            fontSize: "24px",
            textAlign: reverse === true ? "left" : "right",
            mb: "19px",
          }}
        >
          Haylon theme
        </Box>
        <Box
          className="customdmsans"
          sx={{
            background: "#112240",
            mb: "22px",
            borderRadius: "4px",
            padding: "25px",
            color: "#8892b0",
          }}
        >
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: reverse === true ? "flex-start" : "flex-end",
          }}
        >
          <Box sx={{ display: "flex", mb: "10px" }}>
            {technologies.map((technology, index) => (
              <Box
                key={technology}
                className="roboto"
                sx={{
                  marginRight: index !== technologies.length - 1 && "20px",
                  fontSize: "13px",
                }}
              >
                {technology}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: reverse === true ? "flex-start" : "flex-end",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <GitHubIcon style={{ marginRight: "20px", color: "white" }} />
            <GitHubIcon style={{ color: "white" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Builtcard;
