import React, { useRef } from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import OtherProjectsCard from "./OtherProjectsCard";

gsap.registerPlugin(ScrollTrigger);

function OtherProjects() {
  const gridItemRefs = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(gridItemRefs.current[index], {
      scale: 1.02,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(gridItemRefs.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const otherprojects = [
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz where an admin creates a matches and the user can monitor scores on the application.",
      skills: ["Angular", ".NET", "Swagger"],
    },
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz where an admin creates a matches and the user can monitor scores on the application.",
      skills: ["Angular", ".NET", "Swagger"],
    },
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz where an admin creates a matches and the user can monitor scores on the application.",
      skills: ["Angular", ".NET", "Swagger"],
    },
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz where an admin creates a matches and the user can monitor scores on the application.",
      skills: ["Angular", ".NET", "Swagger"],
    },
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz where an admin creates a matches and the user can monitor scores on the application.",
      skills: ["Angular", ".NET", "Swagger"],
    },
    {
      heading: "Clone of cricbuzz",
      description:
        "Made a clone of cricbuzz where an admin creates a matches and the user can monitor scores on the application.",
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
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  sx={{ padding: "8px", cursor: "pointer" }}
                  key={index}
                  ref={(el) => (gridItemRefs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
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
