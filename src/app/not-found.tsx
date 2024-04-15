'use client' // Error components must be Client Components

import { Navbar } from '@/components/Navbar'
import localFont from 'next/font/local'
import Image from 'next/image'


const LifeCraft = localFont({
  src: '../../public/fonts/LifeCraft.ttf'
})

export default function NotFound() {

  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-0 sm:px-24 bg-gray-950">

      <Navbar />
      <section className="flex flex-col items-center justify-center w-screen h-screen bg-top bg-[url(/images/world.jpg)]">
        <Image src={"/images/logo.png"} width={400} height={40} alt='Logo' />
        <div>
          <div className="text-9xl text-blue-950" style={LifeCraft.style}>404</div>
          <div className="text-4xl text-blue-950" style={LifeCraft.style}>Page Not Found</div>
        </div>
      </section>
      <footer></footer>

    </main>
  )
}