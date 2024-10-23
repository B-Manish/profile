import React, { useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import CustomDivider from "./Divider";
import profile from "../static/profile.JPG";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

function Aboutme({ setAboutRef }) {
  const mainRef = useRef(null);
  const containerRef = useRef(null);
  const isMdScreen = useMediaQuery("(max-width:899px)");

  useEffect(() => {
    setAboutRef(mainRef);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        // y: -20, // Start 10 pixels above the original position
      },
      {
        duration: 1,
        opacity: 1,
        // y: 0, // Move to the original position
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Start animation when the top of the box reaches 85% down the viewport
          end: "top 40%", // End animation when the top of the box reaches 40% down the viewport
          scrub: true, // Smooth animation based on scroll position
          // markers: true, // Optional: Show markers for debugging
        },
      }
    );
  }, []);
  return (
    <Grid
      container
      sx={{ background: "#0A192F" }}
      className="ggg"
      ref={mainRef}
    >
      <Grid item xs={1}></Grid>
      <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "75%",
            maxWidth: "900px",
            minHeight: "500px",
            opacity: "0",
          }}
          ref={containerRef}
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
                fontSize: "24px",
              }}
            >
              01.
            </Box>
            <Box
              className="customdmsans"
              sx={{
                color: "#A7C3E5",
                fontWeight: "600",
                fontSize: "32px",
                whiteSpace: "nowrap",
              }}
            >
              About me
            </Box>
            <CustomDivider />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ maxWidth: "511px" }}>
              <Box
                className="customdmsans"
                sx={{ fontWeight: "300", color: "#8892b0", mb: "10px" }}
              >
                Hello! My name is Manish, and I'm a frontend developer that
                enjoys backend development and building code that requires
                logical issue solving.
              </Box>
              <Box
                className="customdmsans"
                sx={{ fontWeight: "300", color: "#8892b0" }}
              >
                While I enjoy creating smooth, user-friendly interfaces, I am
                most motivated by the difficulties of developing scalable,
                efficient backend solutions. I enjoy solving challenging coding
                issues and bridging the gap between the frontend and backend to
                develop unified, high-performance apps.
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: "389px",
                padding: isMdScreen ? "25px 0 0 0" : "0 0 0 30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  background: ` url(${profile})`,
                  minHeight: "250px",
                  minWidth: "250px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Aboutme;
