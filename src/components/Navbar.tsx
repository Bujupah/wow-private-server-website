"use client"

import Link from "next/link"
import Image from "next/image"

import localFont from 'next/font/local'

import { FC } from "react"
import { Select, InlineSelect } from "./Select"
import { BiSupport, BiUserCircle } from "react-icons/bi"
import { IoLanguage } from "react-icons/io5"
import { Anchor } from "./Anchor"
import { GameButton } from "./Button"

export const Folkard = localFont({
  src: '../../public/fonts/Folkard.ttf'
})

export const LifeCraft = localFont({
  src: '../../public/fonts/LifeCraft.ttf'
})

export const Navbar: FC = () => {
  return <header className={"w-full fixed top-0 " + LifeCraft.className}>
    <nav className={"w-full flex justify-between pt-4 px-4 lg:px-24 " + Folkard.className}>
      <div className="w-full flex flex-wrap text-blue-950 justify-center lg:justify-start items-center">
        <Anchor label="Support" href="/support" icon={<BiSupport />} />
        <InlineSelect
          label="Language"
          icon={<IoLanguage />}
          itemClassName="bg-[url(/images/social.png)] pt-2 text-sm"
          items={[
            { text: "TN", href: "#tn", onClick: (text) => console.log(text) },
            { text: "EN", href: "#en", onClick: (text) => console.log(text) },
          ]}
        />
      </div>
      <Anchor label="Account" href="/account" icon={<BiUserCircle size={20} />} show={false} />
    </nav>
    <nav className="">
      <Image src="/images/decor-line-1.png" alt="World of Warcraft" width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="flex flex-wrap justify-center lg:justify-between items-center px-4 lg:px-24 py-0 text-blue-950">
        <Link className="flex items-center gap-4" href="/">
          <Image src="/images/favicon.ico" alt="WoT" width={50} height={50} />
          <div className={"logo text-3xl " + LifeCraft.className}>Legend of the North</div>
        </Link>
        <div className="hidden sm:flex gap-4 flex-wrap justify-center lg:justify-between">
          <Anchor label="Shop" href="/shop" className="w-32" />
          <Select
            label="Community"
            className="w-40"
            items={[
              { text: "Facebook", href: "#" },
              { text: "Discord", href: "#" },
            ]}
          />
          <Anchor label="About us" href="/about-us" className="w-32" />
          <GameButton href="/join" label="JOIN NOW" className="" />
        </div>
      </div>
      <Image src="/images/decor-line-2.png" alt="World of Warcraft" width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </nav>

    {/* Mobile design */}
    <nav className="flex sm:hidden fixed bottom-0 w-full justify-between py-4 flex-wrap">
      <GameButton label="Shop" href="/shop" className="top-3" width={180} />
      <GameButton label="Discord" target="_blank" href="https://discord.com/" className="top-3" width={180} />
      <GameButton label="Facebook" target="_blank" href="https://www.facebook.com/" className="top-3" width={180} />
      <GameButton label="About" href="/about-us" className="top-3" width={180} />
    </nav>
  </header>
}