"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { rinkitName } from "@/data/ChiragData/data"

export const TitleUpdater = () => {
  const pathname = usePathname()

  useEffect(() => {
    const baseTitle = rinkitName
    let title = baseTitle
    
    if (pathname === "/") {
      title = baseTitle
    } else if (pathname.startsWith("/lab")) {
      title = `Lab | ${baseTitle}`
    }
    
    document.title = title
  }, [pathname])

  return null
}