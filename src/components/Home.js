import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

function Home() {
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
            // fontFamily: 'Gotham',
          }}
        >
          Front-End Developer
        </Box>
        <motion.div
          style={{
            width: "0px",
            // height: "100px",
            backgroundColor: "cyan",
            border: "1px solid red",
            whiteSpace: "nowrap",
          }}
          animate={{
            width: "1000px",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          {" "}
          <Box
            sx={{
              fontSize: "100px",
              color: "rgb(255 255 255)",
              // fontFamily: 'Gotham',
            }}
          >
            Front-End Developer
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Home;
