import React, { useRef, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import CustomDivider from "./Divider";
import { useMediaQuery } from "@mui/material";
import Builtcard from "./Builtcard";
import Ecomm from "../static/ecomm.png";
import Npm from "../static/npm.png";
import Swiggy from "../static/swiggy.png";


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
            heading="Cloud-based Food Ordering Application"
            img={Swiggy}
            technologies={["React", "FastAPI", "Lambda","API Gateway", "Amplify", "EC2"]}
            npm
            description="Developed a full-stack food ordering application using React for the frontend and FastAPI for the backend. The backend APIs are hosted on AWS, utilizing Lambda for serverless functions, API Gateway for routing, EC2 for compute, and S3 for storage. "
          />
          <Builtcard
            margin="0 0 100px 0"
            heading="Custom Package"
            reverse
            img={Npm}
            iphone
            technologies={["React", "webpack", "npm"]}
            npm
            description="Developed a React package that optimizes rendering performance by implementing virtualization. This package allows for efficient rendering of large data sets by only displaying visible elements, significantly improving load times and reducing memory usage.This package is ideal for developers looking to enhance the performance of their React applications, especially those handling dynamic and large lists."
          />
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Built;
