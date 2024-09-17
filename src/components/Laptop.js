import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Laptop(props) {
  const { nodes, materials } = useGLTF("/models/laptop.glb");

  const texture = useTexture(props.item.img);

  //   useEffect(() => {
  //     Object.entries(materials).map((material) => {
  //       // these are the material names that can't be changed color
  //       if (
  //         material[0] !== "zFdeDaGNRwzccye" &&
  //         material[0] !== "ujsvqBWRMnqdwPx" &&
  //         material[0] !== "hUlRcbieVuIiOXG" &&
  //         material[0] !== "jlzuBkUzuJqgiAK" &&
  //         material[0] !== "xNrofRCqOXXHVZt"
  //       ) {
  //         material[1].color = new THREE.Color(props.item.color[0]);
  //       }
  //       material[1].needsUpdate = true;
  //     });
  //   }, [materials, props.item]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_ComputerFrame_0.geometry}
        material={materials.ComputerFrame}
        position={[0, 0.976, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen_ComputerScreen_0.geometry}
        material={materials.ComputerScreen}
        position={[0, 0.65, -10.3]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={[100, 100, 88.235]}
      />
    </group>
  );
}

export default Laptop;

useGLTF.preload("/models/laptop.glb");
