import React from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import CustomDivider from "./Divider";
import Builtcard from "./Builtcard";

function Built() {
  return (
    <Grid container sx={{ background: "#081324" }}>
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
          <Builtcard margin="0 0 100px 0" />
          <Builtcard reverse margin="0 0 100px 0" />
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Built;
