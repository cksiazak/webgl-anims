'use client'

import { CameraControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import { points } from '../floatingSpheres/utils'
import { useRef } from 'react'
import { Group } from 'three'
import { DotScreen, EffectComposer } from '@react-three/postprocessing'

const InnerCanvas = () => {
  const ref = useRef<Group>(null!);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {points.map((point, key) => (
        <Sphere key={key} position={point.position} args={[1, 4, 4]} rotation={point.rotation} scale={point.scale}>
          <meshStandardMaterial flatShading color='purple' emissive={'purple'} emissiveIntensity={0.1} roughness={0.5} />
        </Sphere>
      ))}
    </group>
  )
}

const First = () => {
  const aspect = typeof window !== 'undefined' ? window.innerWidth / window.innerHeight : 1
  return (
    <div style={{ height: '100%', width: '100%', background: 'black' }}>
      <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, -10] }} shadows>
        <directionalLight intensity={0.5} />
        <ambientLight />
        <InnerCanvas />
      </Canvas>
    </div>
  )
}

export default First
