import React from 'react'
import '../stylesheets/featuredproject.css'
import '../images/codepen.png'
import { Project } from './Project'

export const FeaturedProject = (props) => {
  const projects = [
    {
      name: 'project One',
      title: 'Project space',
      description:
        'This is a clone of the website codepen done with the react library',
    },
    {
      name: 'project Two',
      title: 'Earth clone',
      description:
        'This is a tool that uses the Github API to search Github users',
    },
    {
      name: 'project Three',
      title: 'my THird Project',
      description: 'description of my third project',
    },
  ]

  return (
    <div className='featured-project-main-container'>
      <div className='featured-project-items-container'>
        <h3 className='section-title featured-project-header'>
          Recent Projects
        </h3>
        This section is under construction. Projets are listed on <a href="https://github.com/roycepdev">Github</a>
        {/* <div className='featured-project-boxes-container'>
          {projects.map((project) => {
            return (
              <Project
                key={project.name}
                name={project.title}
                description={project.description}
              />
            )
          })}
        </div> */}
      </div>
    </div>
  )
}
