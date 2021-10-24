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

  return (
    <div className='featured-project-main-container'>
      <div className='featured-project-items-container'>
        <h3 className='featured-project-header section-title'>
          Latest Projects
        </h3>
      </div>
    </div>
  )
}
