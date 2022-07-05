import React from 'react'
import ProjectCard from './projectCard'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Projects = ({ projects }) => {
  const router = useRouter()

  const openProject = (slug) => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    document.getElementById('start').classList.add('open-project')
    sleep(400).then(() => {
      router.push(`/projects/${slug}`)
    })
  }

  const getBannerUrl = (slug) => `/images/projects/${slug}/banner.png`

  return (
    <div className='w-full flex flex-col bg-transparent' id='projects'>
      <h2 className='uppercase text-6xl w-full text-center font-mono'>
        Projects
      </h2>
      <div
        className='grid lg:grid-cols-2 h-max w-[98%] gap-4 mx-auto mt-3 lg:mt-8'
        id='projectsGrid'
      >
        {projects.map((project, i) => {
          if (i === projects.length - 1) return
          return (
            <ProjectCard
              key={i}
              id={project.order}
              title={project.title.replace(/(^|\s)\S/g, function (t) {
                return t.toUpperCase()
              })}
              id={project.id}
              slug={project.slug}
              banner={getBannerUrl(project.slug)}
              openProject={openProject}
            />
          )
        })}
        <Link href='/projects/portfolio'>
          <span
            className='text-xl mt-3 ml-1 hover:cursor-pointer hover:bg-gradient-to-r
                                     hover:from-[#F7768E] hover:to-orange-400 hover:bg-clip-text
                                     hover:text-transparent text-[#7AA2F7] w-fit'
            onClick={() => openProject('portfolio')}
          >
            About this project...
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Projects
