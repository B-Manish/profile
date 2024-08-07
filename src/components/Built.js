import React from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import CustomDivider from "./Divider";
import Builtcard from "./Builtcard";

function Built() {
  return (
    <Box sx={{ width: "1000px" }}>
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
            fontSize: "24px",
          }}
        >
          03.
        </Box>
        <Box
          className="customdmsans"
          sx={{ color: "#A7C3E5", fontWeight: "600", fontSize: "32px" }}
        >
          Some Things I’ve Built
        </Box>
        <CustomDivider />
      </Box>
      <Builtcard />
      <Builtcard reverse />
    </Box>
  );
}

export default Built;
