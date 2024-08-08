import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box } from "@mui/material";
import "../App.css";
// import { heroVideo } from "../utils";

const Apple = () => {
  useGSAP(() => {
    gsap.to("#apple", { opacity: 1, delay: 1 });
  }, []);
  return (
    <Box>
      <Box
        sx={{ opacity: "0", fontSize: "100px" }}
        className="roboto"
        id="apple"
      >
        Apple
      </Box>
      <Box sx={{ border: "1px solid red" }}>
        {/* <video>
          <src src={heroVideo} />
        </video> */}
      </Box>
    </Box>
  );
};

export default Apple;
