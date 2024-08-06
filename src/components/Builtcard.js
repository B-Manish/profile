import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function Builtcard() {
  const technologies = ["React", "Express", "Spotify API", "Styled Components"];
  return (
    <Grid container sx={{ border: "1px solid red" }}>
      <Grid item xs={6}>
        l
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            width: "100%",
            color: "#5BF2CE",
            textAlign: "right",
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
            textAlign: "right",
            mb: "19px",
          }}
        >
          Haylon theme
        </Box>
        <Box
          sx={{
            height: "253px",
            width: "100%",
            border: "1px solid red",
            background: "cyan",
            mb: "22px",
          }}
        ></Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box sx={{ display: "flex", border: "1px solid blue", mb: "10px" }}>
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
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box sx={{ display: "flex" }}>
            <GitHubIcon style={{ marginRight: "20px" }} /> <GitHubIcon />{" "}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Builtcard;
