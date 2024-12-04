import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Plain from "./Plain";

const Model = () => {
  return <Plain position={[-5, -1.5, 0]} />;
};

const Viewer = ({ height = "700px", width = "1400px" }) => {
  return (
    <Canvas
      style={{ height: height, width: width }}
      camera={{
        near: 0.1,
        far: 100,
        fov: 22.895,
        position: [5.409, 1.788, 13.386],
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Model />
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
    </Canvas>
  );
};

export default Viewer;
