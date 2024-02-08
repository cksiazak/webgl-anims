'use client'

import { CameraControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import { points } from './utils'
import { useRef } from 'react'
import { Group, Mesh } from 'three'
import { DotScreen, EffectComposer } from '@react-three/postprocessing'

const Point = ({ point }: { point: typeof points[0]}) => {
  const ref = useRef<Mesh>(null!);

  return (
    <Sphere ref={ref} position={point.position} args={[1, 4, 4]} rotation={point.rotation} scale={point.scale}>
      <meshStandardMaterial flatShading color='purple' emissive={'purple'} emissiveIntensity={0.1} roughness={0.5} />
    </Sphere>
  )
}

const InnerCanvas = () => {
  const ref = useRef<Group>(null!);

  useFrame(({ pointer }) => {
    if (ref.current?.rotation) {
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

const First = () => {
  const aspect = typeof window !== 'undefined' ? window.innerWidth / window.innerHeight : 1
  return (
    <div style={{
      height: '100vh',
      width: '100vw'
    }}>
      <div style={{ height: '100%', width: '100%', background: 'black' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, -10] }} shadows>
          <directionalLight intensity={0.8} />
          <ambientLight />
          <InnerCanvas />
        </Canvas>
      </div>
    </div>
  )
}

export default First
