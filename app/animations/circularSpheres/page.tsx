'use client'

import { CameraControls, Sphere } from '@react-three/drei'
import { Canvas, Vector3, useFrame } from '@react-three/fiber'

import { points } from './utils'
import { FC, useRef } from 'react'
import { Group, Mesh } from 'three'
import { DotScreen, EffectComposer } from '@react-three/postprocessing'

const Point = ({ point }: { point: typeof points[0]}) => {
  return (
    <Sphere position={point.position} args={[0.1, 10, 10]} scale={point.scale}>
        <meshStandardMaterial color='purple' emissive={'purple'} emissiveIntensity={0.5} roughness={0.5} />
    </Sphere>
  )
}

const InnerCanvas = () => {
  const ref = useRef<Group>(null!);

  useFrame(({ clock, pointer }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05
      ref.current.rotation.y = pointer.y / 10
      ref.current.rotation.x = pointer.x / 10
    }
  })

  return (
    <group ref={ref}>
      {points.map((point: typeof points[0]) => (
        <Point key={point.idx as number} point={point} />
      ))}
    </group>
  )
}

const CircularSpheres = () => {
  const aspect = typeof window !== 'undefined' ? window.innerWidth / window.innerHeight : 1
  return (
    <div style={{
      height: '100vh',
      width: '100vw'
    }}>
      <div style={{ height: '100%', width: '100%', background: 'black' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, -10] }} shadows>
          <directionalLight intensity={0.5} />
          <ambientLight />
          <InnerCanvas />
        </Canvas>
      </div>
    </div>
  )
}

export default CircularSpheres
