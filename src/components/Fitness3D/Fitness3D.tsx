'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';
import styles from './Fitness3D.module.css';

// Animated 3D Fitness Equipment
function FitnessDumbbell({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <Box args={[0.3, 0.3, 1.5]} position={[-0.4, 0, 0]}>
        <meshStandardMaterial color="#0F3520" metalness={0.8} roughness={0.2} />
      </Box>
      <Box args={[0.3, 0.3, 1.5]} position={[0.4, 0, 0]}>
        <meshStandardMaterial color="#0F3520" metalness={0.8} roughness={0.2} />
      </Box>
      <Box args={[0.3, 0.3, 0.3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </Box>
    </group>
  );
}

function FitnessRing({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.4, 0.1, 16, 100]} />
      <meshStandardMaterial color="#0F3520" metalness={0.7} roughness={0.3} />
    </mesh>
  );
}

function FloatingParticles() {
  const particles = useRef<THREE.Points>(null);
  const count = 100;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#0F3520" transparent opacity={0.6} />
    </points>
  );
}

function EnergySphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#0F3520"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
}

export const Fitness3D: React.FC = () => {
  return (
    <div className={styles.fitness3DContainer}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className={styles.canvas}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0F3520" />
          
          <FloatingParticles />
          <EnergySphere />
          <FitnessDumbbell position={[-2, -1, 0]} />
          <FitnessDumbbell position={[2, 1, 0]} />
          <FitnessRing position={[-1.5, 1.5, -1]} />
          <FitnessRing position={[1.5, -1.5, -1]} />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

