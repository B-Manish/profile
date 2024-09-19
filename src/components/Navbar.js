import React, { useEffect } from "react";
import { Box } from "@mui/material";
import "../App.css";
import Logo from "../static/logo.png";
import CustomButton from "./Custombutton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const navbaritems = ["About", "Experience", "Work", "Contact"];

  useGSAP(() => {
    gsap.fromTo(
      ".items",
      { opacity: 0, y: -30 }, // Start from -100px (off-screen top)
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 } // Animate to the original position
    );

    gsap.fromTo(".logo", { opacity: 0 }, { opacity: 1, delay: "0.2" });
  }, []);

  return (
    <Box
      className="roboto"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "85px",
        alignItems: "center",
        padding: "0 50px",
      }}
    >
      <img
        src={Logo}
        className="logo"
        style={{ height: "40px", width: "40px" }}
      />
      <Box>
        <Box sx={{ display: "flex" }}>
          {navbaritems?.map((item, index) => {
            return (
              <Box
                sx={{
                  pr: "25px",
                  cursor: "pointer",
                  display: "flex",
                  fontSize: "12px",
                }}
                className="items"
              >
                <Box
                  sx={{
                    color: "#5BF2CE",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  0{index + 1}.
                </Box>
                <Box
                  sx={{
                    color: "#A7C3E5",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item}
                </Box>
              </Box>
            );
          })}
          <Box className="items">
            <CustomButton text="Resume" padding="12px 16px" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
