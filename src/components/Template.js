import React from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "./Navbar";

function Template({ page }) {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        background: "#0F172A",
      }}
    >
      <Navbar />
      {page}
    </Grid>
  );
}

export default Template;
