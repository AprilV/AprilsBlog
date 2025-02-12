import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Torus, Plane, Box, Float, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import * as THREE from "three";

function ThreeD() {
  const [scene, setScene] = useState(1); // Track current scene (1-5)

  return (
    <div style={{ width: "100vw", height: "100vh", background: "black", position: "relative" }}>
      <button
        onClick={() => setScene(scene === 5 ? 1 : scene + 1)} // Cycle through 5 scenes
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          background: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          zIndex: 10
        }}
      >
        Switch 3D Effect (Scene {scene}/5)
      </button>

      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={["black"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <EffectComposer>
          <Bloom intensity={1.5} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
          <ChromaticAberration offset={[0.002, 0.002]} />
          <Noise opacity={0.2} />
          <Vignette eskil={false} offset={0.2} darkness={1.5} />
        </EffectComposer>
        <Environment preset="sunset" />

        {/* Render the correct 3D effect based on scene number */}
        {scene === 1 && <EnergyOrb />}
        {scene === 2 && <GlowingTorus />}
        {scene === 3 && <WavingGrid />}
        {scene === 4 && <BouncingCube />}
        {scene === 5 && <PulsatingPyramid />}
      </Canvas>
    </div>
  );
}

// Scene 1: Floating Colorful Energy Orb
function EnergyOrb() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial color="cyan" emissive="cyan" emissiveIntensity={2} roughness={0.2} metalness={1} />
      </Sphere>
    </Float>
  );
}

// Scene 2: Rotating Glowing Torus
function GlowingTorus() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
      <Torus args={[1, 0.4, 32, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="hotpink" roughness={0.2} metalness={1} />
      </Torus>
    </Float>
  );
}

// Scene 3: Waving Grid Plane
function WavingGrid() {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.geometry.attributes.position.array.forEach((_, i, arr) => {
      arr[i] += Math.sin(clock.elapsedTime + i * 0.1) * 0.002;
    });
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Plane ref={ref} args={[5, 5, 50, 50]} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial wireframe color="lime" />
    </Plane>
  );
}

// Scene 4: Bouncing Rainbow Cube
function BouncingCube() {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.position.y = Math.sin(clock.elapsedTime * 3) * 1.5;
    ref.current.rotation.x += 0.02;
    ref.current.rotation.y += 0.02;
    ref.current.material.color.setHSL(clock.elapsedTime % 1, 1, 0.5);
  });

  return (
    <Box ref={ref} args={[1.5, 1.5, 1.5]}>
      <meshStandardMaterial emissive="blue" emissiveIntensity={1} />
    </Box>
  );
}

// Scene 5: Pulsating Neon Pyramid (NEW)
function PulsatingPyramid() {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.y += 0.02; // Smooth rotation
    ref.current.scale.setScalar(1 + Math.sin(clock.elapsedTime * 3) * 0.1); // Pulsating effect
    ref.current.material.color.setHSL(clock.elapsedTime % 1, 1, 0.5); // Dynamic color change
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
      <mesh ref={ref}>
        <tetrahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial emissive="magenta" emissiveIntensity={2} roughness={0.2} metalness={1} />
      </mesh>
    </Float>
  );
}

export default ThreeD;
