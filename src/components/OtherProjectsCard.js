import React from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

function OtherProjectsCard({ heading, description, skills }) {
  return (
    <Box
      sx={{
        background: "#112240",
        // height: "300px",
        // width: "300px",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "20px" }}
      >
        <FolderOutlinedIcon style={{ fontSize: "50px", color: "#5BF2CE" }} />
      </Box>

      <Box
        className="customdmsans"
        sx={{
          color: "#A7C3E5",
          fontWeight: "600",
          fontSize: "22px",
          mb: "12px",
        }}
      >
        {heading}
      </Box>

      <Box
        className="customdmsans"
        sx={{
          color: "#99ACC3",
          fontSize: "16px",
          mb: "19px",
        }}
      >
        {description}
      </Box>
      <Box sx={{ display: "flex" }}>
        {skills?.map((skill, index) => {
          return (
            <Box
              key={skill}
              className="roboto"
              sx={{
                marginRight: index !== skills.length - 1 && "20px",
                fontSize: "13px",
              }}
            >
              {skill}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default OtherProjectsCard;
