import React from 'react'
import '../stylesheets/featuredproject.css'


export const Project = (props) => {

  const { name, description } = props

  return (
    <div className="project-card">
      <div className="project-name">{name}</div>
      <div className="project-description">{description}</div>
    </div>
  )
}
