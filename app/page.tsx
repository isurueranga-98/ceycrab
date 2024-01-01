
import Dishes from '@/components/Dishes'
import Hero from '@/components/Hero'
import Images from '@/components/Images'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero/>
      <Dishes/>
      <Images/>
    </main>
  )
}
