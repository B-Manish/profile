import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import vs from "../static/vscode.png";

function Asus(props) {
  const { nodes, materials } = useGLTF("/models/asus.glb");

  useEffect(() => {
    console.log("materials", materials);
  }, [materials]);

  const screenTexture = useTexture(vs);

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.074, 0]} scale={[1.693, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["Matte Black"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hdmi.geometry}
          material={materials.Keycaps}
          position={[-0.952, 0.027, -0.391]}
          scale={[0.085, 0.015, 0.071]}
        >
          <group position={[0.006, 0.3, -0.021]} scale={[0.044, 0.216, 0.714]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004.geometry}
              material={materials.Gold}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004_1.geometry}
              material={materials.Keycaps}
            />
          </group>
        </mesh>
        <group
          position={[0.952, 0.028, -0.07]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[-0.019, -0.025, -0.019]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.Keycaps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials.Gold}
          />
        </group>
        <group
          position={[0.715, 0.04, 0.127]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.042, 0.033, 0.059]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012.geometry}
            material={materials.Keycaps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_1.geometry}
            material={materials.Glow}
          />
        </group>
        <group
          position={[-0.953, 0.03, -0.758]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.014, 0.025, 0.014]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.Keycaps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Body}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RTX_Sticker.geometry}
          material={materials["RTX Sticker"]}
          position={[-0.682, 0.058, 0.858]}
          scale={[0.075, 0.126, 0.126]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ryzen_Sticker.geometry}
          material={materials["Ryzen Sticker"]}
          position={[-0.86, 0.058, 0.86]}
          scale={[0.076, 0.128, 0.128]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen.geometry}
          material={materials["Matte Black"]}
          position={[-0.003, 0.077, -0.94]}
          rotation={[-1.625, 0, 0]}
        >
          <group
            position={[0.003, 0.035, -0.017]}
            rotation={[1.575, 0, 0]}
            scale={[0.994, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials.Keycaps}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane006_1.geometry}
              material={materials.Body}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Acer-Logo_2011001"].geometry}
            material={materials["Acer-Logo_2011"]}
            position={[0, 0.11, 0.932]}
            rotation={[-3.141, 0, Math.PI]}
            scale={[0.152, 0.257, 0.51]}
          />
          <group position={[0, 0.072, 1.048]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane004.geometry}
              material={materials.Keycaps}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane004_1.geometry}
              material={new THREE.MeshBasicMaterial({ map: screenTexture })}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Full_HD_Sticker.geometry}
              material={materials["Full HD Sticker"]}
              position={[-0.695, -0.005, -0.901]}
              rotation={[-3.14, 0, 0]}
              scale={[0.067, 0.114, 0.114]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Acer-Logo_2011"].geometry}
              material={materials["Acer-Logo_2011"]}
              position={[0, -0.005, -0.9]}
              rotation={[-3.14, 0, 0]}
              scale={[0.07, 0.118, 0.192]}
            />
            <group
              position={[0, -0.001, 0.803]}
              rotation={[3.141, 0, 0]}
              scale={[-0.018, -0.004, -0.031]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder004.geometry}
                material={materials.Keycaps}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder004_1.geometry}
                material={materials["Web cam"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder004_2.geometry}
                material={materials["Webcam lens"]}
              />
            </group>
          </group>
        </mesh>
        <group position={[-0.938, 0.03, -0.585]} scale={[0.589, 0.199, 0.996]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.Body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.Keycaps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials.Gold}
          />
        </group>
        <group
          position={[0.938, 0.03, -0.665]}
          rotation={[0, 0, Math.PI]}
          scale={[0.589, 0.199, 0.996]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.Body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.Keycaps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_2.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_3.geometry}
            material={materials.Blue}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.USB_Metal.geometry}
          material={materials.Keycaps}
          position={[-0.944, 0.03, -0.166]}
          scale={[0.033, 0.021, 0.065]}
        >
          <group
            position={[0.233, 0.204, 0.006]}
            scale={[-1.052, -0.286, -0.812]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012.geometry}
              material={materials.Blue}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012_1.geometry}
              material={materials.Gold}
            />
          </group>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.USB_Metal_2.geometry}
          material={materials.Keycaps}
          position={[0.943, 0.03, -0.216]}
          rotation={[0, 0, Math.PI]}
          scale={[0.033, 0.021, 0.065]}
        >
          <group
            position={[0.233, -0.227, 0.006]}
            rotation={[Math.PI, 0, 0]}
            scale={[-1.052, -0.286, -0.812]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube014.geometry}
              material={materials.Blue}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube014_1.geometry}
              material={materials.Gold}
            />
          </group>
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keycaps_lable_3.geometry}
        material={materials["Keycaps lable 3"]}
        position={[-0.004, 0.129, -0.315]}
        scale={0.907}
      />
    </group>
  );
}

export default Asus;

useGLTF.preload("/models/asus.glb");
