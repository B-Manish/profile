import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box, duration } from "@mui/material";
import "../App.css";
import Test from "./Test";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import yellowImg from "../static/yellow.jpg";

const Threed = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [selectedModel, setSelectedModel] = useState(0);
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // models
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation of each model
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: "black",
        overflowX: "hidden",
        height: "100vh",
      }}
    >
      <Box
        id="heading"
        sx={{ opacity: "0", color: "#86868b", fontSize: "56px" }}
        className="roboto"
      >
        Take a closer look.
      </Box>
      <Box
        id="heading"
        sx={{
          opacity: "0",
          display: "flex",
          width: "65vw",
        }}
      >
        <Box>
          <Test
            index={1}
            groupRef={small}
            gsapType="view1"
            controlRef={cameraControlSmall}
            setRotationState={setSmallRotation}
            item={model}
            size={size}
            width="65vw"
          />
        </Box>
        <Box>
          <Test
            index={2}
            groupRef={large}
            gsapType="view2"
            controlRef={cameraControlLarge}
            setRotationState={setLargeRotation}
            item={model}
            size={size}
            width="65vw"
          />
        </Box>

        <Canvas
          style={{
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
          }}
          eventSource={document.getElementById("root")}
        >
          <View.Port />
        </Canvas>
      </Box>
    </Box>
  );
};

export default Threed;
