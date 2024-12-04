import React, { useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import CustomDivider from "./Divider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

gsap.registerPlugin(ScrollTrigger);

function Worked({ setExpRef }) {
  const mainRef = useRef(null);
  const isMdScreen = useMediaQuery("(max-width:899px)");
  const isSxScreen = useMediaQuery("(max-width:599px)");

  useEffect(() => {
    setExpRef(mainRef);
  }, []);

  const projectExperience = [
    "Collaborated with my colleague and team lead to build a documentation portal for our client’s product using Docusaurus (a static website generator).",
    // "Successfully launched the documentation portal within a few months.",
    // "Worked for 1.5 years on the UI for Covalent, a Python package that enhances performance by running Python workflows on the cloud.",
    "Contributed to building a web application that visualizes and interacts with Covalent’s functionality.",
    // "Utilized React for frontend development.",
    "Implemented state management using Redux and Context API.",
    "Integrated REST APIs provided by the client into the web application.",
    "Focused on virtualization to handle dynamic updates in the DOM.",
    // "Engaged in GitHub source control activities such as push, pull, branch merges, and PR approvals.",
    "Employed Jest for unit testing to ensure code quality.",
  ];

  return (
    <Grid
      container
      sx={{ background: "#0A192F" }}
      className="ggg"
      ref={mainRef}
    >
      <Grid item xs={1}></Grid>
      <Grid
        item
        xs={isSxScreen ? 12 : 10}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: isSxScreen && "0 30px",
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
            minHeight: "500px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: "20px",
            }}
            className="roboto"
          >
            <Box
              sx={{
                color: "#5BF2CE",
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "18px",
                  lg: "22px",
                },
              }}
            >
              02.
            </Box>
            <Box
              className="customdmsans"
              sx={{
                color: "#A7C3E5",
                fontWeight: "600",
                fontSize: {
                  xs: "20px",
                  sm: "24px",
                  md: "28px",
                  lg: "32px",
                },
                whiteSpace: "nowrap",
              }}
            >
              Where I’ve Worked
            </Box>
            <CustomDivider />
          </Box>
          <Grid container>
            {isMdScreen ? (
              <Box
                className="roboto"
                sx={{
                  color: "#64FFDA",
                  fontSize: "13px",
                  padding: "10px",
                  borderBottom: "2px solid #64FFDA",
                  cursor: "pointer",
                  mb: "20px",
                }}
              >
                PSIOG Digital Ltd
              </Box>
            ) : (
              <Grid item xs={3}>
                <Box
                  className="roboto"
                  sx={{
                    color: "#64FFDA",
                    fontSize: "13px",
                    padding: "10px 15px",
                    borderLeft: "2px solid #64FFDA",
                    cursor: "pointer",
                  }}
                >
                  PSIOG Digital Ltd
                </Box>
              </Grid>
            )}

            <Grid item xs={isMdScreen ? 12 : 9} sx={{ mb: "50px" }}>
              <Box
                className="customdmsans"
                sx={{
                  color: "#A7C3E5",
                  fontWeight: "500",
                  fontSize: "24px",
                  mb: "5px",
                  whiteSpace: "nowrap",
                }}
              >
                Software Engineer
              </Box>
              <Box
                className="roboto"
                sx={{
                  color: "#A7C3E5",
                  fontSize: "13px",
                  mb: "20px",
                }}
              >
                June 2023 - Present
              </Box>
              {projectExperience.map((item) => {
                return (
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ paddingRight: "10px" }}>
                      <PlayArrowIcon
                        style={{ color: "#64FFDA", fontSize: "12px" }}
                      />
                    </Box>
                    <Box
                      sx={{ color: "#8892b0", mb: "5px" }}
                      className="customdmsans"
                    >
                      {item}
                    </Box>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Worked;
