import React from 'react'

import FloatingSpheres from './animations/floatingSpheres/page'
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Link href='/animations/floatingSpheres'>Floating Spheres</Link>
      <Link href='/animations/circularSpheres'>Circular Spheres</Link>
    </main>
  );
}
