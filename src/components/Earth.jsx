import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

const Earth = () => {
  const meshRef = useRef();

  // Animation loop
  useFrame(() => {
    meshRef.current.rotation.y += 0.005;
  });

  // Load texture
  const texture = new TextureLoader().load("/assets/earth.jpg");

  return (
    <mesh ref={meshRef}>
      <OrbitControls />
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
};

export default Earth;
