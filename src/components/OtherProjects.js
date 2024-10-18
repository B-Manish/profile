import React, { useRef } from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import OtherProjectsCard from "./OtherProjectsCard";

gsap.registerPlugin(ScrollTrigger);

function OtherProjects() {
  //   const containerRef = useRef(null);

  //   useGSAP(() => {
  //     gsap.fromTo(
  //       containerRef.current,
  //       {
  //         opacity: 0,
  //         // y: -20, // Start 10 pixels above the original position
  //       },
  //       {
  //         duration: 1,
  //         opacity: 1,
  //         // y: 0, // Move to the original position
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "top 85%", // Start animation when the top of the box reaches 85% down the viewport
  //           end: "top 40%", // End animation when the top of the box reaches 40% down the viewport
  //           scrub: true, // Smooth animation based on scroll position
  //           // markers: true, // Optional: Show markers for debugging
  //         },
  //       }
  //     );
  //   }, []);

  const otherprojects = [
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz when an admin creates a matches and the user can monitor scores on the application.",
      skills: ["Angular", ".NET", "Swagger"],
    },
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz when an admin creates a matches and the user can monitor scores on the application.",
      skills: ["Angular", ".NET", "Swagger"],
    },
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz when an admin creates a matches and the user can monitor scores on the application.",
      skills: ["Angular", ".NET", "Swagger"],
    },
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz when an admin creates a matches and the user can monitor scores on the application.",
      skills: ["Angular", ".NET", "Swagger"],
    },
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz when an admin creates a matches and the user can monitor scores on the application.",
      skills: ["Angular", ".NET", "Swagger"],
    },
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz when an admin creates a matches and the user can monitor scores on the application.",
      skills: ["Angular", ".NET", "Swagger"],
    },
  ];
  return (
    <Grid container sx={{ background: "#0A192F" }}>
      <Grid item xs={1}></Grid>
      <Grid
        item
        xs={10}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "80%",
            maxWidth: "1000px",
          }}
        >
          <Box
            className="customdmsans"
            sx={{
              color: "#A7C3E5",
              fontWeight: "600",
              fontSize: "24px",
              mb: "19px",
            }}
          >
            Other Projects
          </Box>

          <Grid container>
            {otherprojects?.map((project, index) => {
              return (
                <Grid item xs={4} sx={{ padding: "8px" }}>
                  <OtherProjectsCard
                    heading={project.heading}
                    description={project.description}
                    skills={project.skills}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default OtherProjects;
