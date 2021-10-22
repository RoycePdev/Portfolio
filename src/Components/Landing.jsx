import React, { useRef } from 'react'
import '../stylesheets/landing.css'
import { BiRefresh } from 'react-icons/bi'
import { useState, useEffect } from 'react'

import '../Components/Themes.jsx'

export const Landing = (props) => {
  const [quote, setQuote] = useState('quote')
  const [spin, setSpin] = useState(false)

  useEffect(async () => {
    const response = await fetch('https://type.fit/api/quotes')
    const data = await response.json()
    const randomQuote = data[Math.floor(Math.random() * data.length)]
    const item = randomQuote
    setQuote(item)
  }, [])

  const refresh = () => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)]
        setQuote(randomQuote)
      })
  }

  const spinner = () => {
    setSpin(true)
  }

  const buttonAction = () => {
    spinner()
    refresh()
    setTimeout(() => setSpin(false), 1000)
    console.log(spin)
  }

  return (
    <div className='landing-main-container' style={{ background: props.bg }}>
      <div className='landing-sub-container'>
        <div className='landing-title-container'>
          <div className='landing-header-sub-container'>
            <h1 className='landing-header'>
              <span className='landing-first-name'>Brian </span> <br />{' '}
              <span className='landing-last-name'>Schafer</span>
            </h1>
            <h3 className='landing-subheader'>Front-End Engineer (React)</h3>
          </div>
          <div className='blob-container'>
            <svg
              className='blob'
              viewBox='0 0 200 200'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill={props.blob}
                d='M37.3,-61.8C46.9,-51.8,52.3,-39.1,54.4,-27C56.6,-14.9,55.6,-3.5,57.1,10.5C58.7,24.6,62.8,41.3,57.6,53.3C52.5,65.3,37.9,72.5,22.1,78.7C6.2,85,-10.9,90.3,-26.2,86.9C-41.5,83.5,-55,71.4,-66.2,57.7C-77.5,44.1,-86.6,28.9,-87.1,13.6C-87.6,-1.7,-79.5,-17.1,-72.2,-32.9C-64.9,-48.7,-58.5,-64.8,-46.6,-73.8C-34.7,-82.7,-17.3,-84.5,-1.7,-81.8C13.8,-79.1,27.7,-71.8,37.3,-61.8Z'
                transform='translate(100 100)'
              />
            </svg>
            <blockquote className='blob-quote' style={{ color: props.fc }}>
              {quote.text} <br />
              <span className='quote-author'>
                -{quote.author === null ? 'Unknown' : quote.author}{' '}
              </span>
              <br />
              <BiRefresh
                style={{ color: props.fc }}
                className={`refresh-button ${spin && 'refresh-button-animate'}`}
                onClick={buttonAction}
              />
            </blockquote>
          </div>
        </div>
        <div className='github-container'>
          <a href='https://github.com/roycepdev' target='_blank'>
            <button className='landing-github-button'>GitHub</button>
          </a>
          <div className='eyeballs'>👀</div>
        </div>
      </div>
    </div>
  )
}
