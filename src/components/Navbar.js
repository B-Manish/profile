import React, { useEffect } from "react";
import { Box } from "@mui/material";
import "../App.css";
import Logo from "../static/logo.png";

function Navbar() {
  const navbaritems = ["About", "Experience", "Work", "Contact"];

  return (
    <Box
      className="roboto"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "75px",
        alignItems: "center",
      }}
    >
      <img src={Logo} style={{ height: "40px", width: "40px" }} />
      <Box>
        <Box sx={{ display: "flex" }}>
          {navbaritems?.map((item, index) => {
            return (
              <Box
                sx={{
                  pr: "15px",
                  cursor: "pointer",
                  display: "flex",
                  fontSize: "12px",
                }}
              >
                <Box sx={{ color: "#5BF2CE" }}> 0{index + 1}.</Box>
                <Box sx={{ color: "#A7C3E5" }}> {item}</Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
