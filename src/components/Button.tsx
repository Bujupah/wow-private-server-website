import Image from 'next/image'
import { FC } from 'react';
import localFont from 'next/font/local'
import Link from 'next/link';

interface Props {
  label: string;
  href?: string;
  target?: '_blank' | undefined;
  className?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}

export const LifeCraft = localFont({
  src: '../../public/fonts/LifeCraft.ttf'
})

export const GameButton: FC<Props> = ({ label, href, onClick, width = 140, height = 120, className = '', target }) => {
  return <a href={href} className="py-1 relative" onClick={onClick} target={target}>
    <Image src="/images/gaming-btn.png" width={width} height={height} alt="btn" className='select-none' />
    <span className={"absolute top-2 text-center w-full text-white select-text " + className} style={LifeCraft.style}>{label}</span>
  </a>
}