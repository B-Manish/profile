import React from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "./Navbar";

function Template({ page }) {
  return (
    <Grid
      container
      xs={12}
      sx={{
        height: "100vh",
        background: "#0F172A",
        border: "1px solid red",
      }}
    >
      <Navbar />
      {page}
    </Grid>
  );
}

export default Template;
