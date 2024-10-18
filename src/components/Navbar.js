import React, { useEffect, useState } from "react";
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

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // To prevent multiple GSAP calls
  const [isAtTop, setIsAtTop] = useState(true); // New state to track if at top

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      // Toggle shadow based on scroll position
      if (currentScrollPosition === 0) {
        setIsAtTop(true); // We're at the top of the page
      } else {
        setIsAtTop(false); // We're scrolling away from the top
      }

      if (currentScrollPosition > scrollPosition && !isAnimating) {
        // Scrolling down, hide navbar
        setIsAnimating(true);
        gsap.to(".navbar", {
          y: -100, // Move navbar off-screen
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => setIsAnimating(false),
        });
      } else if (currentScrollPosition < scrollPosition && !isAnimating) {
        // Scrolling up, show navbar
        setIsAnimating(true);
        gsap.to(".navbar", {
          y: 0, // Bring navbar back to the top position
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => setIsAnimating(false),
        });
      }

      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, isAnimating]);

  return (
    <Box
      className="navbar"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "85px",
        alignItems: "center",
        position: "fixed",
        fontFamily: '"Roboto Mono", monospace',
        backdropFilter: " blur(20px)",
        boxShadow: !isAtTop && "0 4px 20px rgba(0, 0, 0, 0.3)",
        zIndex: "1000",
      }}
    >
      <img
        src={Logo}
        className="logo"
        style={{ height: "40px", width: "40px", marginLeft: "50px" }}
      />

      <Box sx={{ marginRight: "50px" }}>
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
