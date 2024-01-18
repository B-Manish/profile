import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [roleColor, setRoleColor] = useState("transparent");
  const [highlightColor, setHighlightColor] = useState("cyan");

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "rgb(17 17 17)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Sidebar />
      <Box>
        <Box sx={{ fontSize: "22px", color: "rgb(255 255 255)" }}>
          BATCHU MANISH
        </Box>

        <Box
          sx={{
            fontSize: "100px",
            color: "rgb(255 255 255)",
            // fontFamily: 'Gotham','
            position: "relative",
          }}
        >
          Front-End Developer
          <motion.div
            style={{
              width: "0px",
              backgroundColor: highlightColor,
              whiteSpace: "nowrap",
              zIndex: "100",
              position: "absolute",
              top: "0",
              left: "0",
            }}
            animate={{
              width: "calc(100%)",
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            onAnimationComplete={() => {
              setRoleColor("rgb(255 255 255)");
              setHighlightColor("transparent");
            }}
          >
            <Box
              sx={{
                fontSize: "100px",
                color: roleColor,
              }}
            >
              Front-End Developer
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
