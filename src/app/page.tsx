import { GameButton } from '@/components/Button';
import Image from 'next/image'

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-0 sm:px-24 bg-gray-950">
      <section className="flex flex-col items-center justify-center w-screen h-screen bg-top bg-[url(/images/world.jpg)]">
        <Image src={"/images/logo.png"} width={440} height={40} alt='Logo' />
        <div>
          <GameButton label="Download Client 3.3.5a" href="/play" height={200} width={300} className=' text-2xl pt-2 place-items-baseline' />
          <GameButton label="Download Patch" href="/play" height={200} width={300} className=' text-2xl pt-2 place-items-baseline' />
        </div>

        <div>
          <GameButton label="set realmlist wow-twensa.tn" height={200} width={300} className=' text-xs pt-4 place-items-baseline !font-mono' />
        </div>
      </section>
    </main>
  );
}
