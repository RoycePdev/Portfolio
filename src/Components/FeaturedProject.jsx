import React from 'react'
import '../stylesheets/featuredproject.css'
import '../images/codepen.png'
import { Project } from "./Project"

export const FeaturedProject = (props) => {
  const projects = [
    {
      name: 'project One',
      title: 'project space',
      description:
        'This is a clone of the website codepen done with the react library',
    },
    {
      name: 'project Two',
      title: 'earth clone',
      description:
        'This is a tool that uses the Github API to search Github users',
    },
  ]

  return (
    <div className='featured-project-main-container'>
      <div className='featured-project-items-container'>
        {projects.map((project) => (
        <Project key={project.name} />))}
      </div>
    </div>
  )
}
