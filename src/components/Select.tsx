"use client"

import React, { FC, useState } from "react"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"

interface Props {
  label: string
  icon?: React.ReactElement
  className?: string
  itemClassName?: string
  onClick?: () => void
  items: {
    text: string
    href?: string
    icon?: React.ReactElement
    onClick?: (ctx: any) => void
  }[]
}
export const Select: FC<Props> = ({ label, icon, items, className = '', itemClassName = '' }) => {
  const [toggled, setToggeled] = useState(false)

  return <div className={"relative cursor-pointer px-6 py-1 rounded text-lg " + className}>
    <div className="inline-flex items-center overflow-hidden hover:bg-gray-50 hover:bg-opacity-20 rounded" onClick={() => {
      setToggeled(!toggled)
    }}>
      <a
        href="#"
        className="border-e px-4 hover:text-gray-800"
      >
        {label}
        {icon && icon}
      </a>

      <a className="h-full p-2 text-gray-600  hover:text-gray-800">
        <span className="sr-only"></span>
        <IoIosArrowDown />
      </a>
    </div>

    {(toggled && items.length > 0) && (
      <div
        className="absolute -end-2 z-10 w-40 rounded-md bg-blur-2 text-center text-white"
        role="menu"
      >
        <div className="p-2 flex flex-col gap-2">
          {
            items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => item.onClick?.(item.text)}
                className={"flex h-8 items-center justify-center rounded-lg px-4 text-gray-300 hover:text-gray-400 bg-center bg-[url(/images/gaming-btn.png)] bg-contain bg-no-repeat " + itemClassName}
                role="menuitem"
              >
                {item.text}
              </a>
            ))
          }
        </div>
      </div>
    )}
  </div>
}


interface InlineSelectProps extends Props {
  direction?: 'left' | 'right'
}

export const InlineSelect: FC<InlineSelectProps> = ({ label, icon, items, className = '', itemClassName = '', direction = 'right' }) => {
  const [toggled, setToggeled] = useState(false)

  return <div className={"relative cursor-pointer px-4 rounded text-lg flex items-center " + className}>
    <div className="flex justify-center items-center hover:text-gray-800 overflow-hidden hover:bg-gray-50 hover:bg-opacity-20 rounded" onClick={() => {
      setToggeled(!toggled)
    }}>
      <a
        href="#"
        className="pl-4 pr-2 pt-2"
      >
        {label}
      </a>
      <div className="h-full pt-2 text-center" > | </div>
      <a className="h-full p-2">
        {icon ? icon : toggled ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </a>

    </div>

    {(toggled && direction == 'right') && (
      <div
        className="absolute start-36 w-auto z-10 rounded-md bg-blur-2 text-center text-white ml-5 "
        role="menu"
      >
        <div className="p-2 flex flex-row gap-2 justify-start">
          {
            items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => item.onClick?.(item.text)}
                className={"flex h-8 w-8 select-none items-center justify-center rounded-lg px-4 text-gray-300 hover:text-gray-400 bg-center bg-[url(/images/gaming-btn.png)] bg-contain bg-no-repeat " + itemClassName}
                role="menuitem"
              >
                {item.text}
              </a>
            ))
          }
        </div>
      </div>
    )}
  </div>
}