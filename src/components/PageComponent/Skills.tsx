"use client"

import { useEffect, useState } from "react"
import SectionTitle from "../SectionTitle"
import { skills as allSkills } from "@/data/Common/data"

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex flex-col gap-2">
        <SectionTitle title="Skills & Tools" />
        <div className="flex flex-wrap gap-1.5">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-8 w-24 bg-zinc-800/50 rounded-md animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <SectionTitle title="Skills & Tools" />
      <div className="flex flex-wrap gap-1.5">
        {allSkills.map((skill) => (
          <div 
            key={skill.id} 
            className={`group flex items-center gap-2 ${[17, 20, 28].includes(skill.id) ? 'hover:bg-white/10' : 'hover:bg-zinc-800/80'} bg-zinc-800/50 transition-all duration-200 px-3 py-1.5 rounded-md border border-zinc-700/50 hover:scale-105`}
          >
{skill.id === 17 ? (
              <span className="relative group">
                <skill.icon className="text-lg text-[#2D3748] group-hover:text-[#5A67D8] transition-colors duration-200" />
                <span className="absolute -right-1 -bottom-1 w-1.5 h-1.5 bg-[#5A67D8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              </span>
            ) : skill.id === 28 ? (
              <span className="relative">
                <skill.icon className="text-lg text-white group-hover:opacity-80 transition-opacity duration-200" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </span>
            ) : skill.id === 9 ? (
              <skill.icon className="text-lg text-white" />
            ) : skill.id === 2 ? (
              <skill.icon className="text-lg text-black dark:text-white" />
            ) : skill.id === 20 ? (
              <skill.icon 
                className="text-lg text-white"
              />
            ) : skill.id === 15 ? (
              <span className="relative group">
                <skill.icon 
                  className="text-lg" 
                  style={{ color: skill.color }}
                />
                <span className="absolute -right-1 -bottom-1 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              </span>
            ) : (
              <skill.icon 
                className="text-lg" 
                style={{ color: skill.color }} 
              />
            )}
            <span className="text-white text-sm">{skill.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills