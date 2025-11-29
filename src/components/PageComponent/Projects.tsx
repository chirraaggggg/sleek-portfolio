"use client"
import { projects } from "@/data/Common/data"
import ProjectBox from "../ProjectBox"
import SectionTitle from "../SectionTitle"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  let delayValue = 0
  return (
    <div id="projects" className="flex flex-col gap-3">
      <SectionTitle title="Projects" />
      <div className="flex flex-col md:gap-2.5 gap-3.5">
        {projects.map((project) => (
          <AnimatedWrapper
            key={project.id}
            delay={project.id === 1 ? delayValue : (delayValue += 0.075)}
          >
            <ProjectBox
              title={project.title}
              img={project.img}
              content={project.content}
              status={project.status}
              skill={project.skill}
              url={project.url || ""}
              github={project.github || ""}
              preview={project.preview || ""}
            />
          </AnimatedWrapper>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="https://github.com/chirraaggggg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 hover:bg-zinc-800/80 transition-colors duration-200 rounded-md border border-zinc-700/50 text-white text-sm"
        >
          <FaGithub className="text-lg" />
          <span>View All Projects on GitHub</span>
        </a>
      </div>
    </div>
  )
}

export default Projects
