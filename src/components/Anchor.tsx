import Link from "next/link"
import { FC } from "react"

interface Props {
  label: string
  href: string
  show?: boolean;
  className?: string
  icon?: React.ReactElement
}
export const Anchor: FC<Props> = ({ label, href, icon, className, show = true }) => {
  if (!show) return null
  return <div className={"relative cursor-pointer rounded text-lg flex items-center " + className}>
    <Link className="flex justify-center items-baseline hover:text-gray-800  hover:bg-gray-50 hover:bg-opacity-20 rounded px-4 gap-2 w-full" href={href}>
      <div
        className="pt-1"
      >
        {label}
      </div>
      {icon && (
        <>
          <div className="h-full pt-2 text-center" > | </div>
          <div className="relative top-1 h-full">
            {icon}
          </div>
        </>
      )}
    </Link>
  </div>
}