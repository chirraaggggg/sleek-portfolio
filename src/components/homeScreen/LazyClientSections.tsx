"use client"
import dynamic from "next/dynamic"

const Projects = dynamic(() => import("../PageComponent/Projects"), { ssr: false })

const LazyClientSections = () => {
  return (
    <>
      <Projects />
    </>
  )
}

export default LazyClientSections