import React, { useRef, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import CustomDivider from "./Divider";
import { useMediaQuery } from "@mui/material";
import Builtcard from "./Builtcard";
import Ecomm from "../static/ecomm.png";
import Npm from "../static/npm.png";
import Swiggy from "../static/swiggy.png";
import Generator from "../static/generator.png";
import Pdf from "../static/pdfextractor.png";
import ManishGPT from "../static/manishgpt.png";
import Resume from "../static/resume.png";


function Built({ setBuiltRef }) {
  const mainRef = useRef(null);
  const [fontSize, setFontSize] = useState(32);
  const isSxScreen = useMediaQuery("(max-width:599px)");

  useEffect(() => {
    setBuiltRef(mainRef);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Increase font size gradually based on screen width
      if (width < 600) {
        setFontSize(16);
      } else if (width < 960) {
        setFontSize(20);
      } else if (width < 1280) {
        setFontSize(24);
      } else if (width < 1920) {
        setFontSize(28);
      } else {
        setFontSize(32);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial call to set the correct size on load
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Grid container sx={{ background: "#0A192F" }} ref={mainRef}>
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
            width: isSxScreen ? "100%" : "80%",
            maxWidth: "1000px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: "37px",
            }}
            className="roboto"
          >
            <Box
              sx={{
                color: "#5BF2CE",
                fontSize: `${fontSize}px`,
              }}
            >
              03.
            </Box>
            <Box
              className="customdmsans"
              sx={{
                color: "#A7C3E5",
                fontWeight: "600",
                fontSize: `${fontSize + 4}px`,
                whiteSpace: "noWrap",
              }}
            >
              Some Things I’ve Built
            </Box>
            <CustomDivider />
          </Box>
          <Builtcard
            margin="0 0 100px 0"
            heading="ManishGPT - Multi-Agent LLM Platform"
            img={ManishGPT}
            technologies={[
              "React",
              "FastAPI",
              "pgvector",
              "Redis",
              "Docker",
              "AWS EC2",
            ]}
            reverse
            githuburl="https://github.com/B-Manish/ManishGPT"
            liveurl="https://app.manishbatchu.com"
            description="A production-ready multi-agent AI platform with LLM orchestration, cost-aware model routing, and role-based autonomous agents. Uses pgvector embeddings for semantic retrieval, streams responses to a React UI, and runs as Dockerized microservices (FastAPI, PostgreSQL, Redis, MinIO) behind a reverse proxy on AWS EC2, with Redis-backed rate limiting and response caching."
          />
          <Builtcard
            margin="0 0 100px 0"
            heading="Folio - AI Resume Tailor"
            img={Resume}
            technologies={[
              "FastAPI",
              "Claude API",
              "SQLite",
              "MinIO",
              "LaTeX",
              "Docker",
            ]}
            githuburl="https://github.com/B-Manish/resume"
            liveurl="https://resume.manishbatchu.com/"
            description="A web app that tailors a resume to a job description with Claude. Sign in with Google, upload a resume PDF and paste a job description. Claude extracts the resume into structured JSON and rewrites the summary, skills, experience and projects section by section. You review each change side by side, accept or reject it, and download a PDF compiled from a LaTeX template with Tectonic. Contact details and education are never sent to the model, and any rewritten section containing a number missing from the original is flagged and defaults to rejected."
          />
          <Builtcard
            margin="0 0 100px 0"
            heading="PDF Invoice Text Extractor"
            img={Pdf}
            reverse
            technologies={[
              ".NET ",
              "AWS Textract",
              "AWS S3"
            ]}
            githuburl="https://github.com/B-Manish/pdfextractor"
            description="Developed a PDF Invoice Text Extractor using .NET that automates the process of extracting textual data from PDF invoices and converts it into a structured CSV format. This tool simplifies invoice data handling for businesses or individuals managing large volumes of invoices."
          />
          <Builtcard
            margin="0 0 100px 0"
            heading="Profile Generator"
            img={Generator}
            technologies={[
              "React",
              "Netlify",
              "Lambda",
              "API Gateway",
              "S3",
              "Express.js",
            ]}
            githuburl="https://github.com/B-Manish/ProfileGenerator"
            description="Developed a dynamic profile website generator using React, enabling users to input their personal details—such as name, experience, projects, and hobbies—and automatically generate a personalized website. The application hosts the website on Netlify and provides users with a unique URL for easy access and sharing. "
          />
          <Builtcard
            margin="0 0 100px 0"
            heading="Cloud-based Food Ordering Application"
            img={Swiggy}
            technologies={[
              "React",
              "FastAPI",
              "Lambda",
              "API Gateway",
              "Amplify",
              "EC2",
              "DynamoDB",
            ]}
            reverse
            githuburl="https://github.com/B-Manish/FullStackApp"
            description="Developed a full-stack food ordering application using React for the frontend and FastAPI for the backend. The backend APIs are hosted on AWS, utilizing Lambda for serverless functions, API Gateway for routing, EC2 and DynamoDB for compute, and S3 for storage. "
          />
          <Builtcard
            margin="0 0 100px 0"
            heading="Custom Package"
            img={Npm}
            iphone
            technologies={["React", "webpack", "npm"]}
            npm
            githuburl="https://github.com/B-Manish/ggpackage"
            description="Developed a React package that optimizes rendering performance by implementing virtualization. This package allows for efficient rendering of large data sets by only displaying visible elements, significantly improving load times and reducing memory usage.This package is ideal for developers looking to enhance the performance of their React applications, especially those handling dynamic and large lists."
          />
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Built;
