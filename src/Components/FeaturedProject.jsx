import React from 'react'
import '../stylesheets/featuredproject.css'
import '../images/codepen.png'

export const FeaturedProject = (props) => {
  const projects = {
    projectOne: {
      description:
        'This is a clone of the website codepen done with the react library',
      background: 'yay',
    },
    projectTwo: {
      description:
        'This is a tool that uses the Github API to search Github users',
      background: 'yay',
    },
  }

  // console.log(projectOne.description)

  return (
    <div className='featured-project-main-container'>
      <div className='featured-project-items-container'>
        <h3 className='featured-project-header section-title'>
          Latest Projects
        </h3>
        <div className='projects-container'>
          <div className='project-one-container'>
            <h4 className='project-title'>Codepen Clone</h4>
          </div>
          <div className='project-two-container'>
            <h4 className='project-title'>Github API Search</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
