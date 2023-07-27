import { OrbitControls } from "@react-three/drei";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const animatedBlob = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#8253fd"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={1}
        />
      </Sphere>
    </>
  );
};

export default animatedBlob;
