import React from 'react'
import '../stylesheets/featuredproject.css'
import '../images/codepen.png'
import { Project } from './Project'

export const FeaturedProject = (props) => {
  const projects = [
    {
      name: 'project One',
      title: 'SDFadeShack Barbershop',
      description:
        'A website I developed using React for a barbershop where potential customers can learn more about the staff, services, contact info and even book appointments',
        link: 'https://nostalgic-beaver-9e8a63.netlify.app'
    },

  ]

  return (
    <div className='featured-project-main-container'>
      <div className='featured-project-items-container'>
        <h3 className='section-title featured-project-header'>
          Recent Projects
        </h3>
        <div className='featured-project-boxes-container'>
          {projects.map((project) => {
            return (
              <a href={project.link}>
              <Project
                key={project.name}
                name={project.title}
                description={project.description}
              ></Project>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
