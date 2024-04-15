import localFont from 'next/font/local'
import Image from 'next/image'


const LifeCraft = localFont({
  src: '../../../public/fonts/LifeCraft.ttf'
})

const Index = () => {
  return <main className="flex flex-col items-center justify-between min-h-screen px-0 sm:px-24 bg-gray-950">
    <section className="flex flex-col items-center justify-center w-screen h-screen bg-top bg-[url(/images/world.jpg)]">
      <Image src={"/images/logo.png"} width={440} height={40} alt='Logo' />
      <div className='text-center'>
        <div className="text-9xl text-blue-950" style={LifeCraft.style}>🚧</div>
        <div className="text-4xl text-blue-950" style={LifeCraft.style}>Under construction </div>
      </div>

    </section>
  </main>
}

export default Index;