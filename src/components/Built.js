import React, { useRef, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import CustomDivider from "./Divider";
import Builtcard from "./Builtcard";

function Built({ setBuiltRef }) {
  const mainRef = useRef(null);
  const [fontSize, setFontSize] = useState(32);

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
      <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "80%", maxWidth: "1000px" }}>
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
          <Builtcard margin="0 0 100px 0" iphone />
          <Builtcard reverse margin="0 0 100px 0" />
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Built;
