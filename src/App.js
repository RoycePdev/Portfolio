import { Landing } from './Components/Landing.jsx'
import { FeaturedProject } from './Components/FeaturedProject.jsx'
import { Services } from './Components/Services.jsx'
import { Contact } from './Components/Contact.jsx'
import { Navbar } from './Components/Navbar.jsx'
import { FrontSub } from './Components/FrontSub.jsx'
import { LogSub } from './Components/LogSub.jsx'
import { Footer } from './Components/Footer.jsx'
import { useState } from 'react'
import { LightDarkTheme } from './Components/LightDarkTheme'
import { Slider } from './Components/Slider'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import './stylesheets/themes.css'

function App() {
  const [theme, setTheme] = useState('white')
  const [fontColor, setFontColor] = useState('black')
  const [lightBg, setlightBg] = useState('white')
  const [frSub, setFrSub] = useState('var(--light-primary)')
  const [frSubBk, setFrSubBk] = useState('var(--night-dark-primary)')
  const [contactBk, setContactBk] = useState('var(--dark-primary)')
  const [blobBk, setBlobBk] = useState('var(--blob-highlight)')
  const [lightTheme, setLightTheme] = useState(
    'linear-gradient(to bottom, var(--dark-primary) 0%,var(--dark-primary) 50%, var(--gray) 50%,var(--gray) 100%)'
  )

  function runLightMode() {
    setTheme('white')
    setFontColor('black')
    setlightBg('white')
    setBlobBk('var(--blob-highlight)')
    setFrSub('var(--light-primary)')
    setContactBk('var(--dark-primary)')
    setLightTheme(
      'linear-gradient(to bottom, var(--dark-primary) 0%,var(--dark-primary) 50%, var(--gray) 50%,var(--gray) 100%)'
    )
  }

  function runDarkMode() {
    setTheme('black')
    setFontColor('white')
    setlightBg('rgb(22, 21, 21)')
    setFrSub('white')
    setBlobBk('var(--blob-highlight-dark)')
    setContactBk('var(--night-dark-primary')
    setLightTheme(
      'linear-gradient(to bottom, var(--night-dark-primary) 0%,var(--night-dark-primary) 50%, var(--dark-gray) 50%,var(--dark-gray) 100%)'
    )
  }

  return (
    <>
      <div
        id='home'
        className='themes-main-container'
        style={{ background: theme }}
      >
        <div className='themes-sub-container'>
          <div className='color-container'>
            <div className='slider-container'>
              <Slider />
            </div>
            <div className='light-dark-container'>
              <button onClick={runLightMode} className='theme theme-light'>
                Ligdht
              </button>
              <button onClick={runDarkMode} className='theme theme-dark'>
                Dark
              </button>
            </div>
          </div>
          <div className='themes-social-container'>
            <ul className='themes-icon-container'>
              <li className='themes-icon twitter'>
                <a href='https://twitter.com/bschaferwebdev' target='_blank'>
                  <FaTwitter style={{ color: 'blue' }} />
                </a>
              </li>
              <li className='themes-icon github'>
                <a href='https://github.com/RoycePdev' target='_blank'>
                  <FaGithub
                    href='https://twitter.com/bschaferwebdev'
                    style={{ color: fontColor }}
                  />
                </a>
              </li>
              <li className='themes-icon linkedin'>
                <div className='linked-in-container'>
                  <a
                    href='https://www.linkedin.com/in/brian-schafer-b90353221/'
                    target='_blank'
                  >
                    <GrLinkedin
                      style={{ color: 'darkBlue', background: 'white' }}
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navbar fc={theme} />
      <Landing blob={blobBk} fc={fontColor} bg={theme} />
      <FrontSub
        cBk={contactBk}
        fs={frSub}
        bg={theme}
        nbg={frSubBk}
        fc={fontColor}
      />
      <LightDarkTheme bg={theme} fc={fontColor}>
        <FeaturedProject />
      </LightDarkTheme>
      <LogSub cBk={contactBk} lt={lightTheme} bg={theme} fc={fontColor} />
      <Services bg={theme} fc={fontColor} />
      <Contact
        bg={frSubBk}
        cBk={contactBk}
        dbg={theme}
        lbg={lightBg}
        fc={fontColor}
      />
      <Footer bg={contactBk} />
    </>
  )
}

export default App
