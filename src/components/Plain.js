import * as THREE from "three";
import React from "react";
import { useGLTF, useTexture, PerspectiveCamera } from "@react-three/drei";
import vs from "../static/npmr.png";

function Plain(props) {
  const { nodes, materials } = useGLTF("/models/gg.glb");

  const screenTexture = useTexture(vs);

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_Body001_1.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_Body001_2.geometry}
          material={materials.Screen_Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_Body001_3.geometry}
          // material={materials.Screen_Emitter}
          material={new THREE.MeshBasicMaterial({ map: screenTexture })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_Body001_4.geometry}
          material={materials.Screen_Mat_Text}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_Body001_5.geometry}
          material={materials.TouchPad}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_Body001_6.geometry}
          material={materials.Knurling}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_Body001_7.geometry}
          material={materials.Keyboard}
        />
      </group>
      {/* <PerspectiveCamera
        makeDefault={false}
        far={100}
        near={0.1}
        fov={22.895}
        position={[5.409, 1.788, 13.386]}
      /> */}
    </group>
  );
}

export default Plain;

useGLTF.preload("/models/gg.glb");
