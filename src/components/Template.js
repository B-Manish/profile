import React from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "./Navbar";
import "../App.css";

function Template({ page }) {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        background: "#081324",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          bottom: "100px",
          left: "100px",
          height: "50px",
          width: "50px",
          backgroundColor: "blue",
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: "500px",
          right: "100px",
          height: "50px",
          width: "50px",
          border: "1px solid red",
          color: "#A8B2D1",
          fontSize: "12px",
          rotate: "90deg",
        }}
        className="roboto"
      >
        <Box> bmanish7777@gmail.com</Box>
        <Box sx={{ height: "30px", width: "10px", background: "grey" }} />
      </Box>

      <Navbar />
      <Box
        sx={{
          height: "calc(100vh - 89px)",
          width: "100vw",
        }}
      >
        {page}
      </Box>
    </Grid>
  );
}

export default Template;
