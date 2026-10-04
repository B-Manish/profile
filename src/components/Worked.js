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

  const jobs = [
    {
      company: "Innings2 Pvt Ltd",
      title: "AI Engineer",
      period: "May 2025 - Present",
      points: [
        "Architecting a multi-agent orchestration platform using the Agno framework and FastAPI, enabling LLM-powered task-specific agents, real-time dashboards, and automated data workflows.",
        "Designed a pluggable agent-tool architecture with dynamic agents and tools (schema loaders, data analysts, dashboard generators).",
        "Co-designed the distributed task scheduler for recurring and trigger-based agent workflows.",
        "Implemented MinIO signed URLs for time-bound, secure access to AI-generated artifacts.",
        "Engineered centralized structured logging with log rotation for production-grade observability.",
        "Integrated cURL command execution so agents can call external APIs through natural language workflows.",
      ],
    },
    {
      company: "Psiog Digital Pvt Ltd",
      title: "Software Engineer",
      period: "Jun 2022 - May 2025",
      points: [
        "Built scalable React frontends integrated with AWS services (Lambda, API Gateway, EC2, S3, DynamoDB).",
        "Specialized in virtualized UIs, optimizing DOM rendering and data handling for large datasets, for a 60% performance improvement.",
        "Built and deployed a customized documentation platform using Docusaurus within 3 months.",
        "Raised unit and integration test coverage from 60% to 87%.",
      ],
    },
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
          {jobs.map((job) => (
          <Grid container key={job.company}>
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
                {job.company}
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
                  {job.company}
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
                {job.title}
              </Box>
              <Box
                className="roboto"
                sx={{
                  color: "#A7C3E5",
                  fontSize: "13px",
                  mb: "20px",
                }}
              >
                {job.period}
              </Box>
              {job.points.map((item) => {
                return (
                  <Box sx={{ display: "flex" }} key={item}>
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
          ))}
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Worked;
