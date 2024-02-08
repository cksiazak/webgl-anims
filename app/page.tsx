import React from 'react'

import FloatingSpheres from './animations/floatingSpheres/page'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href='/animations/floatingSpheres'>Floating Spheres</Link>
    </main>
  );
}
